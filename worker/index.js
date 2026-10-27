/*
 * Small API surface and Music-page enhancer for the static Hugo site.
 *
 * /api/now-playing       -> sanitized Jellyfin "now playing" state
 * /api/now-playing/art   -> proxied cover art (the API key stays server-side)
 * /music/                -> static page with fresh now-playing and ListenBrainz data
 *
 * Cron Triggers refresh two KV snapshots: Jellyfin now-playing once a minute
 * and the rendered ListenBrainz dashboard every five minutes. The /music/
 * handler injects them into the static HTML, so the page stays current without
 * JavaScript or a full Workers Build. The static Hugo output remains the
 * fallback whenever a snapshot is missing or stale. The browser-side poll in
 * assets/js/now-playing.js is still a faster live enhancement for the card.
 *
 * Required Worker secret:
 *   JELLYFIN_API_KEY
 *
 * Optional vars (wrangler.jsonc):
 *   JELLYFIN_URL         default: https://jellyfin.helltop.net
 *   JELLYFIN_USER        default: lucy
 *   LISTENBRAINZ_USER    default: anoraktrend
 *   LISTENBRAINZ_API_BASE
 */

import {
  fetchListenBrainzData,
  renderListenBrainzDashboard,
} from "./listenbrainz.js";

const DEFAULT_JELLYFIN_URL = "https://jellyfin.helltop.net";
const DEFAULT_JELLYFIN_USER = "lucy";
const SESSION_ACTIVE_SECONDS = 3600;
const CACHE_SECONDS = 10;
const SNAPSHOT_KEY = "now-playing";
const SNAPSHOT_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const DASHBOARD_KEY = "listenbrainz-dashboard";
const DASHBOARD_REFRESH_MS = 5 * 60 * 1000;
const DASHBOARD_MAX_AGE_MS = 30 * 60 * 1000;
const DASHBOARD_VERSION = 1;
const ID_PATTERN = /^[a-f0-9]{32}$/i;
const MOUNT_PATTERN =
  /<div\b[^>]*?\sid\s*=\s*(?:"jellyfin-now-playing"|'jellyfin-now-playing'|jellyfin-now-playing)[^>]*>\s*<\/div>/i;
const DASHBOARD_PATTERN =
  /<listenbrainz-dashboard\b[^>]*>[\s\S]*?<\/listenbrainz-dashboard>/i;

let refreshPromise = null;
let dashboardRefreshPromise = null;

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": `public, max-age=${CACHE_SECONDS}`,
  "access-control-allow-origin": "*",
};

function jellyfinBase(env) {
  return (env.JELLYFIN_URL || DEFAULT_JELLYFIN_URL).replace(/\/+$/, "");
}

function authHeaders(env, accept = "application/json") {
  return {
    Authorization: `MediaBrowser Token="${env.JELLYFIN_API_KEY}"`,
    Accept: accept,
  };
}

function ticksToSeconds(ticks) {
  return Number.isFinite(ticks) && ticks > 0
    ? Math.floor(ticks / 10_000_000)
    : null;
}

function nowPlayingPayload(session) {
  const item = session.NowPlayingItem;
  const playState = session.PlayState || {};

  const imageId =
    item.AlbumId || item.ParentPrimaryImageItemId || item.Id || null;
  const imageTag =
    item.AlbumPrimaryImageTag ||
    item.ParentPrimaryImageTag ||
    item.ImageTags?.Primary ||
    null;

  const artUrl =
    imageId && imageTag
      ? `/api/now-playing/art?id=${encodeURIComponent(imageId)}&tag=${encodeURIComponent(imageTag)}`
      : null;

  const artist = Array.isArray(item.Artists) && item.Artists.length
    ? item.Artists.join(", ")
    : item.AlbumArtist || "";

  let context = item.Album || "";
  if (!context && item.Type === "Episode") {
    context = [
      item.SeriesName,
      item.ParentIndexNumber != null ? `S${item.ParentIndexNumber}` : null,
      item.IndexNumber != null ? `E${item.IndexNumber}` : null,
    ]
      .filter(Boolean)
      .join(" ");
  }

  return {
    playing: true,
    paused: Boolean(playState.IsPaused),
    itemId: item.Id || "",
    title: item.Name || "Unknown",
    artist,
    album: context,
    itemType: item.Type || "",
    positionSeconds: ticksToSeconds(playState.PositionTicks),
    durationSeconds: ticksToSeconds(item.RunTimeTicks),
    device: session.DeviceName || "",
    client: session.Client || "",
    user: session.UserName || "",
    artUrl,
    updatedAt: new Date().toISOString(),
  };
}

