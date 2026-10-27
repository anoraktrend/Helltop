# FediComment Integration

The re-terminal theme now includes **FediComment**, a self-hosted commenting system that uses Mastodon-compatible APIs and Wafrn for comments.

## How It Works

1. Write a blog post
2. Post about it on Mastodon or Wafrn
3. Add the post ID to your article's frontmatter
4. Replies to your post appear as comments on your blog!

## Features

- ✅ Works with Mastodon-compatible platforms and Wafrn
- ✅ Automatically themed to match all re-terminal color schemes
- ✅ Nested comment threads
- ✅ Custom emoji support
- ✅ Avatar and metadata display
- ✅ Server-rendered comments and counts at the edge (no loading click)
- ✅ Client-side loading as a fallback when the Worker is not in front
- ✅ Privacy-friendly (no tracking, no third parties)
- ✅ No database required
- ✅ Direct API access (no proxy needed)

## Usage

### Step 1: Post About Your Article

After publishing your blog post, create a post about it on Mastodon or Wafrn:

```
Just published a new article about Hugo themes!

https://yourblog.com/posts/my-article/

#Hugo #WebDev
```

### Step 2: Get the Status ID

Find the status ID from your post URL:

**Mastodon example:** `https://fosstodon.org/@thelinuxcast/123456789` → Status ID: `123456789`

The status ID is the number at the end of your Mastodon post URL.

**Wafrn example:** `https://app.wafrn.net/fediverse/post/01a17efb-748b-76b9-b0da-160b74016d7f` → Post ID: `01a17efb-748b-76b9-b0da-160b74016d7f`

The post ID is the UUID at the end of your Wafrn post URL.

### Step 3: Add to Frontmatter

Add the Fediverse information to your post's frontmatter:

**YAML:**
```yaml
---
title: "My Blog Post"
date: 2025-01-12
fediverse:
  instance: "https://fosstodon.org"
  username: "yourname"
  id: "123456789"
  platform: "mastodon"
---
```

**TOML:**
```toml
+++
title = "My Blog Post"
date = 2025-01-12

[fediverse]
instance = "https://fosstodon.org"
username = "yourname"
id = "123456789"
platform = "mastodon"
+++
```

For Wafrn, use the instance URL, your Wafrn username, the post UUID from the post URL, and
`platform = "wafrn"`:

```toml
[fediverse]
instance = "https://app.wafrn.net"
username = "lucyinchat"
id = "01a17efb-748b-76b9-b0da-160b74016d7f"
platform = "wafrn"
```

Wafrn rewoots are filtered out and do not appear as comments.

### Step 4: Build and Deploy

That's it! On the deployed Cloudflare Worker, the thread and comment count are rendered into the
page HTML. If the Worker is not in front of the request (for example, `hugo server` or a plain static
host), visitors see a "Load Comments from Fediverse" button instead.

## Edge Rendering

`worker/fedicomments.js` looks for the `#fedicomment-container` element that `comments.html` emits
and reads its `data-fedicomment-*` attributes. When it finds a configured thread it:

1. Fetches the thread from the instance (`/api/forum/:id` for Wafrn, `/api/v1/statuses/:id/context`
   for Mastodon).
2. Sanitizes every comment body with `sanitize-html`, allowing only basic formatting, links, and
   images with `http`/`https` URLs.
3. Renders the comment tree and injects it, plus the count in the post metadata, with
   `HTMLRewriter`.
4. Falls back to the static HTML (and therefore the client-side button) if the upstream instance is
   unreachable or returns an unexpected response.

Threads are cached in the Cloudflare cache for 60 seconds. Rendered pages are served with
`cache-control: public, max-age=60, stale-while-revalidate=300` and an `x-fedicomment: edge` header.

The Worker only runs on the page paths listed under `run_worker_first` in `wrangler.jsonc`. If you
add a new section with comment-bearing pages, add its path pattern there. Asset requests (images,
CSS, JS) still bypass the Worker.

Wafrn rewoots are filtered out on both the edge and client paths.

## Disabling Comments on Specific Posts

To disable comments on a post, add to your frontmatter:

```yaml
hideComments: true
```

## Configuration Options

