const ANNOUNCED_POSTS_KEY = "discord-announced-posts";
const MAX_TRACKED_POSTS = 1000;
const MAX_POST_TEXT_LENGTH = 100_000;
const MAX_IMAGES = 8;
const MESSAGE_CHUNK_SIZE = 3_900;

const HTML_ENTITIES = {
  amp: "&",
  apos: "'",
  copy: "©",
  hellip: "…",
  gt: ">",
  lt: "<",
  ldquo: "“",
  lsquo: "‘",
  mdash: "—",
  nbsp: " ",
  ndash: "–",
  quot: '"',
  rdquo: "”",
  rsquo: "’",
};

function decodeEntities(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
      const codePoint = Number.parseInt(hex, 16);
      try {
        return String.fromCodePoint(codePoint);
      } catch {
        return match;
      }
    })
    .replace(/&#(\d+);/g, (match, decimal) => {
      const codePoint = Number.parseInt(decimal, 10);
      try {
        return String.fromCodePoint(codePoint);
      } catch {
        return match;
      }
    })
    .replace(/&([a-z]+);/gi, (match, name) =>
      Object.hasOwn(HTML_ENTITIES, name.toLowerCase())
        ? HTML_ENTITIES[name.toLowerCase()]
        : match,
    );
}

function xmlTag(item, name) {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  if (!match) {
    return "";
  }
  const value = match[1].trim();
  return value.startsWith("<![CDATA[") && value.endsWith("]]>")
    ? value.slice(9, -3)
    : decodeEntities(value);
}

function safeImageUrl(value, postUrl) {
  try {
    const url = new URL(decodeEntities(value), postUrl);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function extractImages(html, postUrl) {
  const images = [];
  const seen = new Set();
  const matches = String(html || "").matchAll(/<img\b[^>]*>/gi);

  for (const [tag] of matches) {
    const source = tag.match(/\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const value = source?.[1] ?? source?.[2] ?? source?.[3] ?? "";
    const url = safeImageUrl(value, postUrl);
    if (url && !seen.has(url)) {
      seen.add(url);
      images.push(url);
      if (images.length >= MAX_IMAGES) {
        break;
      }
    }
  }

  return images;
}

function plainText(html) {
  return decodeEntities(
    String(html || "")
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(
        /<\/?(?:p|div|li|ul|ol|h[1-6]|blockquote|pre|section|article|header|footer|aside|figure|figcaption|table|thead|tbody|tr|dt|dd)\b[^>]*>/gi,
        "\n",
      )
      .replace(/<\/(?:td|th)>/gi, " ")
      .replace(/<(?:br|hr)\b[^>]*>/gi, "\n")
      .replace(/<[^>]*>/g, ""),
  )
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parsePostsFeed(xml) {
  const posts = [];
  const items = String(xml || "").matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi);

  for (const [item] of items) {
    const url = xmlTag(item, "link");
    const guid = xmlTag(item, "guid") || url;
    const title = plainText(xmlTag(item, "title"));
    const content = xmlTag(item, "description");
    let postUrl;

    try {
      postUrl = new URL(url);
    } catch {
      continue;
    }

    if (postUrl.protocol !== "https:" || !guid || !title) {
      continue;
    }

    const pubDate = xmlTag(item, "pubDate");
    const publishedAt = Number.isFinite(Date.parse(pubDate))
      ? new Date(pubDate).toISOString().slice(0, 10)
      : "";

    const fullContent = plainText(content);
    const truncated = fullContent.length > MAX_POST_TEXT_LENGTH;
    const body = fullContent.slice(0, MAX_POST_TEXT_LENGTH);

    posts.push({
      id: guid,
      url: postUrl.href,
      title: title.slice(0, 256),
      content: truncated ? `${body}\n\n[Post truncated; read the full article at the link.]` : body,
      images: extractImages(content, postUrl.href),
      publishedAt,
    });
  }

  return posts;
}

function splitMessage(text, maxLength = MESSAGE_CHUNK_SIZE) {
  const remaining = String(text || "").trim();
  if (!remaining) {
    return [""];
  }

  const chunks = [];
  let rest = remaining;
  while (rest.length > maxLength) {
    let splitAt = rest.lastIndexOf(" ", maxLength);
    if (splitAt < maxLength * 0.6) {
      splitAt = maxLength;
    }
    chunks.push(rest.slice(0, splitAt).trim());
    rest = rest.slice(splitAt).trim();
  }
  if (rest) {
    chunks.push(rest);
  }
  return chunks;
}

function validateWebhook(value) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname === "discord.com" &&
      url.pathname.startsWith("/api/webhooks/")
    )
      ? url.href
      : "";
  } catch {
    return "";
  }
}

