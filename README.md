# Helltop

My Digital Rebellion. Fuck the corporate cloud. Build your own.

## 🏴 Philosophy

This repository is built on the following principles:

- **Ease of Use:** To be so easy to use as to require no instruction.
- **Code Accessibility:** To be easy to compile and, if necessary, port to new platforms by people with relatively little knowledge of code in general.
- **Simplicity:** To have a minimum number of files to be dealt with for compilation and installation.
- **Utility:** To have enough functionality to be useful to a large number of people.

## 🚀 Stack

- **Framework:** Astro 7 (Server-side rendering on Cloudflare)
- **Database:** MongoDB (official `mongodb` driver 6.x) via MongoDB Atlas
- **Styling:** Tailwind CSS 4 + Catppuccin Mocha
- **Components:** Astro, Svelte 5, Alpine.js
- **CMS:** Local MDX-based Content Layer

##  Genie Commands

| Command | Action |
| :--- | :--- |
| `bun install` | Install all necessary dependencies |
| `bun run dev` | Launch local development server |
| `bun run build` | Build the production artifact for Cloudflare Workers |
| `bun run check` | Run type checking and accessibility audits |
| `bun run generate-types` | Generate Cloudflare Worker types from wrangler.jsonc |

## 🛠 Infrastructure

Helltop is designed for sovereign computing. It integrates with:

- **Authelia:** For OIDC/LDAP identity management.
- **StatusFlare:** For distributed monitoring and status badges.
- **Forgejo:** For git hosting.
- **Tailscale:** For secure mesh networking.
- **MongoDB Atlas:** For comment persistence (collection `comments`, connection via `MONGODB_URI` secret).

### MongoDB Setup

1. Create a MongoDB Atlas cluster (or self-host).
2. Set `MONGODB_URI` as a Worker secret: `wrangler secret put MONGODB_URI`
3. Optionally set `MONGODB_DB` (defaults to DB encoded in URI or `helltop`).
4. Add `MONGODB_URI` and `MONGODB_DB` to `.env` / `.dev.vars` for local dev.

---

*“I'm building networks with digital freedom fighters who are tired of asking permission. Let's build something that lasts.”*
