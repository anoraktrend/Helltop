+++
title = "re:Basix - an updated basix review."
description = "How a minimal musl distro and its no-frills package manager scratch an itch for minimalism, with the modern bpm and basix-packages repo in view."
date = 2026-10-28
lastmod = 2026-10-28
author = 'Lucy Ada Randall'
tags = ["Linux", "Distributions", "Open Source", "Package Managers", "Basix"]
slug = "rebasix"
aliases = ["/blog/rebasix/"]
draft = false

[fediverse]
instance = "https://app.wafrn.net"
username = "lucyinchat"
id = "01a18094-6ab3-751a-babb-f6a3a379c7fd"
platform = "wafrn"
+++

# DISCLAIMER: the documentation on this page may be OUT OF DATE please read the official documentation at https://basixlinux.org/wiki/

## Introduction

Every so often I find myself down a rabbit hole rebuilding parts of my stack from scratch. This time it led me to Basix — a tiny, from-scratch Linux distribution built around a hand-rolled package manager called bpm.

The core model has not really changed: Basix is still the anti-distro in spirit. It is small, opinionated, and built around the idea that the user should be able to understand the system instead of treating it like a black box. At roughly 124 packages and counting, it is still the sort of distro that says “no systemd baggage, no glibc, no autotools hell.” Just musl, BusyBox, and a dead-simple build system that makes you a key developer of your own distro.

The modern upstream source makes that design clearer. `bpm` is the package manager in `kkrruumm/bpm`, and `kkrruumm/basix-packages` is the upstream package repo. The package repository is still very much in the spirit of the original project: shell-heavy templates, a small number of build styles, and intentionally little ceremony.

## What Is Basix?

Basix is a source-based Linux distribution created by kkrruumm. It targets musl libc, ships no autotools chain, and treats each package as a flat directory with a single `template` file plus optional `files/` and `patches/` folders. In the current repo structure, that model still holds: the package definition remains a shell-sourced template, not a giant generated database or an abstraction layer.

The upstream package repo is permissively licensed and still aims to be extremely transparent. The package repository is mostly shell, with some C and diff-heavy packages, which is exactly the kind of thing a minimal distro built around shell-driven package logic would look like:

- Shell: 58.7%
- C: 26.1%
- Diff: 15.1%
- Other: 0.1%

This matters, because the repo’s composition reflects the project’s philosophy: the system is not trying to hide the work behind a shiny package manager; it is making the package logic directly visible.

Basix does not try to hide the complexity. It makes you read the scripts. That is not a flaw — it is the point.

## What Is bpm?

The current bpm repo is a shell-first package manager and build system. The entrypoint is a single `bpm` script with library code under `lib/`, including:

- `common.sh`
- `pkg.sh`
- `build.sh`
- `sandbox.sh`
- `account.sh`

The repo also contains:

- `etc/bpm.conf`
- `etc/repos.conf`
- `etc/package.use`
- `lib/style/`

The README in the upstream repo is intentionally sparse. The project says, in effect, “there are no docs outside the code itself and help output.” That fits the original spirit perfectly: the package manager is meant to be deciphered through code and CLI output, not relied on as a polished black box, but the docs site does have a lot more info than it used to.

The current help output still presents a very simple and deliberate interface:

```
(0) sagittarius ~ > bpm help
bpm 0.8.3 - basix package manager

usage: bpm <command> [argument ...]

  [b]uild    pkg...   build packages and any missing dependencies
  [i]nstall  pkg...   build if needed, then install into $BPM_ROOT
  [r]emove   pkg...   remove installed packages, -a also removes the orphans
                      that leaves behind, -f skips the reverse dependency check
  autoremove          remove every orphaned package, -n lists them instead,
                      -y skips the prompt
  [u]pdate            pull repositories, rebuild and install what changed
  pin        [pkg...] pin packages at their installed version, no args
                      lists what is pinned
  unpin      pkg...   release the pin
  [p]ull              clone or pull repositories only
  [s]earch   pattern  search repositories (globs allowed)
  [q]uery    pkg      show template metadata and resolved use flags
  [a]lternatives      list alternatives, or bpm a <pkg> <path> to swap
  verify     [pkg...] list files that no longer match what was packaged,
                      -c includes config files, --overwrite <pkg> <path>
                      restores the specified file from the archive
  [l]ist     [-r] [pkg]
                      list installed packages, -r appends the reason each package
                      was installed
  [f]iles    pkg      list files owned by an installed package
  [o]wns     path     show which package owns a path
  [c]hecksum [-w] pkg print blake3 sums of the dist_files (-w rewrites template)
  [d]ownload pkg...   fetch dist_files only
  clean [all]         remove build trees and staged destdirs, "all" also
                      removes the build root base
  [h]elp, [v]ersion

config: /etc/bpm/bpm.conf
repos:  /home/kris/basixpersonal /home/kris/basixstaging /var/db/bpm/repos/core
build:  /var/cache/bpm/buildroot
(0) sagittarius ~ >
```

This is a real package manager, but one designed to stay close to the metal.

## Some important things Krum and I decided

BPM is like a kiss variant of Gentoo’s Portage: it uses USE flags like Gentoo does, but it tries to keep the model simpler and more global. The older article described the project as using use flags mostly globally instead of sprawling local use flags everywhere. That remains the right mental model.

