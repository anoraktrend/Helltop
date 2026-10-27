/*
 * ListenBrainz dashboard data and edge renderer.
 *
 * The Hugo shortcode still renders a build-time dashboard as a fallback. A
 * Cron Trigger calls fetchListenBrainzData() and renderListenBrainzDashboard(),
 * then stores the resulting HTML in KV. /music/ swaps the build-time dashboard
 * for that fresher snapshot at request time.
 */

const DEFAULT_API_BASE = "https://api.listenbrainz.org/1";
const DEFAULT_USER = "anoraktrend";
const TOP_COUNT = 25;
const CONCURRENCY = 4;
const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value
    : {};
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function formatNumber(value) {
  return String(Math.round(toNumber(value))).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ",",
  );
}

function formatPercent(value) {
  return String(Number(toNumber(value).toFixed(2)));
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

function listenBrainzUser(env) {
  return env.LISTENBRAINZ_USER || DEFAULT_USER;
}

function listenBrainzApiBase(env) {
  return (env.LISTENBRAINZ_API_BASE || DEFAULT_API_BASE).replace(/\/+$/, "");
}

function coverArtUrl(mbid, size) {
  return mbid
    ? `https://coverartarchive.org/release/${encodeURIComponent(mbid)}/front-${size}`
    : "";
}

function itemCoverMbid(item) {
  return item?.caa_release_mbid || item?.release_mbid || "";
}

function recentCoverMbid(listen) {
  const track = asObject(listen?.track_metadata);
  const info = asObject(track.additional_info);
  const mapping = asObject(track.mbid_mapping);
  return info.release_mbid || mapping.caa_release_mbid || mapping.release_mbid || "";
}

function formatListenedAt(seconds) {
  const value = toNumber(seconds);
  if (!value) {
    return "";
  }

  const date = new Date(value * 1000);
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
      .format(date)
      .replace(/,\s*(\d{1,2}:\d{2})/, " $1");
  } catch {
    return date.toISOString();
  }
}

function formatUpdatedAt(date) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "short",
    })
      .format(date)
      .replace(/,\s*(\d{1,2}:\d{2})/, " $1");
  } catch {
    return `${date.toISOString().replace("T", " ").slice(0, 16)} UTC`;
  }
}

function sumCounts(items) {
  return items.reduce((total, item) => total + toNumber(item.listen_count), 0);
}

