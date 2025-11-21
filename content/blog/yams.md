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
![Screenshot of C code, to demonstrate coding](/uploads/c.png)

YAMS is a small Docker media stack that did one thing wrong for my setup: it assumed where config belongs. That assumption breaks portability, so I forked it and added a simple option to set config paths.

For music tagging and library organization I now use [beets](https://beets.io); this fork only addresses configuration-path portability, not metadata management.

This is the kind of pragmatic fork that open source exists for: not a vendetta, not a rewrite, just a fix so software works on different storage layouts and NAS setups.

Principles behind the fork:

- Minimal change: add the option, document it, keep compatibility.
- Respect upstream: open a clean PR and keep the fork available if the change isn't accepted.
- Make it deployable: Docker compose examples included for common NAS layouts.

If you're running a Docker-based media stack on odd mount points or a NAS that doesn't follow upstream assumptions, try the fork on GitLab. If upstream accepts it, even better — otherwise use the small variant and move on.

---
*Remember: if buying isn't owning, piracy isn't stealing*