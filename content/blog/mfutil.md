---
title: "Music Folder Utils"
description: "Music Library Management at its finest."
date: "2025-10-06"
author: "Lucy Ada Randall"
category: "Library Management Tools"
slug: "mfutil"
layout: "blog"
draft: false
---

I had 1TB of music scattered across folders with names like "New Folder (7)" and "djsklfj". Half the files had metadata from 2003 that was just wrong. Album art was either missing or embedded in formats my file manager couldn't show. Every time I opened Dolphin to browse my music, I was disappointed. So I started writing MFUtil.

## Why I think this is needed

Music libraries get messy fast. You download an album, it goes into Downloads. You rip some CDs, they end up wherever the ripper decided. Someone sends you files, they're in a zip with a weird folder structure. Years pass. You've moved between computers. Nothing is where it should be.

And the metadata? It's a disaster. Tags that say "Unknown Artist" or "Track 01" or nothing at all. Release dates from the wrong century. Album names with [FLAC] appended for no reason. Half your collection thinks it was released in 1970.

File managers can show folder icons, but only if the image file is named exactly right and in exactly the right place. Embedded album art doesn't help. Your beautiful music collection looks like a grid of generic folder icons.

## What MFUtils Actually Does

MFUtils organizes everything into `Artists/Artist/Album`. It queries MusicBrainz to fix the metadata. It extracts album art and sets it as folder icons in both GNOME and KDE. It creates `Albums/` and `Tracks/` directories full of symlinks so you can browse your entire collection flat or by album without duplicating files.

When you import new music, it validates the metadata first. Files without proper artist and album tags get rejected. This keeps garbage out of your organized library.

The reorganize function scans your entire music directory looking for scattered files and moves them where they belong based on their tags. After fixing the metadata with MusicBrainz, of course.

It runs fast because it's written in Rust and processes files in parallel. Large collections don't take forever.

## Why I Rewrote It in Rust

The first version was in a shell script. It worked, but maintaining it was annoying and adding features meant slowing down the whole process and worrying about edge cases that would unintentionally leave you a music folder in your root directory.

Rust fixed that. The compiler catches the problems. The error handling is explicit. The ecosystem has good libraries for audio metadata, image processing, filesystem operations. Adding new features doesn't feel like walking through a minefield.

Build times matter when you're iterating on code, so the project uses `just` with optimized settings. With `sccache` and `lld` installed, rebuilds are absurdly fast compared to standard cargo commands.

## Desktop Integration That Actually Works

Linux desktop environments need specific things to display folder icons correctly. GNOME uses one mechanism, KDE uses another. MFUtils handles both.

When it extracts album art, it writes the files where they need to be and sets the metadata attributes so Nautilus and Dolphin both show the artwork automatically. No manual icon setting. No broken thumbnails. It just works when you open your file manager.

This integration is why MFUtils exists as a desktop tool and not just a command-line metadata fixer. Your music library is something you browse visually. The tooling should respect that.

## The Workflow Makes Sense

Running `mfutil all ~/Music` does everything in order: sync metadata from MusicBrainz, reorganize scattered files, import new music from external directories, organize complex nested structures, create album and track symlinks.

Each step depends on the previous one. You sync metadata first so you're not organizing files based on wrong information. You reorganize before importing to avoid conflicts. You organize the structure before creating symlinks so the symlinks point to correctly organized files.

You can run steps individually if you want control. You can skip steps if you're iterating on one specific thing. But the default workflow handles the common case: "my music library is a mess, fix it."

Hell, it can even rip CDs, though I recommend adding new cds to Music Brainz via [Picard](https://picard.musicbrainz.org/)

## Quality Control Built In

Import validation prevents junk from entering your library. Files without artist and album metadata get skipped. You don't end up with an "Unknown Artist" folder full of random tracks from downloads you forgot about.

The tool won't overwrite existing organized files. It's conservative. You can run it repeatedly without worrying that it'll destroy your manual curation work.

Error handling is explicit. If something fails, you get a message. If MusicBrainz doesn't have data for a release, it skips it and continues. The tool doesn't crash halfway through processing 10,000 files.

## Technical Implementation

MFUtils uses MusicBrainz for metadata because MusicBrainz is comprehensive and open. It uses FFmpeg to handle every audio format and extract embedded art. ImageMagick processes images. GLib/GIO provides the desktop integration layer.

The code is split into modules for each operation. There's a simple TUI helper that shows progress because watching thousands of files process without feedback is maddening.

Optional API integrations exist for Pexels if you want placeholder images and AudioDB if you want artist thumbnails. They're optional. The tool works fine without them.

Building requires the usual suspects on Linux: build tools, pkg-config, libavformat, libavcodec, libavutil, ImageMagick, GLib development headers. Standard stuff for multimedia applications.

## Using It

```bash
mfutil all ~/Music
```

That's the entire workflow. Or run individual commands:

```bash
mfutil sync ~/Music
mfutil import ~/Downloads/Music ~/Music
mfutil art ~/Music
mfutil albums ~/Music
```

You can also import cds

```bash
mfutil cd /dev/sr0      # or whatever your cd drive is listed as
```

Skip steps if needed:

```bash
mfutil all ~/Music --skip sync,art
```

Install with cargo or just:

```bash
cargo install --path .
# or
just install-local
```

The project lives on [GitHub](https://github.com/anoraktrend/Music-Folder-Utils) and [Codeberg](https://codeberg.org/anoraktrend/mfutil). GPL v3.0 licensed. Fork it if you want.

## Why This Exists

I got tired of manually organizing music. I got tired of setting folder icons one by one. I got tired of trusting whatever metadata came with files from random sources on the internet.

Automation should handle the tedious parts. Desktop integration should make things actually pleasant to use. Data validation should prevent garbage from accumulating in your carefully maintained collection.

MFUtils does what I need it to do. Maybe it does what you need too.

---

*mfutil is licensed as GPLv3, this was done as an arbitrary decision.*