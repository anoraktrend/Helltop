/*
 * Jellyfin library lookups for missing album art.
 *
 * ListenBrainz gives us Cover Art Archive MBIDs when it can. Some releases
 * (podcasts, local files, obscure uploads) have no MBID, so search the
 * Jellyfin library by album/track and artist instead. The returned ID and
 * image tag are fed to the Worker's image proxy; the API key stays server-side.
 */

const DEFAULT_JELLYFIN_URL = "https://jellyfin.helltop.net";
const SEARCH_LIMIT = 15;
const SEARCH_FIELDS = [
  "ProviderIds",
  "AlbumArtist",
  "Artists",
  "ImageTags",
  "AlbumPrimaryImageTag",
  "SeriesPrimaryImageTag",
  "ParentPrimaryImageTag",
  "AlbumId",
  "SeriesId",
  "ParentId",
  "Album",
  "SeriesName",
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

function normalize(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„]/g, '"')
    .replace(/[–—−]/g, "-")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function namesMatch(left, right) {
  const a = normalize(left);
  const b = normalize(right);
  if (!a || !b) {
    return false;
  }
  if (a === b) {
    return true;
  }

  const [shorter, longer] = a.length <= b.length ? [a, b] : [b, a];
  return shorter.length >= 4 && longer.includes(shorter);
}

function itemNames(item) {
  return [item.Name, item.Album, item.SeriesName].filter(Boolean);
}

function itemArtists(item) {
  const names = [];
  if (item.AlbumArtist) {
    names.push(item.AlbumArtist);
  }
  for (const artist of item.AlbumArtists || []) {
    names.push(artist?.Name);
  }
  for (const artist of item.ArtistItems || []) {
    names.push(artist?.Name);
  }
  for (const artist of item.Artists || []) {
    names.push(artist);
  }
  if (item.Type === "Episode" && item.SeriesName) {
    names.push(item.SeriesName);
  }
  return names.filter(Boolean);
}

function artistMatches(item, artist) {
  if (!artist) {
    return true;
  }
  return itemArtists(item).some((name) => namesMatch(name, artist));
}

function imageForItem(item) {
  // Albums carry their own primary image.
  if (item.Type === "MusicAlbum") {
    const tag = item.ImageTags?.Primary;
    if (tag) {
      return { id: item.Id, tag };
    }
  }

  // Audio tracks usually inherit the album image.
  if (item.AlbumId) {
    if (item.AlbumPrimaryImageTag) {
      return { id: item.AlbumId, tag: item.AlbumPrimaryImageTag };
    }
    const tag = item.ImageTags?.Primary;
    if (tag) {
      return { id: item.Id, tag };
    }
    return { id: item.AlbumId, tag: "" };
  }

  // Episodes and podcast entries usually inherit the series image.
  const seriesId = item.SeriesId || item.ParentId;
  const seriesTag = item.SeriesPrimaryImageTag || item.ParentPrimaryImageTag;
  if (seriesId && seriesTag) {
    return { id: seriesId, tag: seriesTag };
  }

  const tag = item.ImageTags?.Primary;
  if (tag) {
    return { id: item.Id, tag };
  }

  return null;
}

function scoreItem(item, { album, artist, track, mbid }) {
  const names = itemNames(item);
  const nameMatchesAlbum = Boolean(
    album && names.some((name) => namesMatch(name, album)),
  );
  const nameMatchesTrack = Boolean(
    track && names.some((name) => namesMatch(name, track)),
  );
  const providerMbid =
    item.ProviderIds?.MusicBrainzAlbum ||
    item.ProviderIds?.MusicBrainzReleaseGroup ||
    "";
  const mbidMatches = Boolean(mbid && providerMbid === mbid);

  if (!nameMatchesAlbum && !nameMatchesTrack && !mbidMatches) {
    return -1;
  }
  if (artist && !artistMatches(item, artist)) {
    return -1;
  }

  const image = imageForItem(item);
  if (!image) {
    return -1;
  }

  let score = 0;
  if (mbidMatches) {
    score += 100;
  }
  if (nameMatchesAlbum) {
    score += 40;
  }
  if (nameMatchesTrack) {
    score += 30;
  }
  if (artist && artistMatches(item, artist)) {
    score += 20;
  }
  if (item.Type === "MusicAlbum") {
    score += 5;
  }
  return score;
}

async function searchItems(env, term) {
  const url = new URL(`${jellyfinBase(env)}/Items`);
  url.searchParams.set("searchTerm", term);
  url.searchParams.set("Recursive", "true");
  url.searchParams.set("Limit", String(SEARCH_LIMIT));
  url.searchParams.set("Fields", SEARCH_FIELDS);
  url.searchParams.set("IncludeItemTypes", "MusicAlbum,Audio,Episode");

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

function searchTerms({ album, track }) {
  const terms = [];
  for (const value of [album, track]) {
    if (value && !terms.includes(value)) {
      terms.push(value);
    }
    const ascii = value
      ? value.replace(/[‘’‚‛]/g, "'").replace(/[“”„]/g, '"')
      : "";
    if (ascii && ascii !== value && !terms.includes(ascii)) {
      terms.push(ascii);
    }
  }
  return terms;
}

export async function findJellyfinArt(env, wanted) {
  if (!env.JELLYFIN_API_KEY) {
    return null;
  }

  for (const term of searchTerms(wanted)) {
    let items;
    try {
      items = await searchItems(env, term);
    } catch {
      continue;
    }

    let best = null;
    let bestScore = -1;
    for (const item of items) {
      const score = scoreItem(item, wanted);
      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    }

    if (best) {
      return imageForItem(best);
    }
  }

  return null;
}
