#!/usr/bin/env node

/*
 * Fetch ListenBrainz stats for the site's /music page.
 *
 * The re-terminal `listenbrainz` shortcode reads JSON files from
 * `data/listenbrainz/` at build time, so this script snapshots the public
 * ListenBrainz API into that directory. It is called by `build.sh` before
 * Hugo runs, which means Cloudflare Workers Builds refreshes the dashboard on
 * every deploy.
 *
 * API responses and the shortcode's expected files line up exactly:
 *   listen_count             -> payload.count
 *   recent                   -> payload.listens[]
 *   top_artists_{period}     -> payload.artists[]
 *   top_recordings_{period}  -> payload.recordings[]
 *   top_releases_{period}    -> payload.releases[]
 *   listening_activity_*     -> payload.listening_activity[]
 *   daily_activity_week      -> payload.daily_activity{}
 *
 * Failures are non-fatal: existing snapshots are kept, and a missing file is
 * replaced with an empty payload so the shortcode can still render. That keeps
 * a transient ListenBrainz outage from breaking a site deploy.
 *
 * Env overrides:
 *   LISTENBRAINZ_USER      ListenBrainz username (default: hugo.toml)
 *   LISTENBRAINZ_COUNT     number of items in top lists (default: 25)
 *   LISTENBRAINZ_API_BASE  API root (default: https://api.listenbrainz.org/1)
 */

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const OUT_DIR = path.join(ROOT_DIR, "data", "listenbrainz");
const API_BASE =
  process.env.LISTENBRAINZ_API_BASE || "https://api.listenbrainz.org/1";
const TOP_COUNT = Number.parseInt(process.env.LISTENBRAINZ_COUNT || "25", 10);
const CONCURRENCY = 4;

async function resolveUser() {
  if (process.env.LISTENBRAINZ_USER) {
    return process.env.LISTENBRAINZ_USER.trim();
  }

  try {
    const config = await readFile(path.join(ROOT_DIR, "hugo.toml"), "utf8");
    const match = config.match(/^\s*listenBrainzUser\s*=\s*['"]([^'"]+)['"]/m);
    if (match) {
      return match[1];
    }
  } catch {
    // Fall through to the default below.
  }

  return "anoraktrend";
}

function buildJobs(user) {
  const jobs = [
    {
      file: "listen_count",
      url: `/user/${encodeURIComponent(user)}/listen-count`,
      empty: { payload: { count: 0 } },
    },
    {
      file: "recent",
      url: `/user/${encodeURIComponent(user)}/listens?count=1`,
      empty: { payload: { count: 0, listens: [] } },
    },
  ];

  const periods = [
    ["alltime", "all_time"],
    ["year", "this_year"],
    ["month", "this_month"],
    ["week", "this_week"],
  ];

  for (const [suffix, range] of periods) {
    jobs.push(
      {
        file: `top_artists_${suffix}`,
        url: `/stats/user/${encodeURIComponent(user)}/artists?range=${range}&count=${TOP_COUNT}`,
        empty: { payload: { artists: [], count: 0, range } },
      },
      {
        file: `top_recordings_${suffix}`,
        url: `/stats/user/${encodeURIComponent(user)}/recordings?range=${range}&count=${TOP_COUNT}`,
        empty: { payload: { recordings: [], count: 0, range } },
      },
      {
        file: `top_releases_${suffix}`,
        url: `/stats/user/${encodeURIComponent(user)}/releases?range=${range}&count=${TOP_COUNT}`,
        empty: { payload: { releases: [], count: 0, range } },
      },
    );
  }

  jobs.push(
    {
      file: "listening_activity_week",
      url: `/stats/user/${encodeURIComponent(user)}/listening-activity?range=this_week`,
      empty: { payload: { listening_activity: [], range: "this_week" } },
    },
    {
      file: "listening_activity_year",
      url: `/stats/user/${encodeURIComponent(user)}/listening-activity?range=this_year`,
      empty: { payload: { listening_activity: [], range: "this_year" } },
    },
    {
      file: "daily_activity_week",
      url: `/stats/user/${encodeURIComponent(user)}/daily-activity?range=this_week`,
      empty: { payload: { daily_activity: {}, range: "this_week" } },
    },
  );

  return jobs;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(`${API_BASE}${url}`, {
        headers: {
          Accept: "application/json",
          "User-Agent": "helltop.net/1.0 (+https://helltop.net)",
        },
        signal: AbortSignal.timeout(30_000),
      });

      // ListenBrainz returns 204 when the requested range has no listens.
      if (response.status === 204) {
        return null;
      }

      if (response.status === 429 || response.status >= 500) {
        const retryAfter = Number.parseInt(response.headers.get("retry-after") || "", 10);
        lastError = new Error(`HTTP ${response.status}`);
        await sleep((Number.isFinite(retryAfter) ? retryAfter : attempt * 2) * 1000);
        continue;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      if (!data || typeof data !== "object" || !("payload" in data)) {
        throw new Error("response is missing a payload");
      }

      return data;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await sleep(attempt * 1000);
      }
    }
  }

  throw lastError;
}

