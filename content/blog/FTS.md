---
title: "Building This Site: NuxtHub, Cloudflare, and Owning Your Platform"
description: "How I built a fast, self-controlled website using NuxtHub and Cloudflare without surrendering to traditional hosting bullshit"
date: "2025-11-20"
author: "Lucy Ada Randall"
category: "Web Development"
slug: "FTS"
layout: "blog"
draft: false
---

You're reading this on a site I built with NuxtHub, deployed on Cloudflare's edge network, running on a domain I own. No WordPress bloat. No shared hosting garbage. No CMS that treats you like you're too stupid to write HTML.

Here's how to build your own.

## Why NuxtHub?

Traditional website hosting is a scam. You pay monthly rent for shared hosting that gets slow when traffic spikes, or you overpay for VPS resources you don't need, or you surrender control to platforms like Medium or Substack that own your content and can deplatform you on a whim.

NuxtHub is different. It's a deployment platform built on top of Nuxt 3 (Vue framework) that deploys to Cloudflare Workers, Pages, and edge storage. This means:

- **Global edge deployment**: Your site serves from data centers close to users, not from one overloaded shared server
- **Serverless architecture**: No servers to maintain, no patches to apply, no midnight pages when something crashes
- **Generous free tier**: Cloudflare's free tier is absurdly generous for personal sites
- **Full control**: You own the code, you own the deployment, you control everything
- **Modern stack**: Vue 3, TypeScript, file-based routing, server-side rendering

Is it perfect? No. You're trusting Cloudflare, which means trusting a large corporation. But compared to traditional hosting or surrendering to platforms - it's the best compromise between convenience and control.

## Prerequisites

You need:
- **A domain name**: Buy one from Namecheap, Porkbun, or Cloudflare Registrar. Expect $10-15/year.
- **Node.js installed**: Version 18 or newer. Get it from [nodejs.org](https://nodejs.org)
- **Git installed**: For version control and deployment
- **Basic command line knowledge**: You should be comfortable with terminal commands
- **A Cloudflare account**: Free tier works fine. Sign up at [cloudflare.com](https://cloudflare.com)
- **A code editor**: VS Code, Neovim, whatever you prefer

## Step 1: Set Up Your Domain on Cloudflare

First, get your domain under Cloudflare's control:

1. **Buy a domain** or transfer an existing one
2. **Add the domain to Cloudflare**:
   - Log into Cloudflare dashboard
   - Click "Add a Site"
   - Enter your domain
   - Choose the Free plan (unless you need enterprise features)
3. **Update nameservers**:
   - Cloudflare gives you two nameservers (like `ns1.cloudflare.com` and `ns2.cloudflare.com`)
   - Go to your domain registrar's control panel
   - Replace existing nameservers with Cloudflare's nameservers
   - Wait for DNS propagation (usually 1-24 hours, but often just minutes)
4. **Verify DNS is working**:
   ```bash
   dig yourdomain.com
   # or
   nslookup yourdomain.com
   ```

Once Cloudflare shows "Active" status for your domain, you're ready.

## Step 2: Install NuxtHub CLI

NuxtHub provides CLI tools for scaffolding and deployment:

```bash
# Install NuxtHub CLI globally
npm install -g nuxthub

# Or use npx (no global install needed)
npx nuxthub
```

## Step 3: Create Your Project

Scaffold a new NuxtHub project:

```bash
# Create new project
npx nuxthub init my-site

# Follow the prompts:
# - Choose a template (start with "Minimal" or "Blog")
# - Enable TypeScript (recommended)
# - Choose features you want
```

Or start from scratch with Nuxt 3 and add NuxtHub:

```bash
# Create Nuxt 3 project
npx nuxi@latest init my-site
cd my-site

# Install NuxtHub module
npm install @nuxthub/core

# Add to nuxt.config.ts
```

Your `nuxt.config.ts` should include:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  
  hub: {
    // NuxtHub configuration
    database: true,  // Enable D1 database if needed
    kv: true,        // Enable KV storage if needed
    blob: true,      // Enable R2 blob storage if needed
  },

  // Other Nuxt config...
  devtools: { enabled: true },
  
  // SEO and meta
  app: {
    head: {
      title: 'Your Site Title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your site description' }
      ]
    }
  }
})
```

## Step 4: Project Structure

Set up your content structure. For a blog site like this one:

```
my-site/
├── content/
│   ├── 1.index.md          # Home page
│   ├── 2.blog.md           # Blog listing page
│   ├── 3.about.md          # About page
│   └── blog/
│       ├── post-1.md       # Individual blog posts
│       ├── post-2.md
│       └── post-3.md
├── pages/
│   ├── index.vue           # Dynamic pages
│   ├── blog/
│   │   └── [slug].vue      # Blog post template
│   └── [...slug].vue       # Catch-all for content pages
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   └── BlogPost.vue
├── public/
│   ├── uploads/            # Static assets
│   └── favicon.ico
├── nuxt.config.ts
└── package.json
```

## Step 5: Content Management with Nuxt Content

Install Nuxt Content for markdown-based content:

```bash
npm install @nuxt/content
```

Add to `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/content'],
  
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',  // Code syntax highlighting theme
      preload: ['bash', 'javascript', 'typescript', 'vue']
    },
    markdown: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  }
})
```

## Step 6: Create Content Files

Your markdown files have frontmatter for metadata:

```markdown
---
title: "Your Post Title"
description: "Post description for SEO"
date: "2025-11-20"
author: "Your Name"
category: "Category"
slug: "post-slug"
layout: "blog"
draft: false
---

