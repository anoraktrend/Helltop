+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
description = ''
date = {{ now.Format "2006-01-02" }}
author = 'Lucy Ada Randall'
tags = []
# tags = ['Self-Hosting', 'Linux']
slug = '{{ .File.ContentBaseName }}'
aliases = ['/blog/{{ .File.ContentBaseName }}/']
draft = true

# Optional overrides:
# callout = false
# readingTime = false
# Toc = true
# cover = 'cover.jpg'
# coverAlt = ''
# coverCaption = ''
# excludeFromRSS = true
+++

## Introduction

Start with the lede — what this post is about and why it matters.

<!--more-->

## Section

Write the main content here.

## Takeaways

Summarize what you learned or what the reader should take away.