async function fetchSessions(env) {
  const url = new URL(`${jellyfinBase(env)}/Sessions`);
  url.searchParams.set("ActiveWithinSeconds", String(SESSION_ACTIVE_SECONDS));

  const response = await fetch(url, {
    headers: authHeaders(env),
  });

  if (!response.ok) {
    throw new Error(`Jellyfin returned ${response.status}`);
  }

  return response.json();
}

function pickSession(sessions, env) {
  const wantedUser = (env.JELLYFIN_USER || DEFAULT_JELLYFIN_USER).toLowerCase();

  return (Array.isArray(sessions) ? sessions : [])
    .filter(
      (session) =>
        session?.NowPlayingItem &&
        String(session.UserName || "").toLowerCase() === wantedUser,
    )
    .sort(
      (a, b) =>
        (Date.parse(b.LastActivityDate) || 0) -
        (Date.parse(a.LastActivityDate) || 0),
    )[0];
}

async function currentNowPlaying(env) {
  const sessions = await fetchSessions(env);
  const session = pickSession(sessions, env);

  return session
    ? nowPlayingPayload(session)
    : { playing: false, updatedAt: new Date().toISOString() };
}

function snapshotSignature(payload) {
  if (!payload?.playing) {
    return "idle";
  }

  const item =
    payload.itemId ||
    `${payload.title || ""}|${payload.artist || ""}|${payload.album || ""}`;
  return `${item}|${payload.paused ? "paused" : "playing"}`;
}

function isSnapshotFresh(snapshot) {
  const updated = Date.parse(snapshot?.updatedAt);
  return Number.isFinite(updated) && Date.now() - updated <= SNAPSHOT_MAX_AGE_MS;
}

async function readSnapshot(env) {
  if (!env.MUSIC_STATE) {
    return null;
  }

  try {
    const raw = await env.MUSIC_STATE.get(SNAPSHOT_KEY);
    if (!raw) {
      return null;
    }
    const snapshot = JSON.parse(raw);
    return snapshot && typeof snapshot === "object" ? snapshot : null;
  } catch {
    return null;
  }
}

async function writeSnapshot(env, payload) {
  if (!env.MUSIC_STATE) {
    return false;
  }

  await env.MUSIC_STATE.put(SNAPSHOT_KEY, JSON.stringify(payload));
  return true;
}

async function refreshSnapshot(env) {
  if (!env.JELLYFIN_API_KEY || !env.MUSIC_STATE) {
    return { updated: false, reason: "not-configured" };
  }

  try {
    const payload = await currentNowPlaying(env);
    const previous = await readSnapshot(env);

    if (previous && snapshotSignature(previous) === snapshotSignature(payload)) {
      return { updated: false, payload };
    }

    await writeSnapshot(env, payload);
    console.log(
      payload.playing
        ? `now-playing snapshot updated: ${payload.title}`
        : "now-playing snapshot updated: idle",
    );
    return { updated: true, payload };
  } catch (error) {
    console.error("now-playing snapshot refresh failed:", error.message);
    return { updated: false, error: error.message };
  }
}

function scheduleRefresh(env, ctx) {
  if (!refreshPromise) {
    refreshPromise = refreshSnapshot(env).finally(() => {
      refreshPromise = null;
    });
  }
  ctx.waitUntil(refreshPromise);
}

function isDashboardFresh(snapshot) {
  const updated = Date.parse(snapshot?.updatedAt);
  return Number.isFinite(updated) && Date.now() - updated <= DASHBOARD_MAX_AGE_MS;
}

async function readDashboard(env) {
  if (!env.MUSIC_STATE) {
    return null;
  }

  try {
    const raw = await env.MUSIC_STATE.get(DASHBOARD_KEY);
    if (!raw) {
      return null;
    }
    const snapshot = JSON.parse(raw);
    if (
      !snapshot ||
      typeof snapshot !== "object" ||
      snapshot.version !== DASHBOARD_VERSION ||
      typeof snapshot.html !== "string" ||
      !snapshot.html
    ) {
      return null;
    }
    return snapshot;
  } catch {
    return null;
  }
}

async function writeDashboard(env, snapshot) {
  if (!env.MUSIC_STATE) {
    return false;
  }

  await env.MUSIC_STATE.put(DASHBOARD_KEY, JSON.stringify(snapshot));
  return true;
}

