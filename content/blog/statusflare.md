---
title: "StatusFlare: Forging a Serverless Watchtower"
description: "How I built a dynamic monitoring system and survived the great LDAP/OIDC identity war of 2026."
date: 2026-03-10
tags: ["self-hosting", "cloudflare", "lldap", "authelia", "nextcloud", "devops"]
---

# StatusFlare: Forging a Serverless Watchtower

If you're running your own infrastructure, you're constantly looking for the "Red Light." The moment a service goes down, you're usually the last to know—unless you build a watchtower.

Today, I finished **StatusFlare**, my custom-built, serverless status dashboard. But the road to getting it live turned into a full-scale tactical overhaul of my entire identity stack.

## The Weapon: StatusFlare

StatusFlare isn't just another status page. It's built to be fast, indestructible, and zero-maintenance.

- **The Core**: Built on **Cloudflare Workers** (TypeScript). It runs at the edge, meaning it monitors my services from data centers all over the planet, not just from my home network.
- **The Brain**: Powered by **Cloudflare D1**, a serverless SQL database. It tracks every ping, every latency spike, and every outage snippet.
- **The Look**: A custom "Glassmorphism" UI using the **Catppuccin Mocha/Latte** palette with Mauve highlights.
- **Automated**: A background cron job polls my arsenal every 60 seconds. If a service blinks, the dashboard reflects it instantly.

Check it out live: [status.helltop.net](https://status.helltop.net)

## The Identity War: LLDAP, Authelia, and Nextcloud

Building the dashboard was the easy part. Integrating it into a unified SSO (Single Sign-On) experience was where the real fighting started.

I had multiple identities floating around. Two Nextcloud accounts, a fragmented LDAP directory, and an Authelia instance that was caught in a crash loop. I decided to level the field and rebuild.

### Tactical Moves:
1.  **Database Surgery**: I manually re-seeded the LLDAP user database, synchronized the cryptographic keys (the `key_seed`), and re-created a stable `admin` service account.
2.  **The Great Nextcloud Merge**: I identified two accounts sharing the same email. I performed an ownership transfer, consolidated all files into one LDAP-linked identity, and deleted the redundant ghost account.
3.  **OIDC Synchronization**: I survived the "Client Authentication Failed" trenches by force-syncing fresh PBKDF2 secrets between Authelia and Nextcloud via the `occ` command line.

The result? A single, secured administrative identity now unlocks the entire arsenal.

## Hardening the Infrastructure

While I was at it, I optimized the physical layer:

- **BTRFS Optimization**: Enabled `zstd` compression and `noatime` on my HDD media array to save space and reduce seek latency.
- **Root SSD Care**: Injected `discard=async` into the root mount to handle TRIM in the background, keeping the SSD fast and healthy.
- **RAM-Speed Caches**: With 128GB of RAM available, I moved all heavy-write caches (`yay` builds, browser profiles, `node-gyp`) into a **32GB tmpfs**. My SSD now only writes what matters; the rest lives and dies in the speed of memory.

## Automation & CI/CD

The final piece of the puzzle was **Forgejo Actions**. I deployed a local runner (the "Helltop Runner") inside my Docker stack. Now, every time I push code to [git.helltop.net](https://git.helltop.net), the runner:
1.  Checkouts the code via a secure local mirror (`data.forgejo.org`).
2.  Lints and type-checks the TypeScript.
3.  Automatically deploys the worker to Cloudflare.

## Conclusion

Self-hosting isn't just about running apps; it's about understanding every layer of your stack. From the filesystem mount options to the OIDC handshake protocols, total control requires total comprehension.

The watchtower is active. The arsenal is synchronized. The rebellion continues.

---
**Status**: [All Systems Operational](https://status.helltop.net/)
