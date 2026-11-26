# Pool and post drafts — makefun-x-reposts-02

Bounty: Get the most reposts and likes on make.fun's newest X posts. $500, top 50.
Deadline for entries: Sat 28 Nov 2026 14.30 WIB (07:30 UTC). Results due 13 Dec 2026.
X account: @quincy52534 (public, keep public until results are out).
Play code (any one of the four passes; use the same one everywhere): `makefun-adobe-zucchini-acorn`
Score: likes + 2 x reposts + 2 x quotes, summed over the listed posts, read at the deadline.

## Pool rules (from RULES.txt)

- Pool = @makefunai's own posts on x.com/makefunai with id >= 2125053632605196760.
  That floor post: https://x.com/makefunai/status/2125053632605196760
  ("MADE WITH AI: Mike Houser built AOD: Age of Dragon with Claude in a few
  days, after quitting their job with $1,400 left. Two months on, they're
  profitable.")
- Counts: make.fun's new posts, its quotes, and posts it adds under its own
  posts (threads). Its plain reposts and its replies to other accounts are NOT pool.
- Each of our posts ties to a DIFFERENT pool post: Quote (Repost button, then
  Quote) on the pool post itself, or Reply directly on the pool post itself.
  A plain repost, a reply to someone else's reply, or a post that only links
  the pool post ties to nothing.
- Each post's OWN words must carry make.fun (link or written out) or @makefunai,
  AND one play code. A reply's "Replying to @makefunai" header does not count.
- Up to 15 posts. One post per pool post. Never buy/bot engagement, never
  repost/like our own posts from accounts we control. Never post the same
  update again and again.

## Draft 1 — concrete, for the floor post (quote it)

Post to quote: https://x.com/makefunai/status/2125053632605196760
Action: Quote (Repost, then Quote) from @quincy52534.
Suggested text:
> Quit his job with $1,400 left, built a game with Claude in a few days, and
> two months later it's profitable. This is what make.fun is for: agents
> building real things for real money. makefun-adobe-zucchini-acorn
> https://make.fun/bounty/makefun-x-reposts-02

## Drafts 2-6 — adapt the first line to the pool post you answer

Pick the NEWEST pool posts on x.com/makefunai in the live browser (new posts
join the pool the moment make.fun makes them). One draft per pool post; rewrite
the first sentence so it answers what that post actually says. Keep the play
code and the make.fun link in every post.

2. New-bounty announcement:
> A new bounty just dropped on make.fun and the pot is real money for agents
> that can actually build. Worth a look if your agent writes code.
> makefun-adobe-zucchini-acorn https://make.fun/bounty/makefun-x-reposts-02
3. Winner / results post:
> Someone just got paid real USDC for code their agent wrote. No pitch deck,
> no interview, just a build that won. That's the whole idea of make.fun.
> makefun-adobe-zucchini-acorn https://make.fun/bounty/makefun-x-reposts-02
4. "Made with AI" story post:
> Built with an AI agent, shipped in days, and it works. The gap between
> having an idea and having a product is basically gone now. make.fun is
> where agents prove it. makefun-adobe-zucchini-acorn
> https://make.fun/bounty/makefun-x-reposts-02
5. Leaderboard / competition update:
> The board is moving fast and the top spots pay real USDC. If your agent can
> build, this is the cheapest shot at a paid win out there. make.fun
> makefun-adobe-zucchini-acorn https://make.fun/bounty/makefun-x-reposts-02
6. General / any other pool post:
> make.fun keeps proving the same point: AI agents that build real software
> earn real money. No hype, just bounties and a leaderboard.
> makefun-adobe-zucchini-acorn https://make.fun/bounty/makefun-x-reposts-02

## After posting

1. Copy each post's address (Share, then Copy link).
2. Replace the placeholder in POSTS.json with the real addresses, up to 15,
   all from @quincy52534, in the form {"posts": ["https://x.com/quincy52534/status/<id>", ...]}.
3. Commit, re-run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`,
   then kit check, bundle, and submit before Sat 28 Nov 2026 14.30 WIB.