function listenBrainzEndpoints(env) {
  const user = encodeURIComponent(listenBrainzUser(env));
  const top = (entity, range) =>
    `/stats/user/${user}/${entity}?range=${range}&count=${TOP_COUNT}`;

  return {
    listen_count: `/user/${user}/listen-count`,
    recent: `/user/${user}/listens?count=1`,
    top_artists_alltime: top("artists", "all_time"),
    top_artists_year: top("artists", "this_year"),
    top_artists_month: top("artists", "this_month"),
    top_artists_week: top("artists", "this_week"),
    top_recordings_alltime: top("recordings", "all_time"),
    top_recordings_year: top("recordings", "this_year"),
    top_recordings_month: top("recordings", "this_month"),
    top_recordings_week: top("recordings", "this_week"),
    top_releases_alltime: top("releases", "all_time"),
    top_releases_year: top("releases", "this_year"),
    top_releases_month: top("releases", "this_month"),
    top_releases_week: top("releases", "this_week"),
    listening_activity_week: `/stats/user/${user}/listening-activity?range=this_week`,
    listening_activity_year: `/stats/user/${user}/listening-activity?range=this_year`,
    daily_activity_week: `/stats/user/${user}/daily-activity?range=this_week`,
  };
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchJson(env, path) {
  const url = `${listenBrainzApiBase(env)}${path}`;
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "helltop.net/1.0 (+https://helltop.net)",
        },
        signal: AbortSignal.timeout(30_000),
      });

      // ListenBrainz returns 204 when a range has no listens.
      if (response.status === 204) {
        return { payload: {} };
      }

      if (!response.ok) {
        throw new Error(`ListenBrainz returned ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await delay(attempt * 500);
      }
    }
  }

  throw lastError;
}

export async function fetchListenBrainzData(env) {
  const entries = Object.entries(listenBrainzEndpoints(env));
  const data = {};
  let index = 0;

  async function worker() {
    while (index < entries.length) {
      const [key, path] = entries[index];
      index += 1;
      data[key] = await fetchJson(env, path);
    }
  }

  const workers = [];
  for (let i = 0; i < Math.min(CONCURRENCY, entries.length); i += 1) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return data;
}

function pushNowPlaying(out, data) {
  const listens = asArray(data.recent?.payload?.listens);
  if (listens.length === 0) {
    return;
  }

  const listen = listens[0];
  const track = asObject(listen.track_metadata);
  const playing = Boolean(listen.playing_now);
  const imageUrl = coverArtUrl(recentCoverMbid(listen), 500);

  out.push('<section class="lb-now-playing"><div class="lb-np-card">');
  if (imageUrl) {
    out.push('<div class="lb-np-art">');
    out.push(
      `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(
        track.release_name || "",
      )}" loading="lazy" onerror="this.style.display='none'">`,
    );
    if (playing) {
      out.push(
        '<span class="lb-playing-indicator"><span class="lb-bar"></span><span class="lb-bar"></span><span class="lb-bar"></span></span>',
      );
    }
    out.push("</div>");
  }

  out.push('<div class="lb-np-info">');
  out.push(
    `<span class="lb-np-label">${playing ? "Now Playing" : "Last Played"}</span>`,
  );
  out.push(
    `<span class="lb-np-track">${escapeHtml(track.track_name || "")}</span>`,
  );
  out.push(
    `<span class="lb-np-artist">${escapeHtml(track.artist_name || "")}</span>`,
  );
  if (track.release_name) {
    out.push(
      `<span class="lb-np-album">${escapeHtml(track.release_name)}</span>`,
    );
  }
  if (!playing && listen.listened_at) {
    out.push(
      `<time class="lb-np-time">${escapeHtml(
        formatListenedAt(listen.listened_at),
      )}</time>`,
    );
  }
  out.push("</div></div></section>");
}

function pushQuickStats(out, { totalListens, yearTotal, weekTotal, weekArtists }) {
  out.push('<section class="lb-stats">');
  out.push(
    `<div class="lb-stat-card"><span class="lb-stat-value">${formatNumber(
      totalListens,
    )}</span><span class="lb-stat-label">Total Listens</span></div>`,
  );
  out.push(
    `<div class="lb-stat-card"><span class="lb-stat-value">${formatNumber(
      yearTotal,
    )}</span><span class="lb-stat-label">This Year</span></div>`,
  );
  out.push(
    `<div class="lb-stat-card"><span class="lb-stat-value">${formatNumber(
      weekTotal,
    )}</span><span class="lb-stat-label">This Week</span></div>`,
  );
  out.push(
    `<div class="lb-stat-card"><span class="lb-stat-value">${formatNumber(
      weekArtists,
    )}</span><span class="lb-stat-label">Artists This Week</span></div>`,
  );
  out.push("</section>");
}

function pushDailyActivity(out, weekActivity) {
  if (weekActivity.length === 0) {
    return;
  }

  const maxDay = Math.max(
    1,
    ...weekActivity.map((item) => toNumber(item.listen_count)),
  );

  out.push(
    '<section class="lb-section"><h4 class="lb-section-title">Daily Activity</h4><div class="lb-daily-chart">',
  );
  for (const item of weekActivity) {
    const count = toNumber(item.listen_count);
    const percent = maxDay > 0 ? (count / maxDay) * 100 : 0;
    const dayName = String(item.time_range || "").split(" ")[0] || "";
    out.push(
      `<div class="lb-day lb-tooltip" data-tooltip="${count} listens"><div class="lb-day-bar-container"><div class="lb-day-bar" style="height: ${formatPercent(
        percent,
      )}%;"></div></div><span class="lb-day-label">${escapeHtml(
        dayName.slice(0, 3),
      )}</span><span class="lb-day-count">${count}</span></div>`,
    );
  }
  out.push("</div></section>");
}

