/*
 * Edge rendering for FediComment threads.
 *
 * Hugo emits a #fedicomment-container with data-fedicomment-* attributes on
 * pages that have [fediverse] frontmatter. When the Worker handles one of
 * those pages it fetches the thread, sanitizes the remote HTML, and injects
 * the comments and count into the response. The client-side widget remains as
 * a fallback when the upstream instance is unavailable or the Worker is not in
 * front of the request.
 *
 * Threads are cached for a minute so a busy page does not hammer Wafrn or
 * Mastodon. The cache key is based on the platform, instance, and status ID,
 * so multiple pages can share a thread.
 */

import sanitizeHtml from "sanitize-html";

const CACHE_VERSION = "v1";
const THREAD_CACHE_SECONDS = 60;
const FETCH_TIMEOUT_MS = 2500;
const MAX_COMMENTS = 500;
const MAX_CONTENT_LENGTH = 20_000;
const MAX_DEPTH = 10;

const HTML_HEADERS = { "content-type": "text/html; charset=utf-8" };

const SANITIZE_OPTIONS = {
  allowedTags: [
    "p",
    "br",
    "hr",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "del",
    "code",
    "pre",
    "blockquote",
    "ul",
    "ol",
    "li",
    "span",
    "a",
    "img",
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "class", "loading", "referrerpolicy"],
    span: ["class"],
  },
  allowedClasses: {
    img: ["emoji", "custom-emoji", "fedicomment-emoji"],
    span: ["emoji", "custom-emoji", "invisible", "mention", "hashtag"],
  },
  allowedSchemes: ["http", "https"],
  allowedSchemesAppliedToAttributes: ["href", "src"],
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => {
      const next = { ...attribs };
      if (next.href && /^https?:\/\//i.test(next.href)) {
        next.target = "_blank";
        next.rel = "noopener noreferrer";
      } else {
        delete next.href;
        delete next.target;
        delete next.rel;
      }
      return { tagName, attribs: next };
    },
    img: (tagName, attribs) => ({
      tagName,
      attribs: {
        ...attribs,
        loading: "lazy",
        referrerpolicy: "no-referrer",
      },
    }),
  },
  exclusiveFilter: (frame) =>
    frame.tag === "img" && !isHttpUrl(frame.attribs?.src),
};

const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => HTML_ESCAPES[character]);
}

function decodeHtmlEntities(value) {
  return String(value ?? "")
    .replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
      const code = Number.parseInt(hex, 16);
      return Number.isFinite(code) ? safeCodePoint(code, match) : match;
    })
    .replace(/&#(\d+);/g, (match, decimal) => {
      const code = Number.parseInt(decimal, 10);
      return Number.isFinite(code) ? safeCodePoint(code, match) : match;
    })
    .replace(/&(amp|lt|gt|quot|apos|#39);/gi, (match, name) => {
      switch (name.toLowerCase()) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        case "apos":
        case "#39":
          return "'";
        default:
          return match;
      }
    });
}

function safeCodePoint(code, fallback) {
  try {
    return String.fromCodePoint(code);
  } catch {
    return fallback;
  }
}

function stripHtml(value) {
  return decodeHtmlEntities(String(value ?? "").replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function isHttpUrl(value) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(String(value));
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeBaseUrl(value, fallback = "") {
  if (!value) {
    return fallback;
  }

  try {
    const url = new URL(String(value));
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return fallback;
    }
    if (url.username || url.password) {
      return fallback;
    }
    return `${url.origin}${url.pathname}`.replace(/\/+$/, "");
  } catch {
    return fallback;
  }
}

function normalizeConfig(raw) {
  if (!raw) {
    return null;
  }

  const instance = normalizeBaseUrl(raw.instance);
  if (!instance) {
    return null;
  }

  const statusId = String(raw.statusId || "").trim();
  if (!/^[A-Za-z0-9_-]{1,128}$/.test(statusId)) {
    return null;
  }

  return {
    instance,
    statusId,
    username: String(raw.username || "").trim().slice(0, 128),
    platform: String(raw.platform || "").toLowerCase() === "wafrn" ? "wafrn" : "mastodon",
  };
}

function timeoutSignal(milliseconds) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(milliseconds);
  }

  const controller = new AbortController();
  setTimeout(() => controller.abort(), milliseconds);
  return controller.signal;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
    signal: timeoutSignal(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }

  const contentLength = Number(response.headers.get("content-length") || 0);
  if (contentLength > 2_000_000) {
    throw new Error(`Response too large for ${url}`);
  }

  return response.json();
}