The current config still reflects that design:

```conf
# "flag" enables a feature, "-flag" disables it
# use flags set here will apply to all packages on the system, and
# per package overrides live in package.use
# resolution order, last wins:
#
#    use_flags (template) -> BPM_USE -> package.use
```

And there is still a strong emphasis on package correctness and security:

- BLAKE3 checksums are used for package sources
- repository priority is explicit
- overlay repos can shadow upstream packages
- package rebuilds happen when USE flags change
- build events happen in isolated environments

That is the philosophical core of the project: explicitness over abstraction, control over convenience.

## A Template Example

A Basix package is still just shell-sourced variables. The current repo is full of examples like this:

```sh
pkg_name=b3sum
version=1.3.1
revision=1
build_style=gnu-makefile
dist_files="https://git.sr.ht/~mcf/b3sum/archive/v1.3.1.tar.gz"
checksum="3a78d3bbb0e553359035da0c5ce9a2eaadcc658d..."
use_flags="static"
use_default="+static"

pre_build() {
    use static && LDFLAGS="$LDFLAGS -static"
    export LDFLAGS
}
```

This is the real unit of Basix: one template, one package, one build story. No subpackages, no dependency graph you cannot reason about, no “mystery metadata” generated in a hidden folder. Just a shell script that tells the manager what to fetch, how to build it, and what it depends on.

It is still exactly the kind of thing that someone who likes understanding their Linux system would appreciate.

## Build Styles & Use Flags

The build system supports a number of build styles, including:

- `gnu-configure`
- `gnu-makefile`
- `meson`
- `cmake`
- `cargo`
- `go`
- `python3-module`
- `custom`
- `meta`

The style implementations are in `lib/style/`, and templates can override phases such as `do_build` and `do_install` for fine-grained control. That keeps the package model flexible without dragging in a “full build framework” that becomes impossible to reason about.

And the Use Flag model is still one of the most important parts of the ecosystem. Template defaults are resolved, then global `BPM_USE` is applied, then package-specific `package.use` overrides take precedence. This is not “magic”; it is a very explicit resolution order.

The result is simple and deliberate: change a flag, the package is invalidated, and a rebuild is triggered automatically. That is the kind of behavior that makes a source-based distro feel honest.

## Sandboxed, Safe Builds

The current bpm config still emphasizes build safety:

```conf
: "${BPM_SANDBOX:=1}"
: "${BPM_BUILDROOT:=/var/cache/bpm/buildroot}"
: "${BPM_BASEPKGS:=baselayout musl busybox make binutils gcc linux-headers fortify-headers pigz xz bzip2 certs pkgconf b3sum zstd}"
: "${BPM_BROOT_OVERLAY:=1}"
: "${BPM_STRIP:=1}"
```

The build scripts make the intent clear:

- builds run inside private mount, pid, IPC, and UTS namespaces
- build roots isolate packages from the host system
- undeclared `make_depends` fail hard when using a build root
- the environment is scrubbed and controlled deliberately
- source archives are fetched and verified before the build begins

This is still a distro designed around reproducibility and strong build isolation. It is not trying to be an end-user package manager in the broadest sense; it is a build system for a controlled distro.

## The Package Repository

The modern repo is `kkrruumm/basix-packages`, and the repository description is:

> the basix linux package repository

The repo is still very much organized around package templates and shell logic. The comments in `etc/repos.conf` are particularly important:

```conf
# /etc/bpm/repos.conf - package repositories, highest priority first
#    <name> <git url or absolute path> [branch]

# the first repository providing a template wins, so a local overlay listed
# above core lets you shadow any package

core https://github.com/kkrruumm/basix-packages.git main
```

That means:

- repository priority matters
- local overlays can shadow or extend upstream packages
- you can maintain your own patch set without forking the whole project
- the upstream design is deliberately compatible with local customization

That is exactly in keeping with the original Basix ethos: build your own distro, not just install one.

## Relationship at a Glance

```text
            kkrruumm/bpm (the engine, MIT)
                interprets "template"s
                          │
           ┌──────────────┴─────────────────┐
           │ local overlays & user overlays │
           │   basix-packages (core repo)   │
           └──────────────┬─────────────────┘
   /etc/bpm/repos.conf priority -> "bpm build/install"
```

basix is the distro. bpm is the manager. basix-packages is the repo. Local overlays are the part where the project becomes personal.

The design still makes sense because it is intentionally not trying to be every distro for everyone. It is a system for people who want control, minimalism, and the ability to debug the build chain directly.

## Why Basix?

Because it is about having exactly what you need, and nothing you do not. Not just less for the sake of it.

For a control freak who wants to know why every package builds the way it does, who needs musl over glibc, and who is not afraid to read shell scripts instead of documentation, Basix scratches an itch nothing else does.

That remains true today. The added clarity from the current upstream repos simply makes the design easier to understand and easier to trust: it is a weighted system of small, explicit package definitions and a very direct package manager.

## Final Note

The project still has that “build it yourself” aesthetic, and that is no accident. Basix is not trying to be polished or conventional. It is trying to be clear, controlled, and intentional.

That is why the original framing still holds:

- it is minimal
- it is shell-driven
- it is transparent
- it is built for direct control
- it expects users to engage with the code

The newer repo state simply confirms the original design was not a rough idea — it was the whole point.