# Your Post Title

Your content here. Write in markdown.

## Subheading

More content. Code blocks work:

\`\`\`bash
npm install something
\`\`\`

Images work:

![Alt text](/uploads/image.jpg)
```

## Step 7: Create Page Templates

For blog posts, create `pages/blog/[slug].vue`:

```vue
<template>
  <div>
    <article v-if="data">
      <header>
        <h1>{{ data.title }}</h1>
        <div class="meta">
          <time>{{ formatDate(data.date) }}</time>
          <span>{{ data.author }}</span>
          <span>{{ data.category }}</span>
        </div>
      </header>
      
      <ContentRenderer :value="data" />
    </article>
    
    <div v-else>
      <p>Post not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`blog-${route.params.slug}`, () => 
  queryContent('/blog').where({ slug: route.params.slug }).findOne()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Your styles */
</style>
```

For the blog listing, create `pages/blog/index.vue`:

```vue
<template>
  <div>
    <h1>Blog</h1>
    <div class="posts">
      <article v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <div class="meta">
            <time>{{ formatDate(post.date) }}</time>
            <span>{{ post.category }}</span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog')
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
```

## Step 8: Local Development

Run your site locally to test:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site. Changes to content and components hot-reload automatically.

## Step 9: Connect to NuxtHub

Link your local project to NuxtHub for deployment:

```bash
# Login to NuxtHub
npx nuxthub login

# Link your project
npx nuxthub link

# Follow prompts:
# - Create new project or link to existing
# - Choose your Cloudflare account
# - Set project name
```

This creates a `.env` file with your NuxtHub credentials. **DO NOT commit this file to git.**

Add to `.gitignore`:
```
.env
.nuxt
dist
.output
node_modules
```

## Step 10: Deploy to Cloudflare

Deploy your site:

```bash
# Build and deploy to production
npx nuxthub deploy

# Or deploy to preview environment
npx nuxthub deploy --preview
```

NuxtHub builds your site and deploys it to Cloudflare Workers/Pages. The first deployment takes a few minutes. Subsequent deploys are faster.

You'll get a URL like `your-project.nuxt.dev` or `your-project.pages.dev`.

## Step 11: Connect Your Custom Domain

In the Cloudflare dashboard:

1. Go to **Workers & Pages**
2. Select your deployed project
3. Click **Custom Domains**
4. Click **Set up a custom domain**
5. Enter your domain: `yourdomain.com`
6. Cloudflare automatically creates DNS records
7. Add `www.yourdomain.com` as an alias if you want

Cloudflare handles SSL certificates automatically. Your site will be HTTPS within minutes.

## Step 12: Clone and Deploy (The Actual Easy Way)

Forget everything I just said about manual setup. Here's how you actually clone and deploy this site in 5 minutes:

### The Process

1. **Fork it on GitHub**
   - Go to my repo (or whoever's site you're cloning)
   - Click "Fork" in the top right
   - Now you have your own copy

2. **Clone it to your computer**
   ```bash
   git clone git@github.com:yourusername/your-forked-repo.git
   cd your-forked-repo
   ```

3. **Edit whatever you want**
   - Open in your editor: `code .` or `vim .` or whatever
   - Change content in `content/` directory
   - Modify site metadata in `nuxt.config.ts`
   - Add your own blog posts
   - Update images in `public/uploads/`

