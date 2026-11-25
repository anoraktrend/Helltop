import test from "node:test";
import assert from "node:assert/strict";
import {
  announceNewBlogPosts,
  parsePostsFeed,
  splitMessage,
  validateWebhook,
} from "./discord.js";

test("parses published RSS items into Discord-ready text and image URLs", () => {
  const [post] = parsePostsFeed(`<?xml version="1.0"?>
    <rss><channel><item>
      <title>New &amp; Useful</title>
      <link>https://helltop.net/posts/example/</link>
      <guid>https://helltop.net/posts/example/</guid>
      <pubDate>Sun, 01 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;Hello &amp;lt;world&amp;gt;.&lt;/p&gt;&lt;img src="/images/photo.png" alt="Photo" /&gt;</description>
    </item></channel></rss>`);

  assert.equal(post.title, "New & Useful");
  assert.equal(post.url, "https://helltop.net/posts/example/");
  assert.equal(post.publishedAt, "2026-11-01");
  assert.equal(post.content, "Hello <world>.");
  assert.deepEqual(post.images, ["https://helltop.net/images/photo.png"]);
});

test("keeps inline punctuation attached when converting HTML to text", () => {
  const [post] = parsePostsFeed(`<?xml version="1.0"?>
    <rss><channel><item>
      <title>Inline formatting</title>
      <link>https://helltop.net/posts/inline/</link>
      <guid>https://helltop.net/posts/inline/</guid>
      <pubDate>Sun, 01 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;Hello &lt;strong&gt;world&lt;/strong&gt;. &lt;a href="https://example.com"&gt;Read more&lt;/a&gt;!&lt;/p&gt;</description>
    </item></channel></rss>`);

  assert.equal(post.content, "Hello world. Read more!");
});

test("splits long post content without dropping text", () => {
  const content = `${"one ".repeat(1100)}done`;
  const chunks = splitMessage(content, 1000);
  assert.ok(chunks.length > 1);
  assert.ok(chunks.every((chunk) => chunk.length <= 1000));
  assert.equal(chunks.join(" "), content.trim());
});

test("accepts only HTTPS Discord webhook URLs", () => {
  assert.equal(
    validateWebhook("https://discord.com/api/webhooks/123/token"),
    "https://discord.com/api/webhooks/123/token",
  );
  assert.equal(validateWebhook("http://discord.com/api/webhooks/123/token"), "");
  assert.equal(validateWebhook("https://example.com/api/webhooks/123/token"), "");
});

test("announces new posts once, with available text and cover images", async (t) => {
  const feed = `<?xml version="1.0"?><rss><channel>
    <item><title>Existing article</title>
      <link>https://helltop.net/posts/existing/</link>
      <guid>existing</guid><pubDate>Sat, 31 Oct 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;Old article&lt;/p&gt;</description>
    </item>
    <item><title>New article</title>
      <link>https://helltop.net/posts/new/</link>
      <guid>new</guid><pubDate>Sun, 01 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;New content&lt;/p&gt;</description>
    </item>
  </channel></rss>`;
  const values = new Map();
  const webhookMessages = [];
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  globalThis.fetch = async (url, options) => {
    webhookMessages.push(JSON.parse(options.body));
    return new Response(null, { status: 204 });
  };

  const env = {
    DISCORD_WEBHOOK_URL: "https://discord.com/api/webhooks/123/token",
    DISCORD_ANNOUNCE_AFTER: "2026-11-01",
    MUSIC_STATE: {
      get: async (key) => values.get(key) || null,
      put: async (key, value) => values.set(key, value),
    },
    ASSETS: {
      fetch: async (request) =>
        new URL(request.url).pathname.endsWith(".xml")
          ? new Response(feed, { status: 200 })
          : new Response(
              '<meta property="og:image" content="https://helltop.net/covers/new.jpg">',
              { status: 200 },
            ),
    },
  };

  await announceNewBlogPosts(env);
  await announceNewBlogPosts(env);

  assert.equal(webhookMessages.length, 1);
  assert.equal(webhookMessages[0].embeds[0].title, "New article");
  assert.equal(webhookMessages[0].embeds[0].description, "New content");
  assert.equal(
    webhookMessages[0].embeds[1].image.url,
    "https://helltop.net/covers/new.jpg",
  );
  assert.deepEqual(
    JSON.parse(values.get("discord-announced-posts")).sent,
    ["existing", "new"],
  );
});

