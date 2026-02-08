# Helltop

**Fuck the corporate cloud. Build your own.**

A personal website and digital rebellion headquarters for a self-hosting
enthusiast and digital freedom advocate. Built with Nuxt Content,
TailwindCSS, and a whole lot of defiance against surveillance capitalism.

## About

This is the source code for [helltop.net](https://helltop.net), a website
dedicated to:

- **Self-hosting everything** - Email, repos, files, media - if you're paying
  rent for storage that sits on someone else's hardware, you're a serf in
  digital feudalism
- **Open source exclusively** - Proprietary software is a cage; the source
  code is the key
- **Burning down surveillance capitalism** - Every "free" service is a
  panopticon
- **Weaponizing self-reliance** - Learn to run your own infrastructure or
  accept that you'll always be at the mercy of some corporation's quarterly
  earnings call

## Features

- 📝 Content managed via Markdown files in `content/` directory
- 🎨 Beautiful typography with Nuxt Typography
- 🌙 Light & Dark mode support
- 📱 Fully responsive design
- 🚀 Fast and optimized
- 🎯 Generated navigation based on pages
- 🔍 SEO optimized with meta tag generation
- 💻 Code highlighting with Shiki
- 📦 Deployable on any Node or Static hosting

## Project Structure

```structue
Helltop/
├── app/              # Nuxt app configuration and components
├── content/          # Markdown content files
│   ├── blog/        # Blog posts
│   ├── 1.index.md   # Home page
│   ├── 2.blog.md    # Blog index
│   └── 3.about.md   # About page
├── public/          # Static assets
└── server/          # Server-side logic
```

## Development

### Prerequisites

- Node.js (latest LTS version)
- npm or pnpm
- Cloudflare account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/anoraktrend/Helltop.git
cd Helltop

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (Cloudflare Workers)
npm run build

# Deploy to Cloudflare Workers
npx wrangler deploy
```

### Deployment Options

#### Cloudflare Workers (Recommended)

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Build and deploy:
   ```bash
   npm run build
   npx wrangler deploy
   ```

#### GitHub Actions (Automatic)

The project includes a GitHub Actions workflow that automatically deploys to Cloudflare Workers on every push. You'll need to set up the following secrets in your GitHub repository:

- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with Workers permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

## Content Management

### Adding Pages

1. Create a new Markdown file in the `content/` directory
2. Add frontmatter configuration:

```markdown
---
navigation:
  title: "Page Title"
---

# Your Content Here
```

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Add frontmatter configuration:

```markdown
---
title: "Blog Post Title"
description: "Short description of the post"
date: "YYYY-MM-DD"
---

# Blog Post Content
```

## Technology Stack

- **Framework**: Nuxt 4
- **Content Management**: Nuxt Content
- **Styling**: TailwindCSS
- **Typography**: Nuxt Typography
- **Icons**: Iconify
- **Code Highlighting**: Shiki
- **Deployment**: Cloudflare Workers

## License

[MIT License](./LICENSE)

## Join the Resistance

All my work lives on Codeberg and GitHub:

- [Codeberg](https://codeberg.org/anoraktrend) (priority)
- [GitHub](https://github.com/anoraktrend) (mirror)

If you're exploring GNU-less systems, building your first homelab, or just
sick of corporations treating your computer like their property, reach out.

> "The cloud is just someone else's computer. Stop paying rent. Build your own."

---

**Last updated**: February 2026  
[status of services](https://status.helltop.net/)
