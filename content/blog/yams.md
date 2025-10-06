---
title: "YAMS"
description: "A Sweet Media Server Management utility."
date: "2025-10-06"
author: "Lucy Ada Randall"
category: "Media Server"
slug: "yams"
layout: "blog"
draft: false
---

YAMS (Yet Another Media Server) is a solid Docker-based media server setup that makes self-hosting your media collection straightforward. But sometimes, even well-designed projects make assumptions about how you want to organize your system - and those assumptions don't always match reality.

## The Problem: Inflexible Configuration Paths

My issue with YAMS was simple: I needed to define where my configuration folder lived. This isn't an unusual requirement. Different systems have different organizational schemes, different mount points, different storage layouts. Being able to specify exactly where your config lives is basic flexibility.

The original YAMS project had hardcoded assumptions about configuration locations. For my setup, this wasn't ideal. So I added a feature. While this isn't something the main developer wants in his software, it's something that I still wanted to be available for others... So now I maintain my own fork of YAMS with this feature built in. It's a separate variant that I use for my own media server setup, and it's available for anyone else who needs the same capability.

## Why This Matters

This kind of fork - the "I need this one feature" fork - is actually incredibly common in open source, even if we don't talk about it much. Not everything needs to be a dramatic split or a competing project. Sometimes you just need your config folder in a different place.

What's important is, the feature exists for those who need it, and the code is available if others have the same requirement. My YAMS fork isn't competing with YAMS. It's extending it for a specific use case. If you need configurable config paths, it's there. If you don't, use the original.

## The Takeaway

Don't be afraid to fork when you need to. Respectfully submit contributions upstream, but if they're rejected, that's not the end of the story. Maintain what you need, share it with others who might need it, and move on. Self-hosting is about control over your own infrastructure. Sometimes that means controlling your code too.

---

*My YAMS fork is available on GitLab. If you need custom configuration folder paths for your media server setup, give it a try.*