test("announces only one new post per run", async (t) => {
  const feed = `<?xml version="1.0"?><rss><channel>
    <item><title>First new article</title>
      <link>https://helltop.net/posts/first/</link>
      <guid>first</guid><pubDate>Sun, 01 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;First&lt;/p&gt;</description>
    </item>
    <item><title>Second new article</title>
      <link>https://helltop.net/posts/second/</link>
      <guid>second</guid><pubDate>Mon, 02 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;Second&lt;/p&gt;</description>
    </item>
  </channel></rss>`;
  const values = new Map();
  const webhookMessages = [];
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  globalThis.fetch = async (url, options) => {
    webhookMessages.push(JSON.parse(options.body));
    return new Response(null, { status: 204 });
  };

  const env = {
    DISCORD_WEBHOOK_URL: "https://discord.com/api/webhooks/123/token",
    DISCORD_ANNOUNCE_AFTER: "2026-11-01",
    MUSIC_STATE: {
      get: async (key) => values.get(key) || null,
      put: async (key, value) => values.set(key, value),
    },
    ASSETS: {
      fetch: async (request) =>
        new URL(request.url).pathname.endsWith(".xml")
          ? new Response(feed, { status: 200 })
          : new Response("", { status: 404 }),
    },
  };

  await announceNewBlogPosts(env);
  assert.equal(webhookMessages.length, 1);
  assert.equal(webhookMessages[0].embeds[0].title, "First new article");

  await announceNewBlogPosts(env);
  assert.equal(webhookMessages.length, 2);
  assert.equal(webhookMessages[1].embeds[0].title, "Second new article");

  await announceNewBlogPosts(env);
  assert.equal(webhookMessages.length, 2);
});

test("does not record a post when the webhook fails", async (t) => {
  const feed = `<?xml version="1.0"?><rss><channel>
    <item><title>Flaky article</title>
      <link>https://helltop.net/posts/flaky/</link>
      <guid>flaky</guid><pubDate>Sun, 01 Nov 2026 00:00:00 +0000</pubDate>
      <description>&lt;p&gt;Content&lt;/p&gt;</description>
    </item>
  </channel></rss>`;
  const values = new Map();
  const webhookMessages = [];
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  let fail = true;
  globalThis.fetch = async (url, options) => {
    if (fail) {
      return new Response("nope", { status: 500 });
    }
    webhookMessages.push(JSON.parse(options.body));
    return new Response(null, { status: 204 });
  };

  const env = {
    DISCORD_WEBHOOK_URL: "https://discord.com/api/webhooks/123/token",
    DISCORD_ANNOUNCE_AFTER: "2026-11-01",
    MUSIC_STATE: {
      get: async (key) => values.get(key) || null,
      put: async (key, value) => values.set(key, value),
    },
    ASSETS: {
      fetch: async (request) =>
        new URL(request.url).pathname.endsWith(".xml")
          ? new Response(feed, { status: 200 })
          : new Response("", { status: 404 }),
    },
  };

  await assert.rejects(
    announceNewBlogPosts(env),
    /Discord webhook returned 500/,
  );
  assert.equal(values.has("discord-announced-posts"), false);

  fail = false;
  await announceNewBlogPosts(env);
  assert.equal(webhookMessages.length, 1);
  assert.equal(webhookMessages[0].embeds[0].title, "Flaky article");
  assert.deepEqual(
    JSON.parse(values.get("discord-announced-posts")).sent,
    ["flaky"],
  );
});
