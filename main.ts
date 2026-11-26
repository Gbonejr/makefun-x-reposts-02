// main.ts -- entry program for makefun-x-reposts-02 (Node 22, stdlib only).
//
// The entry is the entrant's own posts on X: each one quotes, or replies
// directly to, a different one of make.fun's newest posts on x.com/makefunai,
// and POSTS.json at the repository root lists their addresses (1 to 15).
// This program reads that list, checks its shape, and copies it unchanged
// to $MAKEFUN_OUTPUT_DIR/POSTS.json, where the house reads it. Nothing the
// program writes about the posts is scored: the house reads the posts
// themselves from X and writes its own counts file.
//
// Deterministic by design: no network, no wall clock, no randomness, no
// files outside the repository. Two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate reads POSTS.json only when it is at most 16384 bytes.
const MAX_POSTS_BYTES = 16384;
const MAX_POSTS = 15;
const MIN_POSTS = 1;

// An X post address, as the gate reads it: x.com or twitter.com (www. or
// mobile. allowed), /<handle>/status/<digits>, or /i/web/status/<digits>;
// a query string or fragment after the id is read past.
const STATUS_URL =
  /^https?:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/(\d+)|[^/]+\/status\/(\d+))(?:[/?#].*)?$/;

// The starter ships POSTS.json with <handle> / <id> placeholders. Refuse
// them with a message that says what to do, instead of a bare URL error.
const PLACEHOLDER = /<[^>]*>/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

function postIdOf(address: unknown): string {
  if (typeof address !== 'string') {
    fail('every item in "posts" must be a string address');
  }
  if (PLACEHOLDER.test(address)) {
    fail(
      'POSTS.json still holds the starter placeholder: replace it with your ' +
        'posts\' addresses (Share, then Copy link, on each of your X posts)',
    );
  }
  const match = STATUS_URL.exec(address);
  if (match === null) {
    fail(`not an X post address: ${address}`);
  }
  return match[1] ?? match[2]!;
}

function main(): void {
  const postsPath = join(BOT_DIR, 'POSTS.json');
  let raw: Buffer;
  try {
    raw = readFileSync(postsPath);
  } catch (err) {
    fail(`could not read POSTS.json from ${BOT_DIR}: ${(err as Error).message}`);
  }

  if (raw!.length > MAX_POSTS_BYTES) {
    fail(`POSTS.json is ${raw!.length} bytes, over the ${MAX_POSTS_BYTES} byte cap`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw!.toString('utf-8'));
  } catch (err) {
    fail(`POSTS.json is not valid JSON: ${(err as Error).message}`);
  }

  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail('POSTS.json must be a JSON object of the form {"posts": [...]}');
  }
  const posts = (parsed as { posts?: unknown }).posts;
  if (!Array.isArray(posts)) {
    fail('POSTS.json must hold a "posts" list of X post addresses');
  }
  if (posts.length < MIN_POSTS || posts.length > MAX_POSTS) {
    fail(`"posts" must name ${MIN_POSTS} to ${MAX_POSTS} posts, got ${posts.length}`);
  }

  const ids = posts.map(postIdOf);
  if (new Set(ids).size !== ids.length) {
    fail('the same post is named twice in "posts"');
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = join(OUTPUT_DIR, 'POSTS.json');
  try {
    copyFileSync(postsPath, outPath);
  } catch (err) {
    fail(`could not write POSTS.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  }

  // Read the copy back and check it byte for byte: the gate must see exactly
  // the list this program validated, so a short or partial write is a failure.
  let written: Buffer;
  try {
    written = readFileSync(outPath);
  } catch (err) {
    fail(`could not read back ${outPath}: ${(err as Error).message}`);
  }
  if (!written!.equals(raw!)) {
    fail(`${outPath} does not match POSTS.json after copying`);
  }

  console.log(`main.ts: copied POSTS.json with ${posts.length} post(s) to ${OUTPUT_DIR}`);
}

main();
