---
title: "Maintaning AEE: Another Easy Editor"
description: "Preserving simple, instruction-free editing for modern systems. Power ≠ complex."
date: "2025-10-06"
author: "Lucy Ada Randall"
category: "TUIs"
slug: "AEE"
layout: "blog"
draft: false
---

# Maintaning AEE: Another Easy Editor
![Screenshot of AEE text editor interface](/uploads/aee.png)

Fuck the idea that every useful tool must be a sprawling project with a million options and a two-day onboarding. AEE exists because the Unix world forgot how to make things obvious.

I maintain a small fork because simplicity deserves an active steward. The original AEE did one thing extremely well: let you edit text without initiation rites. Modern toolchains and distributions broke enough build assumptions that the project stopped being reliably usable — so I fixed what needed fixing and kept the rest.

What I kept sacred:
- The editor's behaviour: no modes, no key-chords, nothing that requires a manual.
- The UI: obvious commands, visible operations, zero gatekeeping.

What I changed (carefully):
- Modernized the build to compile on current toolchains (CMake + sane flags).
- Fixed ncurses portability and removed dead bits that only caused harm.
- Ensured the editor runs predictably across modern Linux distros.

This is preservation, not feature creep. If you want a tiny, obvious editor for quick fixes — rescue edits, config changes, emergency corrections — AEE is a refusal: a tiny resistant tool that does its single job without asking for your life story.

Install (AUR):
```bash
yay -S aee-anoraktrend-git
```

Run:
```bash
aee filename
```

Source, issues, and PRs are under `anoraktrend` on my git hosts. If you want to help keep small, useful software alive, fork it, fix it, and push it back.

---
-# *A Project Shouldn't Die if its creator gives up on it.*