async function readExisting(file) {
  try {
    const data = JSON.parse(await readFile(file, "utf8"));
    return data && typeof data === "object" && "payload" in data ? data : null;
  } catch {
    return null;
  }
}

async function writeJson(file, data) {
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(data, null, 2)}\n`);
  await rename(temporary, file);
}

async function runPool(items, worker, concurrency) {
  let index = 0;

  async function run() {
    while (index < items.length) {
      const item = items[index];
      index += 1;
      await worker(item);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => run()),
  );
}

/*
 * ListenBrainz returns both the current and previous period for
 * listening-activity (14 days for "week", two years for "year"). The
 * shortcode labels the totals "This Week" / "This Year", so trim the activity
 * to the exact range the top-list endpoints report. Without this, the weekly
 * chart shows two Mondays and the yearly total double-counts last year.
 */
async function alignActivity(rangeFile, activityFile) {
  const range = (await readExisting(rangeFile))?.payload;
  if (
    !range ||
    !Number.isFinite(range.from_ts) ||
    !Number.isFinite(range.to_ts)
  ) {
    return;
  }

  const activity = await readExisting(activityFile);
  const entries = activity?.payload?.listening_activity;
  if (!Array.isArray(entries)) {
    return;
  }

  const filtered = entries.filter(
    (entry) => entry.from_ts >= range.from_ts && entry.from_ts < range.to_ts,
  );

  if (filtered.length !== entries.length) {
    activity.payload.listening_activity = filtered;
    await writeJson(activityFile, activity);
  }
}

async function alignWeeklyAndYearlyActivity() {
  await Promise.all([
    alignActivity(
      path.join(OUT_DIR, "top_artists_week.json"),
      path.join(OUT_DIR, "listening_activity_week.json"),
    ),
    alignActivity(
      path.join(OUT_DIR, "top_artists_year.json"),
      path.join(OUT_DIR, "listening_activity_year.json"),
    ),
  ]);
}


async function main() {
  const user = await resolveUser();
  const jobs = buildJobs(user);

  await mkdir(OUT_DIR, { recursive: true });

  let updated = 0;
  let cached = 0;
  let placeholders = 0;

  await runPool(
    jobs,
    async (job) => {
      const file = path.join(OUT_DIR, `${job.file}.json`);
      let data = null;

      try {
        data = await fetchJson(job.url);
      } catch (error) {
        const existing = await readExisting(file);
        if (existing) {
          cached += 1;
          console.warn(
            `[listenbrainz] ${job.file}: ${error.message}; keeping existing data`,
          );
          return;
        }

        placeholders += 1;
        console.warn(
          `[listenbrainz] ${job.file}: ${error.message}; writing an empty placeholder`,
        );
      }

      // A 204 or a failed first fetch with no snapshot gets an empty payload.
      const output = data ?? job.empty;

      try {
        await writeJson(file, output);
        updated += 1;
      } catch (error) {
        placeholders += 1;
        console.warn(`[listenbrainz] ${job.file}: could not write: ${error.message}`);
      }
    },
    CONCURRENCY,
  );

  console.log(
    `[listenbrainz] ${user}: ${updated} files written, ${cached} kept from a previous build, ${placeholders} empty placeholders`,
  );

  await alignWeeklyAndYearlyActivity();
}

main().catch((error) => {
  console.warn(`[listenbrainz] fetch failed, using existing data: ${error.message}`);
  // Never fail the site build because ListenBrainz is unavailable.
  process.exitCode = 0;
});