function wafrnAvatarUrl(user, environment, instance) {
  if (!user?.id) {
    return isHttpUrl(user?.avatar) ? user.avatar : "";
  }

  const cacheDomain = normalizeBaseUrl(environment?.cacheDomain, instance);
  return `${cacheDomain}/api/v2/cache/avatar/${encodeURIComponent(user.id)}?format=avif&size=medium`;
}

function sanitizeCommentHtml(html) {
  const value = String(html || "");
  if (!value) {
    return "";
  }

  try {
    return sanitizeHtml(value, SANITIZE_OPTIONS);
  } catch (error) {
    console.error("FediComment: failed to sanitize comment HTML", error);
    return escapeHtml(value);
  }
}

async function fetchWafrnThread(config) {
  const [forum, environment] = await Promise.all([
    fetchJson(`${config.instance}/api/forum/${encodeURIComponent(config.statusId)}`),
    fetchJson(`${config.instance}/api/environment`).catch(() => null),
  ]);

  if (!forum || !Array.isArray(forum.posts)) {
    throw new Error("Unexpected Wafrn forum response");
  }

  const users = new Map(
    (Array.isArray(forum.users) ? forum.users : [])
      .filter((user) => user && user.id)
      .map((user) => [user.id, user]),
  );

  const allPosts = forum.posts.filter(
    (post) =>
      post &&
      post.id &&
      String(post.id) !== config.statusId &&
      !post.isReblog,
  );

  const posts = allPosts.slice(0, MAX_COMMENTS).map((post) => {
    const user = users.get(post.userId) || {};
    const username = String(user.url || user.username || "").replace(/^@/, "");
    const displayName = stripHtml(user.name || user.displayName || username || "Unknown");
    const profileUrl = user.url
      ? `${config.instance}/blog/${user.url}`
      : `${config.instance}/blog/${encodeURIComponent(username)}`;

    return {
      id: String(post.id),
      content: sanitizeCommentHtml(
        String(post.content || post.markdownContent || "").slice(0, MAX_CONTENT_LENGTH),
      ),
      created_at: post.createdAt || post.created_at || new Date().toISOString(),
      in_reply_to_id: post.parentId ? String(post.parentId) : null,
      url: `${config.instance}/fediverse/post/${encodeURIComponent(post.id)}`,
      account: {
        id: String(user.id || post.userId || ""),
        username,
        acct: username,
        display_name: displayName,
        avatar: wafrnAvatarUrl(user, environment, config.instance),
        url: profileUrl,
      },
      favourites_count: Number(post.favouritesCount ?? post.favourites_count ?? 0) || 0,
      reblogs_count: Number(post.reblogsCount ?? post.reblogs_count ?? 0) || 0,
      emojis: Array.isArray(post.emojis) ? post.emojis : [],
    };
  });

  return {
    platform: "wafrn",
    count: allPosts.length,
    comments: buildTree(posts),
  };
}