function pushListeningClock(out, dailyActivity, weekTotal) {
  if (Object.keys(dailyActivity).length === 0) {
    return;
  }

  const hourTotals = Array(24).fill(0);
  for (const day of DAY_NAMES) {
    for (const entry of asArray(dailyActivity[day])) {
      const hour = Math.trunc(toNumber(entry.hour));
      if (hour >= 0 && hour < 24) {
        hourTotals[hour] += toNumber(entry.listen_count);
      }
    }
  }

  const maxHour = Math.max(1, ...hourTotals);
  out.push(
    '<section class="lb-section"><h4 class="lb-section-title">Listening Clock</h4><div class="lb-hourly-grid">',
  );
  for (let hour = 0; hour < 24; hour += 1) {
    const count = hourTotals[hour];
    const intensity = maxHour > 0 ? count / maxHour : 0;
    const opacity = 0.15 + intensity * 0.85;
    out.push(
      `<div class="lb-hour lb-tooltip" style="--hour-opacity: ${opacity.toFixed(
        2,
      )};" data-tooltip="${String(hour).padStart(2, "0")}:00 – ${count} listens"><span class="lb-hour-label">${String(
        hour,
      ).padStart(2, "0")}</span></div>`,
    );
  }
  out.push(
    '</div><p class="lb-chart-note">Brighter = more listens at that hour</p></section>',
  );

  const dayTotals = DAY_NAMES.map((day) =>
    asArray(dailyActivity[day]).reduce(
      (total, entry) => total + toNumber(entry.listen_count),
      0,
    ),
  );
  const maxDayTotal = Math.max(1, ...dayTotals);

  out.push(
    '<section class="lb-section"><h4 class="lb-section-title">Day of Week</h4><div class="lb-dow-chart">',
  );
  DAY_NAMES.forEach((day, index) => {
    const count = dayTotals[index];
    const percent = maxDayTotal > 0 ? (count / maxDayTotal) * 100 : 0;
    out.push(
      `<div class="lb-dow-row"><span class="lb-dow-label">${escapeHtml(
        day.slice(0, 3),
      )}</span><div class="lb-dow-bar-container"><div class="lb-dow-bar" style="width: ${formatPercent(
        percent,
      )}%;"></div></div><span class="lb-dow-count">${count}</span></div>`,
    );
  });
  out.push("</div></section>");

  let peakDay = "";
  let peakDayCount = 0;
  dayTotals.forEach((count, index) => {
    if (count > 1 && count > peakDayCount) {
      peakDay = DAY_NAMES[index];
      peakDayCount = count;
    }
  });

  let peakHour = 0;
  let peakHourCount = 0;
  hourTotals.forEach((count, hour) => {
    if (count > peakHourCount) {
      peakHour = hour;
      peakHourCount = count;
    }
  });

  out.push(
    '<section class="lb-section"><h4 class="lb-section-title">Peak Listening</h4><div class="lb-insights">',
  );
  out.push(
    `<div class="lb-insight-card"><span class="lb-insight-icon">📅</span><div class="lb-insight-info"><span class="lb-insight-value">${escapeHtml(
      peakDay,
    )}</span><span class="lb-insight-label">Most Active Day</span></div></div>`,
  );
  out.push(
    `<div class="lb-insight-card"><span class="lb-insight-icon">🕐</span><div class="lb-insight-info"><span class="lb-insight-value">${String(
      peakHour,
    ).padStart(2, "0")}:00</span><span class="lb-insight-label">Peak Hour</span></div></div>`,
  );
  if (weekTotal > 0) {
    out.push(
      `<div class="lb-insight-card"><span class="lb-insight-icon">📊</span><div class="lb-insight-info"><span class="lb-insight-value">${formatNumber(
        Math.floor(weekTotal / 7),
      )}</span><span class="lb-insight-label">Daily Average</span></div></div>`,
    );
  }
  out.push("</div></section>");
}

