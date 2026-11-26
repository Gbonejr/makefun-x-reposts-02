# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Gbonejr/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Gbonejr/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty ($500 in USDC, top 50 share it). The entry is a set of posts on X from one public account (@quincy52534), each quoting or replying directly to a different one of make.fun's newest posts on x.com/makefunai, listed in POSTS.json. Score: 2 points per repost, 2 per quote, 1 per like, summed over all listed posts, read at the deadline. The program in this repository (main.ts, Node 22) only validates POSTS.json and copies it to the output directory; the house reads the posts themselves from X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Posts

See POSTS.json at the repository root and POOL_AND_DRAFTS.md for the pool rules and the draft text of each post.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