async function refreshListenBrainzDashboard(env) {
  if (!env.MUSIC_STATE) {
    return { updated: false, reason: "not-configured" };
  }

  try {
    const data = await fetchListenBrainzData(env);
    const updatedAt = new Date();
    const html = renderListenBrainzDashboard(data, env, updatedAt);
    await writeDashboard(env, {
      version: DASHBOARD_VERSION,
      updatedAt: updatedAt.toISOString(),
      html,
    });
    console.log("ListenBrainz dashboard snapshot updated");
    return { updated: true };
  } catch (error) {
    console.error(
      "ListenBrainz dashboard snapshot refresh failed:",
      error.message,
    );
    return { updated: false, error: error.message };
  }
}

function scheduleDashboardRefresh(env, ctx) {
  if (!dashboardRefreshPromise) {
    dashboardRefreshPromise = refreshListenBrainzDashboard(env).finally(() => {
      dashboardRefreshPromise = null;
    });
  }
  ctx.waitUntil(dashboardRefreshPromise);
}

async function refreshDashboardIfDue(env, ctx) {
  const snapshot = await readDashboard(env);
  const updated = Date.parse(snapshot?.updatedAt);
  if (Number.isFinite(updated) && Date.now() - updated < DASHBOARD_REFRESH_MS) {
    return;
  }
  scheduleDashboardRefresh(env, ctx);
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function serverPlayingIndicator() {
  return (
    '<span class="lb-playing-indicator">' +
    '<span class="lb-bar"></span>' +
    '<span class="lb-bar"></span>' +
    '<span class="lb-bar"></span>' +
    "</span>"
  );
}

function renderNowPlayingCard(data) {
  const paused = Boolean(data.paused);
  const art = data.artUrl
    ? '<div class="lb-np-art">' +
      `<img src="${escapeHtml(data.artUrl)}" alt="${escapeHtml(
        data.album || data.title || "",
      )}" loading="lazy" decoding="async">` +
      (paused ? "" : serverPlayingIndicator()) +
      "</div>"
    : "";

  const artist = data.artist
    ? `<span class="lb-np-artist">${escapeHtml(data.artist)}</span>`
    : "";
  const album = data.album
    ? `<span class="lb-np-album">${escapeHtml(data.album)}</span>`
    : "";
  const details = [data.device, data.client].filter(Boolean).join(" · ");
  const detailLine = details
    ? `<time class="lb-np-time">${escapeHtml(details)}</time>`
    : "";

  return (
    '<div class="lb-now-playing" id="jellyfin-now-playing">' +
    '<div class="lb-np-card">' +
    art +
    '<div class="lb-np-info">' +
    `<span class="lb-np-label">${
      paused ? "Paused on Jellyfin" : "Now Playing on Jellyfin"
    }</span>` +
    `<span class="lb-np-track">${escapeHtml(data.title || "Unknown")}</span>` +
    artist +
    album +
    detailLine +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

function hideListenBrainzCard(html) {
  return html.replace(/<section\b([^>]*)>/gi, (match, attrs) => {
    const classMatch = attrs.match(
      /(?:^|\s)class\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i,
    );
    if (!classMatch) {
      return match;
    }

    const classes = classMatch[1] ?? classMatch[2] ?? classMatch[3] ?? "";
    if (!classes.split(/\s+/).includes("lb-now-playing")) {
      return match;
    }
    if (
      /(?:^|\s)id\s*=\s*(?:"jellyfin-now-playing"|'jellyfin-now-playing'|jellyfin-now-playing)/i.test(
        attrs,
      )
    ) {
      return match;
    }
    if (/\bhidden(?:\s|=|$)/i.test(attrs)) {
      return match;
    }

    return `<section${attrs} hidden>`;
  });
}

function injectNowPlaying(html, snapshot) {
  if (!MOUNT_PATTERN.test(html)) {
    return html;
  }

  let output = html.replace(MOUNT_PATTERN, renderNowPlayingCard(snapshot));
  output = hideListenBrainzCard(output);
  return output;
}

function injectListenBrainzDashboard(html, dashboardHtml) {
  if (!DASHBOARD_PATTERN.test(html)) {
    return html;
  }

  return html.replace(
    DASHBOARD_PATTERN,
    `<listenbrainz-dashboard>${dashboardHtml}</listenbrainz-dashboard>`,
  );
}

async function serveMusic(request, env, ctx) {
  if (!env.ASSETS) {
    return new Response("Not Found", { status: 404 });
  }

  const assetResponse = await env.ASSETS.fetch(request);

  if (request.method !== "GET" || !assetResponse.ok) {
    return assetResponse;
  }

  const contentType = assetResponse.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return assetResponse;
  }

  const [snapshot, dashboard] = await Promise.all([
    readSnapshot(env),
    readDashboard(env),
  ]);

  const freshNowPlaying = snapshot && isSnapshotFresh(snapshot);
  const freshDashboard = dashboard && isDashboardFresh(dashboard);

  if (!freshNowPlaying) {
    scheduleRefresh(env, ctx);
  }
  if (!freshDashboard) {
    scheduleDashboardRefresh(env, ctx);
  }

  // The Jellyfin card only replaces the ListenBrainz fallback while something
  // is actually playing. Otherwise the card mount stays hidden.
  const injectCard = freshNowPlaying && snapshot.playing;
  if (!injectCard && !freshDashboard) {
    return assetResponse;
  }

  const html = await assetResponse.text();
  let output = html;

  if (freshDashboard) {
    output = injectListenBrainzDashboard(output, dashboard.html);
  }
  if (injectCard) {
    output = injectNowPlaying(output, snapshot);
  }

  if (output === html) {
    return new Response(html, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers: new Headers(assetResponse.headers),
    });
  }

  const headers = new Headers(assetResponse.headers);
  headers.delete("content-encoding");
  headers.delete("content-length");
  headers.delete("etag");
  headers.set("cache-control", "public, max-age=15, stale-while-revalidate=45");

  return new Response(output, {
    status: assetResponse.status,
    statusText: assetResponse.statusText,
    headers,
  });
}

async function nowPlaying(request, env, ctx) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  }

  if (!env.JELLYFIN_API_KEY) {
    return Response.json(
      { playing: false, error: "Jellyfin is not configured" },
      { status: 503, headers: { ...jsonHeaders, "cache-control": "no-store" } },
    );
  }

  const isGet = request.method === "GET";
  const cache = caches.default;
  const cacheKey = new Request(new URL("/api/now-playing", request.url), {
    method: "GET",
  });
  const cached = isGet ? await cache.match(cacheKey) : null;
  if (cached) {
    return cached;
  }

  try {
    const result = await currentNowPlaying(env);
    const output = Response.json(result, { headers: jsonHeaders });

    if (isGet) {
      ctx.waitUntil(cache.put(cacheKey, output.clone()).catch(() => {}));
    }
    return output;
  } catch (error) {
    return Response.json(
      { playing: false, error: error.message },
      { status: 502, headers: { ...jsonHeaders, "cache-control": "no-store" } },
    );
  }
}