function pushTopRecordings(out, data) {
  const periods = [
    ["All Time", data.top_recordings_alltime],
    ["This Year", data.top_recordings_year],
    ["This Month", data.top_recordings_month],
    ["This Week", data.top_recordings_week],
  ];

  for (const [periodName, payload] of periods) {
    const recordings = asArray(payload?.payload?.recordings);
    if (recordings.length === 0) {
      continue;
    }

    const first = recordings[0];
    const featuredImage = coverArtUrl(itemCoverMbid(first), 500);
    out.push(
      `<section class="lb-section"><h4 class="lb-section-title">Top Tracks — ${escapeHtml(
        periodName,
      )}</h4><div class="lb-featured">`,
    );
    if (featuredImage) {
      out.push(
        `<img src="${escapeHtml(featuredImage)}" alt="${escapeHtml(
          first.release_name || "",
        )}" class="lb-featured-art" loading="lazy" onerror="this.style.display='none'">`,
      );
    }
    out.push(
      `<div class="lb-featured-info"><span class="lb-rank">#1</span><span class="lb-featured-title">${escapeHtml(
        first.track_name || "",
      )}</span><span class="lb-featured-artist">${escapeHtml(
        first.artist_name || "",
      )}</span><span class="lb-badge">${formatNumber(
        first.listen_count,
      )} plays</span></div></div>`,
    );

    if (recordings.length > 1) {
      out.push('<ol class="lb-list" start="2">');
      for (const item of recordings.slice(1)) {
        const image = coverArtUrl(itemCoverMbid(item), 250);
        out.push('<li class="lb-list-item">');
        if (image) {
          out.push(
            `<img src="${escapeHtml(
              image,
            )}" alt="" class="lb-thumb" loading="lazy" onerror="this.style.display='none'">`,
          );
        }
        out.push(
          `<span class="lb-track-name">${escapeHtml(
            item.track_name || "",
          )}</span><span class="lb-artist">${escapeHtml(
            item.artist_name || "",
          )}</span><span class="lb-badge">${formatNumber(
            item.listen_count,
          )}</span></li>`,
        );
      }
      out.push("</ol>");
    }
    out.push("</section>");
  }
}

function pushTopArtists(out, data) {
  const periods = [
    ["All Time", data.top_artists_alltime],
    ["This Year", data.top_artists_year],
    ["This Month", data.top_artists_month],
    ["This Week", data.top_artists_week],
  ];

  for (const [periodName, payload] of periods) {
    const artists = asArray(payload?.payload?.artists);
    if (artists.length === 0) {
      continue;
    }

    const first = artists[0];
    out.push(
      `<section class="lb-section"><h4 class="lb-section-title">Top Artists — ${escapeHtml(
        periodName,
      )}</h4><div class="lb-featured lb-featured-no-art"><div class="lb-featured-info lb-artist-featured"><span class="lb-rank">#1</span><span class="lb-featured-title">${escapeHtml(
        first.artist_name || "",
      )}</span></div><span class="lb-badge">${formatNumber(
        first.listen_count,
      )} plays</span></div>`,
    );

    if (artists.length > 1) {
      out.push('<ol class="lb-list" start="2">');
      for (const item of artists.slice(1)) {
        out.push(
          `<li class="lb-list-item"><span class="lb-track-name">${escapeHtml(
            item.artist_name || "",
          )}</span><span class="lb-badge">${formatNumber(
            item.listen_count,
          )}</span></li>`,
        );
      }
      out.push("</ol>");
    }
    out.push("</section>");
  }
}

