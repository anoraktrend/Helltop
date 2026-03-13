# Reclaim Your Digital Identity

This repository is a blueprint for a self-hosted, sovereign digital presence. Built with Nuxt 4, Nuxt Content v3, and deployed on Cloudflare Workers (or your own Forgejo runner), it's designed to be fast, minimal, and entirely under your control.

## 🛠 Quick Start (The Rebellion Kit)

### 1. Clone the Blueprint
Fork this repository and clone it to your local environment.

```bash
git clone https://github.com/YOUR_USERNAME/Helltop.git
cd Helltop
pnpm install
```

### 2. Customize the Forge (`app.config.ts`)
Personalize your site's metadata and social links in `app.config.ts`. This is where you define your "Digital Rebellion" brand.

```typescript
export default defineAppConfig({
  siteName: 'yourname.net',
  siteUrl: 'https://yourname.net/',
  socials: {
    github: 'yourname',
    mastodon: '@yourname@instance.tld',
    // ...
  },
})
```

### 3. Write Your Manifesto (`content/`)
The content is stored in the `content/` directory. 
- **Homepage:** Edit `content/1.index.json` to update your hero section, manifesto text, and the "Arsenal" (your self-hosted services).
- **About:** Edit `content/3.about.md`.
- **Blog:** Add your markdown files to `content/blog/`.

### 4. Configure Your Perimeter (`.env`)
The site uses **Nuxt Studio** for Git-based visual editing.
1. Create an account at [nuxt.studio](https://nuxt.studio).
2. Link your repository.
3. Copy your `NUXT_STUDIO_TOKEN` to your `.env` file.

```bash
cp .env.example .env
```

### 5. Deploy to the Frontlines
This site is pre-configured for Cloudflare Workers. 

1. Update `wrangler.jsonc` with your own `database_id` and `name`.
2. Deploy manually:
   ```bash
   pnpm run build
   npx wrangler deploy
   ```
3. Or use the Forgejo Actions in `.forgejo/workflows/ci.yml` for automated deployment. 
   > **Note:** Ensure you update the secrets in your Forgejo repository settings (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## 🏴 Forgejo Integration
If you're running your own Forgejo instance, make sure your runner has the following labels enabled:
- `ubuntu-latest` (pointing to a complete image like `ghcr.io/catthehacker/ubuntu:act-latest`)
- `node-20`

## ⚖️ License
MIT. Build it, break it, host it. 
