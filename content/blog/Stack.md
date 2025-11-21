---
title: "My Self-Hosted Stack: Reclaiming Digital Autonomy"
description: "How I built my own cloud infrastructure and told Big Tech to fuck off"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Self-Hosting"
slug: "homelab-stack"
layout: "blog"
draft: false
---

People ask me why I self-host everything. The answer is simple: because I'm done being a fucking product.

Every time you upload to Google Photos, stream on Spotify, or store files in Dropbox, you're not a customer - you're livestock in someone else's data farm. They monetize your photos, analyze your listening habits, and scan your documents. All while charging you monthly rent for the privilege.

Fuck that. I built my own stack.

## The Foundation: NPM Plus

Everything routes through [Nginx Proxy Manager Plus](https://github.com/ZoeyVid/NPMplus) (NPMplus) - my reverse proxy of choice. Why NPMplus over vanilla Nginx or Traefik? Because it gives me the power of Nginx with a UI that doesn't make me want to commit crimes, plus additional features the original NPM was too conservative to include.

NPMplus handles:
- SSL certificates via Let's Encrypt (automated, obviously)
- Subdomain routing to internal services
- Access control and authentication layers
- Rate limiting to keep scrapers and bots at bay

One centralized reverse proxy means I'm not managing SSL certs and routing rules across a dozen different services. Everything flows through one control point that I actually understand and can debug when shit breaks.

## The Services: My Personal Cloud Empire

### [Gitea](https://git.helltop.net) - Code Ownership

I host my own git server because trusting GitHub means trusting Microsoft, and trusting Microsoft is for people who haven't been paying attention. Gitea gives me complete control over my repositories, my CI/CD pipelines, and my code history.

Why Gitea instead of Forgejo? Pure pragmatism - I'm running this on an Asustor NAS and I'm too lazy to build an APK for Forgejo yet. Gitea works, it's stable, and it does everything I need. It's slower than I'd like, but it's *mine*, and that matters more than shaving off a few milliseconds.

You can join my instance if you want - yes, I'm actually opening it up to others who want an alternative to corporate git hosting. Find me on Discord if you're interested.

### [Nextcloud](https://nextcloud.helltop.net) - The Google Killer

Nextcloud is my primary weapon against Google's ecosystem. It handles:
- File storage and sync (bye, Google Drive)
- Calendar and contacts (bye, Google Calendar)
- Document editing (bye, Google Docs)
- Task management (bye, Google Tasks)
- Notes (bye, Google Keep)

Basically everything Google does, except I control the data, I control the encryption, and I'm not being profiled for advertising. Nextcloud is feature-rich enough that I don't miss Google's offerings, and it integrates with everything through standard protocols like CalDAV and CardDAV.

Access is currently restricted to trusted friends because I'm not running a public service here - I'm building a trusted network of people who value digital autonomy. Want in? You know where to find me.

### [Immich](https://immich.helltop.net) - Photos Done Right

Remember when I said Nextcloud does *almost* everything? Photo management is the exception. Nextcloud's photo handling is... functional. Immich is *exceptional*.

Immich gives me:
- Automatic photo backup from mobile (via their app)
- Face recognition that runs locally, not in some corporate data center
- Smart organization without surrendering my photos to Google's AI training pipeline
- Actual performance when browsing large libraries

This is what Google Photos should be - powerful photo management that doesn't treat your memories as training data for machine learning models you'll never benefit from.

### [Jellyfin](https://jellyfin.helltop.net) - Media Liberation

Jellyfin is the beating heart of my media server. This is where decades of DVDs, Blu-rays, and CDs live after I ripped them to local storage. 

Streaming services want you to believe ownership is obsolete. That you should rent access to media libraries they can alter or revoke at any time. Licensing disputes disappear entire shows. Content gets censored or edited without notice. You're paying monthly rent for something you never actually possess.

Jellyfin is the antidote. I rip physical media I own, store it on drives I control, and stream it through software I run. No licensing disputes. No removed content. No edited episodes. Just my media library, permanent and unchanging, exactly as I want it.

I'll write a full guide on setting this up with Tailscale for secure LAN-to-WAN access because it's too good not to share. Access is currently limited to trusted friends - same deal as the others.

## Why This Matters

Self-hosting isn't just about technical control. It's about rejecting the fundamental premise of modern tech: that you should rent access to your own digital life from corporations that profit from your dependence.

Every service I host is a middle finger to surveillance capitalism. Every friend I add to my instances is one less person funding Google's data empire. Every file stored on my NAS instead of "the cloud" is a tiny act of resistance against digital feudalism.

## The Trade-offs: Let's Be Honest

Self-hosting isn't free. It costs:
- **Hardware**: NAS, drives, networking gear
- **Time**: Setup, maintenance, updates, troubleshooting
- **Power**: 24/7 uptime means electricity costs
- **Expertise**: You need to actually understand what you're running

But compare that to the real costs of cloud services:
- Permanent monthly rent with no equity
- Complete loss of privacy
- Vulnerability to service changes, price increases, and shutdowns
- Your data held hostage by corporate policy

I'll take the upfront investment in exchange for permanent ownership. Every month my self-hosted stack runs is another month I'm not paying rent to $ilicon Valley.

## Starting Your Own

You don't need to replicate my entire stack immediately. Start small:
1. Get a cheap old computer or NAS
2. Install one service - maybe Nextcloud (hell, if you do nextcloud AIO, you can get everything but immich and whatever git repo you need) or Jellyfin
3. Learn how reverse proxies work
4. Add services as you need them
5. Iterate, improve, expand

The goal isn't perfection. It's independence. Every service you self-host is one less monthly subscription, one less corporate dependency, one more piece of your digital life under your control.

## The Technical Details

My stack runs on:
- Asustor NAS (it's what I had available, not necessarily what I'd recommend)
- Docker containers for service isolation
- NPMplus handling all reverse proxy duties
- Let's Encrypt for SSL automation
- Local storage with regular backups

Is it perfect? No. Is it faster than Google's data centers? Hell no. But it's MINE. I control it. I understand it. I can fix it. And nobody is monetizing my data without my consent.

## Join the Resistance

If you're tired of being a product, tired of monthly rent for basic services, tired of surrendering your data to corporations that profit from your dependence - start self-hosting. The learning curve is real, but the freedom is worth it.

And if you want to join my instances instead of building your own, reach out. I'm building a network of people who value autonomy over convenience, ownership over rent-seeking, and privacy over free services with hidden costs.

---

*My stack lives at helltop.net. The name says it all - I'd rather run my own hell than live in someone else's heaven. Contact me via [email](mailto:lucyrandall@helltop.net) or Discord if you're interested in joining or want to share your own self-hosting setup.*
