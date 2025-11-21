---
title: "Building This Site: NuxtHub, Cloudflare, and Owning Your Platform"
description: "How I built a fast, self-controlled website using NuxtHub and Cloudflare without surrendering to traditional hosting bullshit"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Web Development"
slug: "FTS"
layout: "blog"
draft: false
---
You're reading this on a site I built because I refuse to pay rent to corporate platforms that treat creators like inventory. This site is a practical demonstration: markdown in git, Nuxt 3 for rendering, NuxtHub for deployment, Cloudflare's edge for global delivery. Fast, cheap, and owned by me.

Why I picked this stack: it gives me global performance without the bullshit of managed hosting and without surrendering my content to a platform that can deplatform me tomorrow.

Quick, no-nonsense bootstrap:

```bash
# scaffold a Nuxt 3 site
npx nuxi@latest init my-site
cd my-site

# install deps
npm install

# add minimal modules
npm install @nuxthub/core @nuxt/content

# dev locally
npm run dev
```

Link your repo to NuxtHub and deploy to Cloudflare:

```bash
npx nuxthub login
npx nuxthub link   # follow prompts to connect your Cloudflare account
npx nuxthub deploy
```

Notes and principals:

- Keep your content in `content/` with frontmatter — simple, versioned, portable.
- Use `nitro.routeRules` to set caching for ` /uploads` and static assets.
- Add an RSS route (`server/routes/rss.xml.ts`) that reads `queryContent('/blog')`.

This setup isn't free of trade-offs: you still rely on Cloudflare for edge hosting. But compared to handing content to a hosted CMS, you keep control, avoid recurring platform lock-in, and run a site that's fast worldwide.

Want me to generate a minimal `nuxt.config.ts` and `package.json` tuned for this repo? I can add that next.
- **11ty + Vercel**: Minimal JS, fast, flexible
- **Self-hosted Ghost**: If you want a proper CMS
- **Write.as**: If you want maximum simplicity

But if you want the balance of control, performance, and modern tooling - NuxtHub is hard to beat.

## Final Thoughts

This site serves markdown content from git, deploys globally on Cloudflare's edge, costs essentially nothing to run, and gives me complete control over every aspect.

No WordPress security updates. No plugin conflicts. No database backups. No server maintenance. No platform that can deplatform me.

Just code, content, and control.

If you value owning your platform, understanding your stack, and not paying monthly rent to platforms that treat you like a product - build your own site with NuxtHub.

---

*Questions about my setup? Want to see my actual code? Reach out via [email](mailto:lucyrandall@helltop.net) or check my repositories on [GitHub](https://github.com/anoraktrend)/[Codeberg](https://codeberg.org/anoraktrend).*
