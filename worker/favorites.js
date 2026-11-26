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
const FAVORITE_ART_SIZE = 250;

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