async function fetchMastodonThread(config) {
  const data = await fetchJson(
    `${config.instance}/api/v1/statuses/${encodeURIComponent(config.statusId)}/context`,
  );

  if (!data || !Array.isArray(data.descendants)) {
    throw new Error("Unexpected Mastodon context response");
  }

  const allPosts = data.descendants.filter((status) => status && status.id);
  const posts = allPosts.slice(0, MAX_COMMENTS).map((status) => {
    const account = status.account || {};
    const avatar = isHttpUrl(account.avatar_static)
      ? account.avatar_static
      : isHttpUrl(account.avatar)
        ? account.avatar
        : "";

    return {
      id: String(status.id),
      content: sanitizeCommentHtml(String(status.content || "").slice(0, MAX_CONTENT_LENGTH)),
      created_at: status.created_at || new Date().toISOString(),
      in_reply_to_id: status.in_reply_to_id ? String(status.in_reply_to_id) : null,
      url: isHttpUrl(status.url)
        ? status.url
        : isHttpUrl(status.uri)
          ? status.uri
          : config.instance,
      account: {
        id: String(account.id || ""),
        username: String(account.username || ""),
        acct: String(account.acct || account.username || ""),
        display_name: stripHtml(account.display_name || account.username || "Unknown"),
        avatar,
        url: isHttpUrl(account.url) ? account.url : config.instance,
      },
      favourites_count: Number(status.favourites_count || 0) || 0,
      reblogs_count: Number(status.reblogs_count || 0) || 0,
      emojis: Array.isArray(status.emojis) ? status.emojis : [],
    };
  });

  return {
    platform: "mastodon",
    count: allPosts.length,
    comments: buildTree(posts),
  };
}

function buildTree(posts) {
  const nodes = new Map();
  for (const post of posts) {
    nodes.set(post.id, { ...post, replies: [] });
  }

  const roots = [];
  for (const node of nodes.values()) {
    const parent = node.in_reply_to_id ? nodes.get(node.in_reply_to_id) : null;
    if (parent && parent !== node) {
      parent.replies.push(node);
    } else {
      roots.push(node);
    }
  }

  const sorted = new Set();
  const sortReplies = (list) => {
    list.sort((a, b) => {
      const aTime = Date.parse(a.created_at) || 0;
      const bTime = Date.parse(b.created_at) || 0;
      return aTime - bTime || String(a.id).localeCompare(String(b.id));
    });

    for (const node of list) {
      if (sorted.has(node.id)) {
        continue;
      }
      sorted.add(node.id);
      sortReplies(node.replies);
    }
  };
  sortReplies(roots);

  // A malformed parent relationship can leave nodes outside every root. Keep
  // them visible instead of silently dropping part of the thread.
  const reachable = new Set();
  const markReachable = (node) => {
    if (reachable.has(node.id)) {
      return;
    }
    reachable.add(node.id);
    node.replies.forEach(markReachable);
  };
  roots.forEach(markReachable);

  for (const node of nodes.values()) {
    if (!reachable.has(node.id)) {
      roots.push(node);
      markReachable(node);
    }
  }

  return roots;
}

