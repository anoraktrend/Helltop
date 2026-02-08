---
title: "Fork This Site: Self Hosting and Simplified Web Design"
description: "How I built a fast, self-controlled website using Nuxt 3 and Cloudflare Workers without surrendering to traditional hosting bullshit"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Web Development"
slug: "FTS"
layout: "blog"
draft: false
---

# Fork This Site: Self Hosting and Simplified Web Design
You're reading this on a site I built because I refuse to pay rent to corporate platforms that treat creators like inventory. This site is a practical demonstration: content written in markdown, Nuxt 4 for rendering, and Cloudflare Workers for deployment. Fast, cheap, and owned (mostly) by me.

Why I picked this stack: it gives me global performance without the bullshit of managed hosting and without surrendering my content to a platform that can deplatform me tomorrow.

Quick, no-nonsense bootstrap:

```bash
# scaffold a Nuxt 3 site
git clone https://github.com/anoraktrend/Helltop my-site
cd my-site

# install deps
pnpm install

# dev locally
pnpm run dev
```

Deploy directly to Cloudflare Workers:

```bash
# Install Wrangler
pnpm install -g wrangler

# Build for Cloudflare Workers
pnpm run build

# Deploy
npx wrangler deploy
```

Notes and principles:

- Keep your content in `content/` with frontmatter — simple, versioned, portable.
- Use `nitro.routeRules` to set caching for `/uploads` and static assets.
- Add an RSS route (`server/routes/rss.xml.ts`) that reads `queryContent('/blog')`.
- Configure Nuxt to use Cloudflare Workers preset in `nuxt.config.ts`:
  ```typescript
  export default defineNuxtConfig({
    nitro: {
      preset: 'cloudflare',
    },
  })
  ```

This setup isn't free of trade-offs: you still rely on Cloudflare for edge hosting. But compared to handing content to a hosted CMS, you keep control, avoid recurring platform lock-in, and run a site that's fast worldwide.

- **11ty + Vercel**: Minimal JS, fast, flexible
- **Self-hosted Ghost**: If you want a proper CMS
- **Write.as**: If you want maximum simplicity

But if you want the balance of control, performance, and modern tooling - Nuxt 4 with Cloudflare Workers is hard to beat.

## One Last Hurdle: CI
While *I* enjoy using my computer to build and write my website, I understand those of a less...
active desire to build their own software may not. I have included at least a GitHub workflow. Someone else can come along and write one for Codeberg's Forgejo CI... maybe a future me.

## Final Thoughts

This site serves markdown content from git, deploys globally on Cloudflare's edge, costs essentially nothing to run, and gives me complete control over every aspect.

No WordPress security updates. No plugin conflicts. No database backups. No server maintenance. No platform that can deplatform me.

Just code, content, and control.

If you value owning your platform, understanding your stack, and not paying monthly rent to platforms that treat you like a product - build your own site with Nuxt 3 and Cloudflare Workers.

---
-# *Questions about my setup? Want to see my actual code? Reach out via [email](mailto:lucyrandall@helltop.net) or check my repositories on [GitHub](https://github.com/anoraktrend)/[Codeberg](https://codeberg.org/anoraktrend).*
