# Helltop

My Digital Rebellion. Fuck the corporate cloud. Build your own.

## 🏴 Philosophy

This repository is built on the following principles:

- **Ease of Use:** To be so easy to use as to require no instruction.
- **Code Accessibility:** To be easy to compile and, if necessary, port to new platforms by people with relatively little knowledge of C and UNIX.
- **Simplicity:** To have a minimum number of files to be dealt with for compilation and installation.
- **Utility:** To have enough functionality to be useful to a large number of people.

## 🚀 Stack

- **Framework:** Astro 6 (Server-side rendering on Cloudflare)
- **Database:** Drizzle ORM + Cloudflare D1 (SQLite)
- **Styling:** Tailwind CSS 4 + Catppuccin Mocha
- **Components:** Astro, Svelte 5, Alpine.js
- **CMS:** Local MDX-based Content Layer

##  Genie Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install all necessary dependencies |
| `pnpm run dev` | Launch local development server |
| `pnpm run build` | Build the production artifact for Cloudflare Pages |
| `pnpm run astro check` | Run type checking and accessibility audits |
| `pnpm run generate-types` | Generate Cloudflare Worker types from wrangler.jsonc |

## 🛠 Infrastructure

Helltop is designed for sovereign computing. It integrates with:

- **Authelia:** For OIDC/LDAP identity management.
- **StatusFlare:** For distributed monitoring and status badges.
- **Forgejo:** For git hosting.
- **Tailscale:** For secure mesh networking.

---

*“I'm building networks with digital freedom fighters who are tired of asking permission. Let's build something that lasts.”*