function formatRelativeDate(value, now = Date.now()) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const diffSeconds = Math.max(0, Math.floor((now - date.getTime()) / 1000));
  const minutes = Math.floor(diffSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (diffSeconds < 60) {
    return "just now";
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  if (days < 7) {
    return `${days}d ago`;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatCount(count) {
  const value = Number(count) || 0;
  if (value === 0) {
    return "No comments";
  }
  if (value === 1) {
    return "1 Comment";
  }
  return `${value} Comments`;
}

function renderComment(comment, depth, config, visited) {
  if (!comment || visited.has(comment.id)) {
    return "";
  }
  visited.add(comment.id);

  const account = comment.account || {};
  const displayName = escapeHtml(account.display_name || account.username || "Unknown");
  const acct = escapeHtml(account.acct || account.username || "unknown");
  const profileUrl = isHttpUrl(account.url) ? account.url : config.instance;
  const avatarUrl = isHttpUrl(account.avatar) ? account.avatar : "";
  const commentUrl = isHttpUrl(comment.url) ? comment.url : profileUrl;
  const timestamp = formatRelativeDate(comment.created_at);
  const absoluteDate = new Date(comment.created_at);
  const absoluteTitle = Number.isNaN(absoluteDate.getTime())
    ? ""
    : absoluteDate.toISOString();
  const replies = Array.isArray(comment.replies) ? comment.replies : [];
  const nextDepth = depth < MAX_DEPTH ? depth + 1 : depth;
  const repliesHtml = replies
    .map((reply) => renderComment(reply, nextDepth, config, visited))
    .join("");

  const footer = [];
  const favourites = Number(comment.favourites_count) || 0;
  const reblogs = Number(comment.reblogs_count) || 0;
  if (favourites > 0) {
    footer.push(`<span class="fedicomment-favs">★ ${favourites}</span>`);
  }
  if (reblogs > 0) {
    footer.push(`<span class="fedicomment-boosts">🔁 ${reblogs}</span>`);
  }

  const avatar = avatarUrl
    ? `<img class="fedicomment-avatar" src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(
        account.display_name || account.username || "User",
      )} avatar" loading="lazy" width="48" height="48">`
    : "";

  return `<article class="fedicomment-comment" data-depth="${Math.min(depth, MAX_DEPTH)}">
  <header class="fedicomment-header">
    ${avatar}
    <div class="fedicomment-author-info">
      <span class="fedicomment-display-name">${displayName}</span>
      <a class="fedicomment-username" href="${escapeHtml(profileUrl)}" target="_blank" rel="noopener noreferrer">@${acct}</a>
      ${
        timestamp
          ? `<a class="fedicomment-timestamp" href="${escapeHtml(commentUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(absoluteTitle)}">${escapeHtml(timestamp)}</a>`
          : ""
      }
    </div>
  </header>
  <div class="fedicomment-body">
    <div class="fedicomment-content">${comment.content || ""}</div>
    ${footer.length ? `<footer class="fedicomment-footer">${footer.join("")}</footer>` : ""}
    ${repliesHtml ? `<div class="fedicomment-replies">${repliesHtml}</div>` : ""}
  </div>
</article>`;
}

function renderFediComments(thread, config) {
  const replyUrl =
    config.platform === "wafrn"
      ? `${config.instance}/fediverse/post/${encodeURIComponent(config.statusId)}`
      : `${config.instance}/@${encodeURIComponent(config.username || "user")}/${encodeURIComponent(config.statusId)}`;

  const comments = Array.isArray(thread.comments) ? thread.comments : [];
  const visited = new Set();
  const commentsHtml = comments
    .map((comment) => renderComment(comment, 0, config, visited))
    .join("");

  const body = commentsHtml
    ? `<div class="fedicomment-comments">${commentsHtml}</div>`
    : `<p class="fedicomment-no-comments">No comments yet. Be the first to reply on the Fediverse!</p>`;

  return `<div class="fedicomment-wrapper">
  <a class="fedicomment-reply-btn" href="${escapeHtml(replyUrl)}" target="_blank" rel="noopener noreferrer">💬 Reply on Fediverse</a>
  ${body}
</div>`;
}

async function readFediCommentConfig(html) {
  if (typeof HTMLRewriter === "undefined") {
    return null;
  }

  let raw = null;
  const rewriter = new HTMLRewriter().on("#fedicomment-container", {
    element(element) {
      raw = {
        instance: element.getAttribute("data-fedicomment-instance") || "",
        statusId: element.getAttribute("data-fedicomment-status") || "",
        username: element.getAttribute("data-fedicomment-username") || "",
        platform: element.getAttribute("data-fedicomment-platform") || "mastodon",
      };
    },
  });

  await rewriter
    .transform(new Response(html, { headers: HTML_HEADERS }))
    .text();

  return normalizeConfig(raw);
}

async function injectFediComments(html, thread, config) {
  if (typeof HTMLRewriter === "undefined") {
    throw new Error("HTMLRewriter is not available");
  }

  const rendered = renderFediComments(thread, config);
  const label = formatCount(thread.count);
  const count = String(Number(thread.count) || 0);

  const rewriter = new HTMLRewriter()
    .on("#fedicomment-container", {
      element(element) {
        element.setAttribute("data-fedicomment-rendered", "edge");
        element.setInnerContent(rendered, { html: true });
      },
    })
    .on(".fedicomment-counter", {
      element(element) {
        element.setAttribute("data-fedicomment-count", count);
      },
    })
    .on(".fedicomment-counter .count", {
      element(element) {
        element.setInnerContent(label);
      },
    });

  return rewriter
    .transform(new Response(html, { headers: HTML_HEADERS }))
    .text();
}

function threadCacheKey(config) {
  const path = [
    "__fedicomment-cache",
    CACHE_VERSION,
    config.platform,
    encodeURIComponent(config.instance),
    encodeURIComponent(config.statusId),
  ].join("/");

  return new Request(`https://helltop.net/${path}`, { method: "GET" });
}

const pendingThreads = new Map();

async function getFediCommentThread(config, ctx) {
  const cacheKey = threadCacheKey(config);
  const cache = typeof caches !== "undefined" ? caches.default : null;

  if (cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) {
        return await cached.json();
      }
    } catch (error) {
      console.warn("FediComment: cache read failed", error);
    }
  }

  const pendingKey = cacheKey.url;
  if (pendingThreads.has(pendingKey)) {
    return pendingThreads.get(pendingKey);
  }

  const promise = (async () => {
    try {
      const thread =
        config.platform === "wafrn"
          ? await fetchWafrnThread(config)
          : await fetchMastodonThread(config);

      if (cache && thread) {
        const response = new Response(JSON.stringify(thread), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": `public, max-age=${THREAD_CACHE_SECONDS}`,
          },
        });
        const put = cache.put(cacheKey, response).catch((error) => {
          console.warn("FediComment: cache write failed", error);
        });
        if (ctx && typeof ctx.waitUntil === "function") {
          ctx.waitUntil(put);
        } else {
          await put;
        }
      }

      return thread;
    } catch (error) {
      console.error("FediComment: upstream fetch failed", error);
      return null;
    } finally {
      pendingThreads.delete(pendingKey);
    }
  })();

  pendingThreads.set(pendingKey, promise);
  return promise;
}

