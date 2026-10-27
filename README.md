# Helltop.net (Hugo)

Hugo version of helltop.net using the vendored [re-terminal](themes/re-terminal) theme.

## Local development

```sh
npm install
npm run dev
```

`npm run dev` starts the Hugo development server at <http://localhost:1313>.

To preview the exact static output through the Workers runtime:

```sh
npm run preview
```

## Build

```sh
npm run build
```

`build.sh` produces the site in `public/`. It installs Hugo extended 0.168.0 automatically if the
required version is not already on `PATH` (the version preinstalled in Cloudflare's build image is
too old for the theme's `.Site.Language.Locale` usage). Override the pinned version with the
`HELLTOP_HUGO_VERSION` environment variable if needed.

## Music page

`content/music.md` renders the theme's ListenBrainz dashboard plus a live now-playing card sourced
from Jellyfin. The ListenBrainz dashboard reads snapshots from `data/listenbrainz/`, which
`build.sh` refreshes from the public ListenBrainz API before Hugo runs:

```sh
./ci/fetch-listenbrainz.sh   # manual refresh
```

The username comes from `params.listenBrainzUser` in `hugo.toml`. `LISTENBRAINZ_USER`,
`LISTENBRAINZ_COUNT` (top-list size, default 25), and `LISTENBRAINZ_API_BASE` can override it.
Set `HELLTOP_SKIP_LISTENBRAINZ=1` to build with the existing snapshot without network access.

Failures are non-fatal: if ListenBrainz is unavailable, the script keeps the last committed snapshot
or writes empty payloads, so a deploy can still complete. The ListenBrainz statistics only change
when the site is rebuilt; the live now-playing card does not require a rebuild.

### Live now-playing

The Worker in `worker/index.js` exposes the Jellyfin-backed card:

- `/api/now-playing` returns a sanitized session for `JELLYFIN_USER`.
- `/api/now-playing/art` proxies cover art, so the API key never reaches the browser.
- `/music/` injects a server-rendered card into the static Hugo HTML.

A Cron Trigger (`* * * * *`) refreshes the `now-playing` key in the `MUSIC_STATE` KV namespace once
per minute. The snapshot is only rewritten when the track or paused state changes. `/music/` reads
it at request time; the browser script (`assets/js/now-playing.js`) polls the API every 15 seconds
for a faster update. No Workers Build is needed when a song changes.

`JELLYFIN_URL` and `JELLYFIN_USER` are configured in `wrangler.jsonc`. The API key is a Worker
secret:

```sh
npx wrangler secret put JELLYFIN_API_KEY
```

Locally, put it in `.dev.vars` (ignored by Git). The key is only read by the Worker and is never
included in the static output.

To exercise the cron locally after `npm run preview`, trigger the scheduled event:

```sh
curl -X POST 'http://127.0.0.1:8787/cdn-cgi/local/explorer/api/local/scheduled?worker=helltop' \
  -H 'content-type: application/json' \
  -d '{"cron":"* * * * *"}'
```

Cron changes can take up to 15 minutes to propagate after the first deploy.

## Deploy to Cloudflare Workers

The site is deployed as a Workers static-assets Worker. `wrangler.jsonc` serves `./public` through
the `ASSETS` binding, uses the Hugo-generated `404.html` for missing pages, binds the `helltop.net`
custom domain, handles `/api/*` and `/music/` in the Worker, and refreshes `MUSIC_STATE` from the
cron trigger.

Before the first deploy, set the Jellyfin secret:

```sh
npx wrangler secret put JELLYFIN_API_KEY
```

Then deploy:

```sh
npm run deploy
```

This runs the build and then `wrangler deploy`. You must be logged in with `wrangler login` (or have
`CLOUDFLARE_API_TOKEN` set).

## Cloudflare Workers Builds

When connecting the repository in the Cloudflare dashboard, use:

| Setting | Value |
| --- | --- |
| Worker name | `helltop` (must match `wrangler.jsonc`) |
| Production branch | `hugo` (or `main` after merging) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Workers Builds installs npm dependencies automatically. Optionally add `HUGO_VERSION=0.168.0` as a
build variable so the build image preinstalls the pinned Hugo and `build.sh` can skip downloading it.
