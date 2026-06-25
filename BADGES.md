# StatusFlare Badges

StatusFlare serves real-time status badges that any Cloudflare Worker (or external service) can fetch and embed.

## Endpoints

### `GET /badge/<service-name>.svg`

Returns a colored status indicator SVG for a specific service.

```
https://status.helltop.net/badge/Immich.svg
https://status.helltop.net/badge/Jellyfin.svg
```

### `GET /badge/<service-name>.png`

Same indicator, rasterized to PNG via resvg. Use this for platforms that don't support SVG embeds (e.g. Discord, email, social cards).

```
https://status.helltop.net/badge/Immich.png
https://status.helltop.net/badge/Jellyfin.png?w=1200&h=630
```

Optional query params `w` and `h` resize the output.

### `GET /badge/global.svg` (or `/badge/all.svg`)

Overall system status — all services must be `up` for a green badge.

```
https://status.helltop.net/badge/global.svg
```

## Response Format

### SVG (image/svg+xml)

Three-ring dot design at 512×512:

| Status | Center Color | Meaning |
|--------|-------------|---------|
| `up`    | `#007c00` (green) | All systems healthy |
| `down`  | `#f80008` (red)   | Service is down or active incident |
| `degraded` | `#f9e2af` (yellow) | Some services degraded |

```xml
<?xml version="1.0" standalone="no"?>
<svg width="512" height="512" viewBox="0 0 512 512">
  <ellipse cx="256" cy="256" rx="250" ry="250" stroke="#007c00" fill="#000" stroke-width="12"/>
  <ellipse cx="256" cy="256" rx="204" ry="204" stroke="#007c00" fill="#000" stroke-width="42"/>
  <ellipse cx="256" cy="256" rx="158" ry="158" fill="#007c00" stroke="#007c00" stroke-width="8"/>
</svg>
```

### PNG (image/png)

Default 512×512, resizable via `?w=` and `?h=`. Cache-friendly (max-age: 60s).

## Caching

`Cache-Control: public, max-age=60` — badges update every minute alongside health checks. Poll at most once per minute.

## Status API (JSON)

For structured data, use the JSON API instead of parsing badge colors:

```
GET https://status.helltop.net/api/status
```

Returns per-service status, overall system health, uptime, and active incidents.

## Example: Fetch in a Worker

```ts
async function fetchBadge(service: string): Promise<Response> {
  const url = `https://status.helltop.net/badge/${encodeURIComponent(service)}.svg`;
  return fetch(url, { cf: { cacheTtl: 60 } });
}
```

For a service-name-to-status lookup without parsing SVGs, hit the JSON endpoint:

```ts
async function getServiceStatus(service: string): Promise<string> {
  const res = await fetch('https://status.helltop.net/api/status');
  const data = await res.json() as { services: { name: string; latest: { status: string } }[] };
  const s = data.services.find(s => s.name.toLowerCase() === service.toLowerCase());
  return s?.latest.status ?? 'unknown';
}
```