async function serveFediCommentPage(request, env, ctx) {
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

  // Keep the untouched asset response for pages without a comment mount or
  // when the upstream instance is unavailable. This preserves the asset ETag
  // and cache headers for the common case.
  const fallbackResponse = assetResponse.clone();
  const html = await assetResponse.text();

  // Avoid parsing every post page: only pages with a comment mount need the
  // HTMLRewriter pass and upstream fetch.
  if (!html.includes("fedicomment-container")) {
    return fallbackResponse;
  }

  let config;
  try {
    config = await readFediCommentConfig(html);
  } catch (error) {
    console.error("FediComment: failed to read page config", error);
    return fallbackResponse;
  }

  if (!config) {
    return fallbackResponse;
  }

  const thread = await getFediCommentThread(config, ctx);
  if (!thread) {
    return fallbackResponse;
  }

  try {
    const output = await injectFediComments(html, thread, config);
    const headers = new Headers(assetResponse.headers);
    headers.delete("content-encoding");
    headers.delete("content-length");
    headers.delete("etag");
    headers.set("cache-control", "public, max-age=60, stale-while-revalidate=300");
    headers.set("x-fedicomment", "edge");

    return new Response(output, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });
  } catch (error) {
    console.error("FediComment: edge injection failed", error);
    return fallbackResponse;
  }
}

function isFediCommentRequest(request) {
  if (request.method !== "GET") {
    return false;
  }

  const accept = request.headers.get("accept") || "";
  if (!accept.includes("text/html") && !accept.includes("*/*")) {
    return false;
  }

  const path = new URL(request.url).pathname;
  return path === "/" || path.endsWith("/") || path.endsWith(".html");
}

export {
  buildTree,
  formatCount,
  isFediCommentRequest,
  normalizeConfig,
  renderFediComments,
  sanitizeCommentHtml,
  serveFediCommentPage,
};