`layouts/partials/comments.html` writes the frontmatter values to `data-fedicomment-*` attributes on
the container and passes them to the client-side fallback. The Worker reads the same attributes. The
client widget also supports these JavaScript options:

- `instanceUrl` (required): Your Fediverse instance URL
- `statusId` (required): The status/post ID
- `username` (optional): Your username for the reply link
- `platform` (optional): `mastodon` (default) or `wafrn`
- `loadButtonText`: Text for the load button (default: "Load Comments from Fediverse")
- `replyButtonText`: Text for the reply button (default: "💬 Reply on Fediverse")
- `noCommentsText`: Message when no comments exist
- `maxDepth`: Maximum nesting level for replies (default: 10)
- `dateFormat`: 'relative' or 'absolute' (default: 'relative')

## Theming

FediComment automatically adapts to all re-terminal theme families and variants:
- Gruvbox (dark/light)
- Everforest (dark/light)
- Catppuccin (dark/light)
- High Contrast (dark/light)
- Oxocarbon (dark/light)
- Dracula (dark/light)
- Nord (dark/light)
- Rose Pine (dark/light)
- Tokyo Night (dark/light)
- Solarized (dark/light)
- Monokai (dark/light)
- Ayu (dark/light)

The styling is defined in `assets/css/custom.css` using CSS variables.

## Example Workflow

1. Write post: `content/posts/hello-world.md`
2. Build and deploy: `hugo && deploy`
3. Post on Mastodon: "Check out my new post! https://yourblog.com/posts/hello-world/"
4. Copy status ID from the Mastodon post URL (e.g., `https://fosstodon.org/@thelinuxcast/123456789` → `123456789`)
5. Edit `content/posts/hello-world.md` and add:
   ```toml
   [fediverse]
   instance = "https://fosstodon.org"
   username = "thelinuxcast"
   id = "123456789"
   ```
6. Rebuild and redeploy: `hugo && deploy`
7. People reply to your Mastodon post
8. Their replies appear as comments on your blog!

## Privacy & Security

FediComment:
- Makes direct API calls to your Mastodon or Wafrn instance
- Renders comments on the Cloudflare Worker, with client-side loading as a fallback
- Sanitizes comment HTML on the server (`sanitize-html`) and again in the browser
- Does not use cookies or localStorage
- Does not track users
- Does not send data to third parties
- Includes XSS protection (removes scripts, event handlers, and `javascript:` URLs)
- Uses public APIs (no authentication required)

## Troubleshooting

**Comments not loading?**
- Check that the status ID is correct (numeric for Mastodon, UUID for Wafrn)
- Verify the instance URL has no trailing slash
- Ensure your post is public
- Check browser console for errors
- Test the API directly: `https://your-instance.social/api/v1/statuses/YOUR_ID/context`
  (Mastodon) or `https://app.wafrn.net/api/forum/YOUR_ID` (Wafrn)

**Comments are not rendered in the HTML?**
- Confirm the Worker is deployed and the page path is covered by `run_worker_first` in
  `wrangler.jsonc`
- Check the response headers for `x-fedicomment: edge`
- If the upstream instance was unavailable, the page falls back to the client-side button and the
  thread is retried after the 60-second cache window

**Styling issues?**
- Make sure `assets/css/custom.css` is included in the Hugo build
- Verify theme is properly set with theme switcher
- Check that CSS variables are defined for your theme

**Reply button 404?**
- Verify the `username` field is set in frontmatter
- Check the status ID matches your Mastodon post

## Files

- `static/js/fedicomment.js` - Client-side widget and fallback loader
- `static/js/fedicomment-counter.js` - Client-side comment counter fallback
- `assets/css/custom.css` - FediComment theming
- `layouts/partials/comments.html` - Hugo template partial
- `layouts/partials/comments_counter.html` - Post metadata counter
- `worker/fedicomments.js` - Edge fetch, sanitize, render, and inject
- `wrangler.jsonc` - `run_worker_first` paths that reach the Worker

## Why Mastodon and Wafrn?

Mastodon and Wafrn expose public APIs for public posts, so the site can read replies without asking
visitors to log in. Comments stay on the Fediverse, the site keeps no database, and the Worker only
adds a short-lived cache in front of the public API.

## Credits

Inspired by Carl Schwan's [blog post](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/) on Mastodon comments.