async function addSocialImage(post, assets) {
  const response = await assets.fetch(
    new Request(post.url, { headers: { accept: "text/html" } }),
  );
  if (!response.ok) {
    console.warn(`Discord announcement preview unavailable: ${response.status}`);
    return;
  }

  const html = await response.text();
  const tags = html.matchAll(/<meta\b[^>]*>/gi);
  for (const [tag] of tags) {
    if (!/\b(?:property|name)\s*=\s*["'](?:og:image|twitter:image)["']/i.test(tag)) {
      continue;
    }

    const match = tag.match(/\bcontent\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const value = match?.[1] ?? match?.[2] ?? match?.[3] ?? "";
    const url = safeImageUrl(value, post.url);
    if (url && !post.images.includes(url)) {
      post.images.unshift(url);
    }
    return;
  }
}

async function sendPost(webhookUrl, post, state, kv, persist) {
  const chunks = splitMessage(post.content);

  for (let index = 0; index < chunks.length; index += 1) {
    const progressKey =
      `${ANNOUNCED_POSTS_KEY}/progress/${encodeURIComponent(post.id)}/${index}`;
    if (await kv.get(progressKey)) {
      continue;
    }

    const embed = {
      title: index === 0 ? post.title : `${post.title} (continued)`.slice(0, 256),
      url: post.url,
      description: chunks[index] || "This post has no text.",
    };
    const embeds = [embed];

    if (index === 0) {
      for (const imageUrl of post.images) {
        embeds.push({ image: { url: imageUrl } });
      }
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        allowed_mentions: { parse: [] },
        embeds,
      }),
    });
    if (!response.ok) {
      throw new Error(`Discord webhook returned ${response.status}`);
    }

    await kv.put(progressKey, "sent");
  }

  state.sent.push(post.id);
  state.sent = state.sent.slice(-MAX_TRACKED_POSTS);
  await persist(state);
}

async function readState(kv) {
  const raw = await kv.get(ANNOUNCED_POSTS_KEY);
  if (!raw) {
    return { sent: [], pending: {} };
  }

  try {
    const state = JSON.parse(raw);
    return {
      sent: Array.isArray(state?.sent) ? state.sent : [],
    };
  } catch {
    throw new Error("Stored Discord announcement state is invalid");
  }
}

async function announceNewBlogPosts(env) {
  if (!env.DISCORD_WEBHOOK_URL || !env.MUSIC_STATE || !env.ASSETS) {
    return;
  }

  const webhookUrl = validateWebhook(env.DISCORD_WEBHOOK_URL);
  if (!webhookUrl) {
    throw new Error("DISCORD_WEBHOOK_URL is not a valid Discord webhook");
  }

  const response = await env.ASSETS.fetch(
    new Request("https://helltop.net/posts/index.xml", {
      headers: { accept: "application/rss+xml, application/xml, text/xml" },
    }),
  );
  if (!response.ok) {
    throw new Error(`Posts feed returned ${response.status}`);
  }

  const posts = parsePostsFeed(await response.text());
  const state = await readState(env.MUSIC_STATE);
  const sent = new Set(state.sent);
  const cutoff = /^\d{4}-\d{2}-\d{2}$/.test(env.DISCORD_ANNOUNCE_AFTER || "")
    ? env.DISCORD_ANNOUNCE_AFTER
    : "";
  let changed = false;

  const persist = async (nextState) => {
    await env.MUSIC_STATE.put(ANNOUNCED_POSTS_KEY, JSON.stringify(nextState));
  };

  for (const post of posts) {
    if (sent.has(post.id)) {
      continue;
    }

    if (
      (!post.publishedAt || (cutoff && post.publishedAt < cutoff))
    ) {
      state.sent.push(post.id);
      sent.add(post.id);
      changed = true;
      continue;
    }

    if (changed) {
      state.sent = state.sent.slice(-MAX_TRACKED_POSTS);
      await persist(state);
      changed = false;
    }

    try {
      await addSocialImage(post, env.ASSETS);
    } catch (error) {
      console.warn("Discord announcement preview lookup failed:", error.message);
    }
    await sendPost(webhookUrl, post, state, env.MUSIC_STATE, persist);
    console.log(`Discord blog announcement sent: ${post.url}`);
    return;
  }

  if (changed) {
    state.sent = state.sent.slice(-MAX_TRACKED_POSTS);
    await persist(state);
  }
}

let announcementPromise = null;

function scheduleDiscordAnnouncements(env, ctx) {
  if (!announcementPromise) {
    announcementPromise = announceNewBlogPosts(env)
      .catch((error) => {
        console.error("Discord blog announcement failed:", error.message);
      })
      .finally(() => {
        announcementPromise = null;
      });
  }
  ctx.waitUntil(announcementPromise);
}

export {
  announceNewBlogPosts,
  parsePostsFeed,
  scheduleDiscordAnnouncements,
  splitMessage,
  validateWebhook,
};
