---
title: "Maintaning AEE"
description: "Preserving simple, instruction-free editing for modern systems. Power ≠ complex."
date: "2025-10-06"
author: "Lucy Ada Randall"
category: "TUIs"
slug: "AEE"
layout: "blog"
draft: false
---

Sometimes the best software is the kind that doesn't demand your attention. It doesn't force you to memorize keyboard shortcuts, read documentation, or configure endless options before you can do anything useful. It just works.

That's the philosophy behind AEE (another easy editor), and it's why I've taken on maintaining it.

## What is AEE?

AEE is a terminal-based screen editor built with ncurses. Its defining characteristic is simplicity - it's designed to be so intuitive that it requires no instruction to use. No modes to switch between, no complex command sequences to memorize. You open it, you edit, you save. That's it.

In an ecosystem dominated by powerful but complex editors like Vim and Emacs, AEE fills a different niche. It's for quick config edits, for users new to the terminal, or for anyone who just wants to edit text without thinking about their editor.

## Why Maintain It?

We live in an era where software constantly demands updates, new features, and increasing complexity. But sometimes we need to preserve tools that do one thing well and don't try to be everything to everyone.

AEE represents a philosophy I believe in: that accessibility doesn't require dumbing down, and that powerful tools don't need steep learning curves. The terminal shouldn't be gatekept by esoteric knowledge requirements.

## The Work

My fork of AEE is based on the source from the GitLab mirror of FreeBSD's ports. The main challenge was getting this older codebase to build and run on modern systems. This involved:

**My Modifications**:
- Updating the build system to work with contemporary toolchains, by explicitly converting to cmake.
- Adjusting how the editor interfaces with ncurses libraries on modern distributions
- Removing xae and new_curse components that were no longer necessary or relevant
- Ensuring the editor works reliably across different Linux distributions, ensuring that it doesn't make use of stubbed or nonexistent libc functions.

The goal wasn't to add features or reimagine what AEE should be. It was preservation - keeping a useful, simple tool functional for anyone who needs it.

## Available Now

You can install my maintained version of AEE from the Arch User Repository as `aee-anoraktrend-git`. It's ready to use on Arch Linux and Arch-based distributions.

```bash
# Install via your favorite AUR helper
yay -S aee-anoraktrend-git
```

Once installed, just run `aee filename` or even just `aee` and start editing. No tutorial needed.

## The Bigger Picture

This work is part of my broader commitment to maintaining accessible terminal tools. Not everything needs to be a modern Rust rewrite with a million features. Sometimes we just need to keep good, simple software working.

AEE won't replace your IDE or your customized Neovim setup. But for quick edits, for new users, or for systems where you just need something that works without fuss, it's there. And it will keep being there.

Because simple software deserves to survive too.

---

*Find the code and contribute at my repositories under anoraktrend. Issues, pull requests, and feedback welcome.*