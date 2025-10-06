---
title: "EE"
description: "The Easy Editor That Actually Lives Up to Its Name"
date: "2025-10-06"
author: "Lucy Ada Randall"
category: "TUIs"
slug: "ee"
layout: "blog"
draft: false
---

There's a particular kind of cruelty in the Unix world: telling someone to "just use vi" or "learn emacs" when they need to edit a configuration file. These are powerful tools, no doubt, but they're about as "easy" as performing surgery with instructions written in a foreign language.

Enter EE, the Easy Editor from FreeBSD. It's an editor that actually deserves its name.

## The Philosophy of Obviousness

EE was created by Hugh Mahon in the mid-1980s with a radical idea: what if a text editor didn't require a manual? What if every function you needed was right there on the screen, labeled and ready to use?

Look at the top of EE when you open it. You see every command you need:
- Navigation with arrow keys (they work exactly as you'd expect)
- Search functions clearly labeled
- Delete and undelete operations
- File operations
- An escape menu for additional functions

No modes. No memorizing command sequences. No "how do I exit this thing?" panic. You can sit someone down in front of EE who has never used a terminal editor before, and they'll figure it out in seconds.

## Built Into FreeBSD

EE comes installed in the FreeBSD base system and it's the easiest editor to use for beginners. This is significant. FreeBSD made a deliberate choice to include an editor that prioritizes accessibility over tradition. When you install FreeBSD, you have a fully functional, instruction-free text editor waiting for you.

No separate package to install. No configuration needed. No hunting through documentation. It's just there, ready to work.

This is what thoughtful system design looks like - recognizing that not everyone editing system files wants to invest hours learning modal editing or mastering key chords.

## Living On in Chimera Linux

The story doesn't end with FreeBSD. Chimera Linux has included EE as part of chimerautils, their core userland based on FreeBSD. Chimera aims to create a system that is simple, transparent, and easy to pick up, without having to give up practicality and a rich feature set.

Including EE is a perfect fit for this philosophy. Chimera recognizes that simplicity and power aren't opposites - that you can give users accessible tools without dumbing anything down.

## Why This Matters

We live in an era where terminal text editors are often treated as gatekeeping mechanisms. "Real" Unix users are supposed to know vi. "Serious" developers use emacs or vim with extensive configurations. Anything simpler is somehow lesser.

This is nonsense.

EE proves that you can have a powerful, efficient terminal editor that doesn't require initiation into arcane knowledge. You can edit files quickly, navigate codebases, and modify configurations without memorizing command tables or keeping a cheat sheet handy.

The menu bar at the top isn't "training wheels" - it's good interface design. Discoverability is a feature, not a flaw. Making tools accessible doesn't make them weak; it makes them usable.

## The Practical Benefits

Beyond philosophy, EE is simply practical.  No learning curve means no time wasted. EE works anywhere with a terminal and terminfo database. Decades of use in FreeBSD have proven its stability, and for editing configs, scripts, and documentation, it has everything you need. You don't need to learn anything but the muscle memory to reach for `ee`, the interface itself is the documentation.

For system administration, for quick edits, for teaching newcomers, for accessibility - EE excels where more "powerful" editors create barriers.

## A Living Example

My work on AEE (another easy editor) builds directly on the principles that EE established. The idea that editors should be immediately usable, that power doesn't require complexity, that good design makes instruction manuals obsolete - these aren't just nice ideas. They're proven by decades of EE serving FreeBSD users well.

Seeing EE continue in Chimera Linux shows that this philosophy still resonates. In a world pushing ever more complex tools, there's still room - still need - for software that just works without demanding your time first.

## Try It

If you're on FreeBSD, EE is already installed. Just type `ee filename` and experience what an actually easy editor feels like.

If you're on Chimera Linux, it's part of your core utilities.

And if you're on neither, perhaps that's reason enough to give one of them a try. Because systems that include tools like EE are systems designed for humans, not for gatekeeping.

---

*The terminal doesn't have to be hostile. Text editing doesn't need to be a rite of passage. Sometimes, the best tool is the one that gets out of your way and lets you work. EE understood this in 1986. It's still true today.*