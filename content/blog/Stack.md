---
title: "My Self-Hosted Stack: Reclaiming Digital Autonomy"
description: "How I built my own cloud infrastructure and told Big Tech to fuck off"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Self-Hosting"
slug: "stack"
layout: "blog"
draft: false
---

I self-host because I'm done being a product. If you're okay paying monthly rent so a corporation can monetize your files, keep doing that — I won't.

What I run (short):

- `Nginx Proxy Manager Plus` for sane SSL, routing, and easy control.
- [`Gitea`](https://git.helltop.net) for code hosting I actually own.
- [`Nextcloud`](https://nextcloud.helltop.net) for files, calendars, and collaborative docs.
- [`Immich`](https://immich.helltop.net) for photo backups that don't feed data into ad pipelines.
- [`Jellyfin`](https://jellyfin.helltop.net) for media I actually possess — no streaming gatekeepers.
- I organize music with [beets](https://beets.io) before importing into Jellyfin; beets is far better at tagging, deduplication, and library hygiene than ad-hoc scripts.

Why this matters:

- Ownership: data under your control, not someone else's business model.
- Privacy: no profiling, no ad-driven features, no opaque policies.
- Portability: containerized services you can move or back up anytime.

The truth: self-hosting costs time, hardware, and occasional sweat. You're the one responsible for backups and uptime. But the alternative is paying rent forever and surrendering control.

Start small:

1. Repurpose an old desktop or cheap NAS.
2. Install Docker and a reverse proxy (NPMplus or Traefik).
3. Deploy Nextcloud or Jellyfin as your first service.
4. Add authentication, automate backups, and monitor uptime.
5. Use Tailscale for secure remote access without exposing ports.

---
-# *Remember: if buying isn't owning, piracy isn't stealing*