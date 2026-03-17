---
title: "StatusFlare: Forging a Serverless Watchtower"
description: "How I built a dynamic monitoring system and survived the great LDAP/OIDC identity war of 2026."
date: 2026-03-09
author: "Lucy Ada Randall"
category: "Self-Hosting"
slug: "statusflare"
layout: "blog"
draft: false
---

# StatusFlare: Forging a Serverless Watchtower

If you're running your own infrastructure, you're constantly looking for the "Red Light." The moment a service goes down, you're usually the last to know—unless you build a watchtower.

Today, I finished **StatusFlare**, my custom-built, serverless status dashboard. But the road to getting it live turned into a full-scale tactical overhaul of my entire identity stack.

## The Architecture: Serverless & Indestructible

StatusFlare isn't just another status page. It's built to be fast, indestructible, and zero-maintenance.

- **The Core**: Built on **Cloudflare Workers** (TypeScript). It runs at the edge, meaning it monitors my services from data centers all over the planet, not just from my home network.
- **The Brain**: Powered by **Cloudflare D1**, a serverless SQL database. It tracks every ping, every latency spike, and every outage snippet.
- **The Look**: A custom "Glassmorphism" UI using the **Catppuccin Mocha/Latte** palette with Mauve highlights. It supports both light and dark modes natively.
- **Automated**: A background cron job (`* * * * *`) polls the entire arsenal every 60 seconds.

## Recent Tactical Upgrades

The project has evolved rapidly from a simple monitor into a full-scale management suite:

- **Incident Management System**: I've implemented a manual incident reporting system. This allows me to create detailed incident logs, link them to specific services, and mark them as "resolved" once the fire is out.
- **Authelia OIDC Integration**: The "Identity War" was won by integrating **Authelia OIDC** for administrative access. No more manual password juggling; the admin panel is now secured behind my primary SSO identity.
- **Advanced Health Checks**: I added support for complex health checks, including:
    - Custom HTTP methods and headers.
    - **OAuth2 Token Support**: StatusFlare can now automatically acquire and cache Bearer tokens to monitor protected APIs.
    - **Smart Snippets**: It automatically parses JSON responses for better error visibility in the logs.
- **Dynamic Status Badges**: Added a `/badge/[service].svg` route that generates real-time SVG status indicators for embedding in READMEs or other dashboards.
- **Detailed Service Pages**: Every service now has a dedicated history page showing the last 50 checks, latency trends, and active incidents.

## Deployment: The Forgejo Pipeline

Deployment is fully automated through a **Forgejo Actions** CI/CD pipeline. 

1.  **Trigger**: Every push to the `main` branch on [git.helltop.net](https://git.helltop.net) triggers the runner.
2.  **Validation**: The runner performs a full TypeScript type-check and linting pass.
3.  **Wrangler Deploy**: Using the `cloudflare/wrangler-action`, the worker is automatically pushed to Cloudflare.
4.  **Database Migrations**: D1 schema updates are handled via Wrangler's migration system, ensuring the database stays in sync with the code.

The result? A single `git push` takes a feature from my local machine to the edge in under 60 seconds.

## Conclusion

Self-hosting isn't just about running apps; it's about understanding every layer of your stack. From the filesystem mount options to the OIDC handshake protocols, total control requires total comprehension. StatusFlare is the eyes of my network—and it's never been sharper.

Check it out live: [status.helltop.net](https://status.helltop.net)
