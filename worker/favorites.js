/*
 * Jellyfin favorites for the /music/ page.
 *
 * A cron-refreshed KV snapshot holds the rendered "From the Library" section:
 * albums the user hearted (alphabetical) plus a rotating random page of
 * hearted tracks. The pure shaping/rendering helpers live here; index.js owns
 * the snapshot lifecycle. Art goes through the Worker's /api/art proxy, so
 * the API key stays server-side.
 */

import { escapeHtml, typographicHtml } from "./typography.js";

const DEFAULT_USER = "lucy";
const DEFAULT_JELLYFIN_URL = "https://jellyfin.helltop.net";
const FAVORITE_ART_SIZE = 250;
const FAVORITE_FIELDS = [
  "Album",
  "AlbumArtist",
  "Artists",
  "ImageTags",
  "AlbumPrimaryImageTag",
  "ProductionYear",
  "ProviderIds",
].join(",");

function jellyfinBase(env) {
  return (env.JELLYFIN_URL || DEFAULT_JELLYFIN_URL).replace(/\/+$/, "");
}

function authHeaders(env) {
  return {
    Authorization: `MediaBrowser Token="${env.JELLYFIN_API_KEY}"`,
    Accept: "application/json",
  };
}

/*
 * "not configured" and "user missing" are both null, not throws: the snapshot
 * refresh treats null as "leave the section out" rather than an outage.
 */
export async function resolveJellyfinUserId(env) {
  if (!env.JELLYFIN_API_KEY) {
    return null;
  }

  try {
    const response = await fetch(`${jellyfinBase(env)}/Users`, {
      headers: authHeaders(env),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      return null;
    }

    const users = await response.json();
    return pickJellyfinUser(users, env.JELLYFIN_USER || DEFAULT_USER)?.Id || null;
  } catch {
    return null;
  }
}

async function fetchFavoriteItems(env, userId, query) {
  const url = new URL(`${jellyfinBase(env)}/Items`);
  url.searchParams.set("UserId", userId);
  url.searchParams.set("Filters", "IsFavorite");
  url.searchParams.set("Recursive", "true");
  url.searchParams.set("Fields", FAVORITE_FIELDS);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    headers: authHeaders(env),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error(`Jellyfin returned ${response.status}`);
  }

  const payload = await response.json();
  return Array.isArray(payload.Items) ? payload.Items : [];
}

/*
 * Albums come back alphabetical; tracks are a random page so the shelf
 * reshuffles on every snapshot refresh.
 */
export async function fetchJellyfinFavorites(env, userId) {
  const [albums, tracks] = await Promise.all([
    fetchFavoriteItems(env, userId, {
      IncludeItemTypes: "MusicAlbum",
      SortBy: "SortName",
      SortOrder: "Ascending",
      Limit: String(Number(env.FAVORITE_ALBUM_LIMIT) || 12),
    }),
    fetchFavoriteItems(env, userId, {
      IncludeItemTypes: "Audio",
      SortBy: "Random",
      Limit: String(Number(env.FAVORITE_TRACK_LIMIT) || 10),
    }),
  ]);

  return { albums, tracks };
}

export function pickJellyfinUser(users, wantedName) {
  if (!Array.isArray(users) || !wantedName) {
    return null;
  }

  const wanted = String(wantedName).toLowerCase();
  return (
    users.find((user) => String(user?.Name || "").toLowerCase() === wanted) ||
    null
  );
}

export function favoriteArtUrl(item, size = FAVORITE_ART_SIZE) {
  if (!item) {
    return "";
  }

  // Tracks inherit their album's art; albums carry their own primary image.
  // An id without a tag is still valid — /api/art tolerates a missing tag.
  let id = null;
  let tag = "";
  if (item.AlbumId) {
    id = item.AlbumId;
    tag = item.AlbumPrimaryImageTag || "";
  } else if (item.ImageTags?.Primary && item.Id) {
    id = item.Id;
    tag = item.ImageTags.Primary;
  } else if (item.Id) {
    id = item.Id;
  }

  if (!id) {
    return "";
  }

  const params = new URLSearchParams();
  params.set("id", id);
  if (tag) {
    params.set("tag", tag);
  }
  params.set("size", String(size));
  return `/api/art?${params.toString()}`;
}

function albumArtistLine(album) {
  const parts = [typographicHtml(album.AlbumArtist || "")];
  if (album.ProductionYear) {
    parts.push(escapeHtml(String(album.ProductionYear)));
  }
  return parts.filter(Boolean).join(" · ");
}

export function renderFavorites({ albums, tracks } = {}) {
  const albumItems = Array.isArray(albums) ? albums : [];
  const trackItems = Array.isArray(tracks) ? tracks : [];
  if (albumItems.length === 0 && trackItems.length === 0) {
    return "";
  }

  const out = [];
  out.push('<section class="lb-section lb-favorites" id="jellyfin-favorites">');
  out.push('<h4 class="lb-section-title">From the Library</h4>');

  if (albumItems.length > 0) {
    out.push('<h4 class="lb-section-title">♥ Hearted Albums</h4>');
    out.push('<div class="lb-fav-albums">');
    for (const album of albumItems) {
      const art = favoriteArtUrl(album);
      out.push('<div class="lb-fav-album">');
      if (art) {
        out.push(
          `<img class="lb-fav-album-art" src="${escapeHtml(
            art,
          )}" alt="${typographicHtml(album.Name || "")}" loading="lazy" onerror="this.style.display='none'">`,
        );
      }
      out.push(
        `<span class="lb-fav-album-name">${typographicHtml(album.Name || "")}</span>`,
      );
      const artistLine = albumArtistLine(album);
      if (artistLine) {
        out.push(`<span class="lb-fav-album-artist">${artistLine}</span>`);
      }
      out.push("</div>");
    }
    out.push("</div>");
  }

  if (trackItems.length > 0) {
    out.push('<h4 class="lb-section-title">♥ Hearted Tracks</h4>');
    out.push('<ol class="lb-list lb-fav-tracks">');
    for (const track of trackItems) {
      const art = favoriteArtUrl(track);
      out.push('<li class="lb-list-item">');
      if (art) {
        out.push(
          `<img src="${escapeHtml(
            art,
          )}" alt="" class="lb-thumb" loading="lazy" onerror="this.style.display='none'">`,
        );
      }
      out.push(
        `<span class="lb-track-name">${typographicHtml(track.Name || "")}</span>`,
      );
      out.push(
        `<span class="lb-artist">${typographicHtml(track.AlbumArtist || "")}</span>`,
      );
      out.push("</li>");
    }
    out.push("</ol>");
  }

  out.push("</section>");
  return out.join("");
}
