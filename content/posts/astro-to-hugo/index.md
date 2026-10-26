+++
title = "Leaving behind Slop: Moving from Astro to Hugo"
description = "How I escaped an LLM coded site and embraced the digital rebellion."
date = 2026-10-26
author = 'Lucy Ada Randall'
tags = ["Architecture", "Astro", "Web Development"]
slug = "transition-to-astro"
aliases = ["/blog/transition-to-astro/"]
draft = false
+++

## The Great Framework Migration, and a change in personal opinions

Helltop was originally an experiment on Nuxt, then it transitioned to Astro 6. Both of the engines of these eras were built by llm slop. This was a mistake. I am not nearly as good with javascript as I imagined.

## Why Hugo?

Astro's zero-JS by default philosophy made it so damn tempting to use, but if you wanted anything more advanced than a simple "Words on a Page" browser you needed js. That was not maintainable. Hugo's community made some damn cute themes, like [this one](https://github.com/mtwb47/re-terminal) by Matt Weber of The Linux Cast fame.

## Database Evolution: Astro Content vs Nuxt Content vs a simple hugo site

I traded the magic of `@nuxt/content` for the magic of Astro Content Collections. Both of which suck for my brain to try and work with. Simple Markdown and html partials combined makes it so much easier. My brain can process that so much easier, and changes are super easy.

## Upgraded communications array

Our old comments section was powered by a direct D1 binding, giving us a robust, self-hosted feedback loop without the overhead of heavy abstractions… and required me to be a savant with SQL. Fedicomment from matt's theme is so much easier… all i have to do is set it up right.

## Styling the Rebellion

The beautiful animated backgrounds were, putting it simply, too much. At the same time I had no idea how they worked under the hood, so you see the issue. With this simple, pre-made theme, I can at least look at someone else who might know what's going on. Beyond that, it's easy enough to work with.

## What's Next?

I'm planning to do some rewrites and touch ups of my previous blog posts, and obviously write some new ones as I can.
