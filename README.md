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

`content/music.md` renders the theme's ListenBrainz dashboard. The page reads snapshots from
`data/listenbrainz/`, which `build.sh` refreshes from the public ListenBrainz API before Hugo runs:

```sh
./ci/fetch-listenbrainz.sh   # manual refresh
```

The username comes from `params.listenBrainzUser` in `hugo.toml`. `LISTENBRAINZ_USER`,
`LISTENBRAINZ_COUNT` (top-list size, default 25), and `LISTENBRAINZ_API_BASE` can override it.
Set `HELLTOP_SKIP_LISTENBRAINZ=1` to build with the existing snapshot without network access.

Failures are non-fatal: if ListenBrainz is unavailable, the script keeps the last committed snapshot
or writes empty payloads, so a deploy can still complete. Because the data is fetched during the
build, it refreshes whenever the site is rebuilt; schedule a build in Workers Builds or rerun the
fetch script if you want it updated between deploys.

## Deploy to Cloudflare Workers

The site is deployed as a Workers static-assets Worker. `wrangler.jsonc` serves `./public`, uses the
Hugo-generated `404.html` for missing pages, and binds the `helltop.net` custom domain.

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