function pushTopReleases(out, data) {
  const periods = [
    ["All Time", data.top_releases_alltime],
    ["This Year", data.top_releases_year],
    ["This Month", data.top_releases_month],
    ["This Week", data.top_releases_week],
  ];

  for (const [periodName, payload] of periods) {
    const releases = asArray(payload?.payload?.releases);
    if (releases.length === 0) {
      continue;
    }

    const first = releases[0];
    const featuredImage = coverArtUrl(itemCoverMbid(first), 500);
    out.push(
      `<section class="lb-section"><h4 class="lb-section-title">Top Albums — ${escapeHtml(
        periodName,
      )}</h4><div class="lb-featured">`,
    );
    if (featuredImage) {
      out.push(
        `<img src="${escapeHtml(featuredImage)}" alt="${escapeHtml(
          first.release_name || "",
        )}" class="lb-featured-art" loading="lazy" onerror="this.style.display='none'">`,
      );
    }
    out.push(
      `<div class="lb-featured-info"><span class="lb-rank">#1</span><span class="lb-featured-title">${escapeHtml(
        first.release_name || "",
      )}</span><span class="lb-featured-artist">${escapeHtml(
        first.artist_name || "",
      )}</span><span class="lb-badge">${formatNumber(
        first.listen_count,
      )} plays</span></div></div>`,
    );

    if (releases.length > 1) {
      out.push('<ol class="lb-list" start="2">');
      for (const item of releases.slice(1)) {
        const image = coverArtUrl(itemCoverMbid(item), 250);
        out.push('<li class="lb-list-item">');
        if (image) {
          out.push(
            `<img src="${escapeHtml(
              image,
            )}" alt="" class="lb-thumb" loading="lazy" onerror="this.style.display='none'">`,
          );
        }
        out.push(
          `<span class="lb-track-name">${escapeHtml(
            item.release_name || "",
          )}</span><span class="lb-artist">${escapeHtml(
            item.artist_name || "",
          )}</span><span class="lb-badge">${formatNumber(
            item.listen_count,
          )}</span></li>`,
        );
      }
      out.push("</ol>");
    }
    out.push("</section>");
  }
}

function pushYearlyActivity(out, yearActivity) {
  if (yearActivity.length === 0) {
    return;
  }

  const maxMonth = Math.max(
    1,
    ...yearActivity.map((item) => toNumber(item.listen_count)),
  );

  out.push(
    '<section class="lb-section"><h4 class="lb-section-title">Listening Activity — This Year</h4><div class="lb-yearly-chart">',
  );
  for (const item of yearActivity) {
    const count = toNumber(item.listen_count);
    const percent = maxMonth > 0 ? (count / maxMonth) * 100 : 0;
    const label = String(item.time_range || "").slice(0, 3);
    out.push(
      `<div class="lb-month lb-tooltip" data-tooltip="${count} listens"><div class="lb-month-bar-container"><div class="lb-month-bar" style="height: ${formatPercent(
        percent,
      )}%;"></div></div><span class="lb-month-label">${escapeHtml(
        label,
      )}</span></div>`,
    );
  }
  out.push("</div></section>");
}

function pushFooter(out, env, updatedAt) {
  out.push(
    `<footer class="lb-footer"><p class="lb-updated">Data updated ${escapeHtml(
      formatUpdatedAt(updatedAt),
    )}</p><p class="lb-profile"><a href="https://listenbrainz.org/user/${encodeURIComponent(
      listenBrainzUser(env),
    )}/">View full profile on ListenBrainz →</a></p></footer>`,
  );
}

export function renderListenBrainzDashboard(data, env, updatedAt = new Date()) {
  const totalListens = toNumber(data.listen_count?.payload?.count);
  const weekActivity = asArray(
    data.listening_activity_week?.payload?.listening_activity,
  );
  const yearActivity = asArray(
    data.listening_activity_year?.payload?.listening_activity,
  );
  const weekTotal = sumCounts(weekActivity);
  const yearTotal = sumCounts(yearActivity);
  const weekArtists = asArray(data.top_artists_week?.payload?.artists).length;
  const dailyActivity = asObject(
    data.daily_activity_week?.payload?.daily_activity,
  );

  const out = [];
  pushNowPlaying(out, data);
  pushQuickStats(out, {
    totalListens,
    yearTotal,
    weekTotal,
    weekArtists,
  });
  pushDailyActivity(out, weekActivity);
  pushListeningClock(out, dailyActivity, weekTotal);
  pushTopRecordings(out, data);
  pushTopArtists(out, data);
  pushTopReleases(out, data);
  pushYearlyActivity(out, yearActivity);
  pushFooter(out, env, updatedAt);

  return `<div class="lb-dashboard">${out.join("")}</div>`;
}
