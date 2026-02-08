---
title: "Tailscale: Your Private Network Without the Domain Name Bullshit"
description: "Secure remote access to your homelab without buying domains, configuring DNS, or exposing ports to the internet"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Self-Hosting"
slug: "tailscale"
layout: "blog"
draft: false
---
Tailscale is how I stop dealing with domain names, DNS headaches, and open ports. It builds a private WireGuard mesh between your devices so your laptop talks to your home server like they're on the same LAN — without exposing anything to the internet.

Why I use it: because the alternative is paying for domains, juggling dynamic DNS, and exposing ports to a sea of bots. That's not security; that's begging for trouble.

Quick install (server):

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

On clients: install the app or package, authenticate, and use `tailscale ip -4` or `tailscale status` to see device IPs. Enable MagicDNS for friendly hostnames like `homeserver`.

Common uses:

- Access services via `http://100.x.x.x:PORT` or `http://homeserver:PORT` with MagicDNS.
- Advertise subnet routes to reach devices on your LAN (`--advertise-routes=192.168.1.0/24`).
- Declare an exit node to route outbound traffic through a trusted home connection.
- Share media: if you're serving music, organize and tag it first with [beets](https://beets.io) before exposing a Jellyfin or file share — clean metadata avoids a world of pain for clients.

Docker patterns:

- Install Tailscale on the host and bind service ports to the host's Tailscale IP.
- Or run Tailscale as a sidecar container using an auth key for an isolated identity.

Security posture:

- Use ACLs in the admin console to limit who accesses which services.
- If you don't trust the coordination servers, self-host Headscale — but then you must run and secure it yourself.

Practical bottom line: Tailscale removes DNS and port-forwarding friction and keeps your services private. It isn't magic, but it's the easiest sane way to access your homelab from anywhere.

---
-# *VPNs: Never leave home without one!*