4. **Sign up for NuxtHub**
   - Go to [hub.nuxt.com](https://hub.nuxt.com/)
   - Sign in with GitHub (it'll ask for repo access)

5. **Connect your fork in NuxtHub**
   - Click "New Project"
   - Select your forked repository
   - NuxtHub automatically detects it's a Nuxt project
   - Click "Import"

6. **Configure NuxtHub with your shit**
   - **Project name**: Whatever you want
   - **Cloudflare Account**: Connect your Cloudflare account (it'll walk you through getting the API token)
   - **Custom domain**: Add your domain (make sure it's already on Cloudflare)
   - Click "Deploy"

7. **Pull changes from NuxtHub deployments**
   
   When NuxtHub makes automated commits (like config updates), pull them:
   ```bash
   git pull origin main
   ```

### That's It

Seriously. That's the entire fucking process.

- Fork
- Clone
- Edit
- Sign up for NuxtHub
- Connect your fork
- Set up Cloudflare credentials and domain
- Deploy

NuxtHub handles:
- Building your site
- Deploying to Cloudflare
- Setting up DNS
- SSL certificates
- Automatic deployments on every push

### Your Workflow After Setup

1. Edit files locally
2. Test with `npm run dev` (optional, NuxtHub will tell you if build fails)
3. Commit changes:
   ```bash
   git add .
   git commit -m "Updated blog post"
   git push origin main
   ```
4. NuxtHub sees the push, builds, deploys automatically
5. Your site is live in ~2 minutes

If NuxtHub makes any automated commits (rare, but happens for config updates), just pull them:
```bash
git pull origin main
```

### What You Need Beforehand

- **GitHub account**: Free
- **Cloudflare account**: Free tier works fine
- **Domain on Cloudflare**: Transfer your domain's nameservers to Cloudflare (they'll give you instructions)
- **NuxtHub account**: Free for personal use, just sign in with GitHub

### Domain Setup on Cloudflare

If your domain isn't on Cloudflare yet:

1. Log into Cloudflare
2. Click "Add a Site"
3. Enter your domain
4. Choose Free plan
5. Cloudflare gives you nameservers (like `ns1.cloudflare.com`)
6. Go to your domain registrar (Namecheap, Porkbun, wherever)
7. Replace their nameservers with Cloudflare's
8. Wait for DNS propagation (usually minutes, sometimes hours)
9. Cloudflare shows "Active" status when done

Now NuxtHub can automatically configure DNS and SSL for your site.

### Cloudflare API Token for NuxtHub

When NuxtHub asks for Cloudflare credentials:

1. Go to Cloudflare Dashboard → My Profile → API Tokens
2. Click "Create Token"
3. Use "Edit Cloudflare Workers" template
4. Copy the token
5. Paste it into NuxtHub when prompted

NuxtHub uses this to deploy your site to Cloudflare Workers/Pages.

### Why This Is Better Than Manual Setup

**No GitHub Actions config**: NuxtHub handles it
**No manual Cloudflare setup**: NuxtHub does it
**No wrangler commands**: NuxtHub abstracts it
**No deployment scripts**: Just push to git

You're still self-hosting (it's your Cloudflare account, your domain). NuxtHub is just a deployment interface that makes it stupid simple.

### Customizing Your Clone

After cloning, change these:

**`nuxt.config.ts`**:
```typescript
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your Site Name',
      meta: [
        { name: 'description', content: 'Your description' }
      ]
    }
  }
})
```

**`content/1.index.md`**: Your homepage
**`content/3.about.md`**: Your about page
**`content/blog/*.md`**: Your blog posts

Delete my blog posts. Write your own. Change images. Make it yours.

### If You Want to Contribute Back

Found a bug in the original? Want to improve something?

1. Make changes in your fork
2. Push to your fork
3. Go to original repo on GitHub
4. Click "Pull Request"
5. Submit PR with your improvements

That's how open source works. Fork, improve, contribute back.

### The Real Power Here

This setup gives you:
- Complete ownership (your domain, your Cloudflare account)
- Automatic deployments (push to git = live)
- Global edge distribution (Cloudflare's CDN)
- Essentially free hosting (Cloudflare free tier is generous)
- Full control over content and design

All without managing servers, configuring CI/CD, or dealing with traditional hosting bullshit.

Fork it. Clone it. Deploy it. Own it.

## Styling Your Site

Use whatever CSS approach you prefer:

### Tailwind CSS (Recommended)

```bash
npm install -D @nuxtjs/tailwindcss
```

Add to `nuxt.config.ts`:
```typescript
modules: ['@nuxtjs/tailwindcss']
```

Create `tailwind.config.js`:
```javascript
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {}
  }
}
```

### Plain CSS

Create `assets/css/main.css` and import in `nuxt.config.ts`:
```typescript
css: ['~/assets/css/main.css']
```

### CSS Modules

Just use `<style module>` in your Vue components.

## Adding Features

### RSS Feed

```bash
npm install feed
```

Create `server/routes/rss.xml.ts`:
```typescript
import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, '/blog')
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find()

  const feed = new Feed({
    title: 'Your Site',
    description: 'Your site description',
    id: 'https://yourdomain.com',
    link: 'https://yourdomain.com',
    language: 'en',
    favicon: 'https://yourdomain.com/favicon.ico',
    copyright: 'All rights reserved',
    feedLinks: {
      rss: 'https://yourdomain.com/rss.xml'
    }
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://yourdomain.com${post._path}`,
      link: `https://yourdomain.com${post._path}`,
      description: post.description,
      date: new Date(post.date)
    })
  })

  setHeader(event, 'Content-Type', 'application/xml')
  return feed.rss2()
})
```

### Sitemap

```bash
npm install @nuxtjs/sitemap
```

Add to `nuxt.config.ts`:
```typescript
modules: ['@nuxtjs/sitemap'],
sitemap: {
  hostname: 'https://yourdomain.com',
  gzip: true,
  routes: async () => {
    const { data } = await queryContent('/blog').find()
    return data.map(post => post._path)
  }
}
```

### Analytics (Privacy-Respecting)

Use Plausible or Umami instead of Google Analytics:

```bash
npm install vue-plausible
```

Add to `nuxt.config.ts`:
```typescript
modules: ['vue-plausible'],
plausible: {
  domain: 'yourdomain.com'
}
```

## Performance Optimization

### Image Optimization

Use Nuxt Image:
```bash
npm install @nuxt/image
```

```typescript
modules: ['@nuxt/image']
```

In your components:
```vue
<NuxtImg src="/uploads/image.jpg" alt="Description" />
```

### Lazy Loading

Use `<LazyComponent>` for non-critical components:
```vue
<LazyFooter />
```

### Caching

Cloudflare automatically caches static assets. Configure cache headers in `nuxt.config.ts`:

```typescript
nitro: {
  routeRules: {
    '/blog/**': { swr: 3600 },  // Stale-while-revalidate
    '/uploads/**': { headers: { 'cache-control': 'max-age=31536000' } }
  }
}
```

## Content Workflow

My workflow for new posts:

1. Create markdown file in `content/blog/`
2. Write post with frontmatter
3. Add images to `public/uploads/`
4. Test locally: `npm run dev`
5. Commit and push to git
6. Cloudflare auto-deploys
7. Verify on live site

No CMS. No database. Just markdown files in git. Simple. Controllable. Versionable.

## Cost Breakdown

- **Domain**: $10-15/year (one-time annual cost)
- **Cloudflare Workers/Pages**: FREE for most personal sites
  - 100,000 requests/day on free tier
  - Generous bandwidth allowance
  - Unlimited static sites
- **NuxtHub**: FREE for personal use
- **Total monthly cost**: ~$1 (just domain divided by 12)

Compare that to:
- WordPress hosting: $5-20/month
- Managed VPS: $10-50/month
- Substack/Medium: Free but they own your content

## Why This Stack?

**Pros:**
- Fast: Global edge deployment beats traditional hosting
- Cheap: Essentially free beyond domain cost
- Modern: Vue 3, TypeScript, modern tooling
- Flexible: Full control over design and functionality
- Scalable: Handles traffic spikes without breaking
- Developer-friendly: Hot reload, good DX, TypeScript support

**Cons:**
- Learning curve: Requires comfort with Vue/Nuxt
- Build step: Not as immediate as WordPress
- Cloudflare dependency: You're trusting their infrastructure
- Technical knowledge required: Not for non-technical users

For developers who want control without maintenance burden, it's ideal.

## Alternatives to Consider

If NuxtHub/Cloudflare doesn't work for you:

- **Astro + Netlify**: Similar approach, different framework
- **Hugo + GitHub Pages**: Simpler, static-only, free
- **11ty + Vercel**: Minimal JS, fast, flexible
- **Self-hosted Ghost**: If you want a proper CMS
- **Write.as**: If you want maximum simplicity

But if you want the balance of control, performance, and modern tooling - NuxtHub is hard to beat.

## Final Thoughts

This site serves markdown content from git, deploys globally on Cloudflare's edge, costs essentially nothing to run, and gives me complete control over every aspect.

No WordPress security updates. No plugin conflicts. No database backups. No server maintenance. No platform that can deplatform me.

Just code, content, and control.

If you value owning your platform, understanding your stack, and not paying monthly rent to platforms that treat you like a product - build your own site with NuxtHub.

---

*Questions about my setup? Want to see my actual code? Reach out via [email](mailto:lucyrandall@helltop.net) or check my repositories on [GitHub](https://github.com/anoraktrend)/[Codeberg](https://codeberg.org/anoraktrend).*