async function coverArt(request, env) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD" },
    });
  }

  if (!env.JELLYFIN_API_KEY) {
    return new Response("Jellyfin is not configured", { status: 503 });
  }

  const url = new URL(request.url);
  const id = url.searchParams.get("id") || "";
  const tag = url.searchParams.get("tag") || "";

  // Only allow Jellyfin's 32-character hex IDs/tags. This keeps the route
  // from being usable to fetch arbitrary upstream paths.
  if (!ID_PATTERN.test(id) || (tag && !ID_PATTERN.test(tag))) {
    return new Response("Bad Request", { status: 400 });
  }

  const upstream = new URL(
    `${jellyfinBase(env)}/Items/${encodeURIComponent(id)}/Images/Primary`,
  );
  upstream.searchParams.set("maxHeight", "500");
  if (tag) {
    upstream.searchParams.set("tag", tag);
  }

  try {
    const response = await fetch(upstream, {
      headers: authHeaders(env, "image/*"),
    });

    if (!response.ok) {
      return new Response("Image not found", {
        status: response.status === 404 ? 404 : 502,
      });
    }

    const headers = new Headers();
    headers.set("Content-Type", response.headers.get("Content-Type") || "image/jpeg");
    const contentLength = response.headers.get("Content-Length");
    if (contentLength) {
      headers.set("Content-Length", contentLength);
    }
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    headers.set("Access-Control-Allow-Origin", "*");

    return new Response(request.method === "HEAD" ? null : response.body, {
      status: 200,
      headers,
    });
  } catch {
    return new Response("Image unavailable", { status: 502 });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/now-playing") {
      return nowPlaying(request, env, ctx);
    }

    if (url.pathname === "/api/now-playing/art") {
      return coverArt(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404 });
    }

    if (url.pathname === "/music/" || url.pathname === "/music/index.html") {
      return serveMusic(request, env, ctx);
    }

    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    // The now-playing snapshot is cheap (one Jellyfin request), so refresh it
    // every minute. The ListenBrainz dashboard fans out to many API requests,
    // so it is only refetched when its KV snapshot is at least five minutes
    // old. Doing the age check here keeps this correct regardless of how
    // Cloudflare maps cron expressions to invocations.
    scheduleRefresh(env, ctx);
    ctx.waitUntil(refreshDashboardIfDue(env, ctx));
  },
};
