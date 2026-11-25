# FediComments Wafrn Media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show images attached to Wafrn replies in FediComments, in both the edge-rendered thread and the client-side fallback.

**Architecture:** Wafrn's `/api/forum/:id` response returns media in a top-level `medias` array linked by `postId`. Group that array by post, sort each group by `mediaOrder`, and pass it through the existing `normalizeMediaAttachments` filter. The same grouping is added to the browser widget because it cannot import the Worker module.

**Tech Stack:** Cloudflare Worker (ES modules), vanilla browser JavaScript, Node's built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-25-fedicomments-wafrn-media-design.md`

## Global Constraints

- No new dependencies.
- Images only; the existing `normalizeMediaAttachments` filter decides what is renderable.
- Keep the edge and client paths behaviourally identical.
- The working tree already contains the uncommitted "media attachments" feature in these files; extend it, do not revert it.
- Do not touch unrelated working-tree changes (`README.md`, `custom.css`, `worker/index.js`, `wrangler.jsonc`, `worker/discord.js`).

## Review Focus

- A Wafrn response with no `medias` key: no crash and no attachments.
- A media entry without `postId`: ignored rather than attached to the wrong comment.
- Multiple media with missing or equal `mediaOrder`: deterministic order, no dropped entries.
- Non-image media (`video/mp4`): filtered out by the existing normalizer.
- Client fallback: the same Wafrn media shape renders when the Worker is not in front.

---

### Task 1: Edge Wafrn media mapping

**Files:**
- Modify: `worker/fedicomments.js` (add `groupWafrnMedia`, use it in `fetchWafrnThread`, export it)
- Test: `worker/fedicomments.test.js`

**Interfaces:**
- Produces: `groupWafrnMedia(medias: unknown): Map<string, object[]>` — groups media by non-empty `postId`, sorts each group by numeric `mediaOrder` ascending (missing order treated as 0), ignores non-object entries and entries without a `postId`.

- [ ] **Step 1: Write the failing test**

Add to `worker/fedicomments.test.js`, and import `groupWafrnMedia`:

```js
test("groups Wafrn media by post id and keeps media order", () => {
  const grouped = groupWafrnMedia([
    { postId: "b", mediaOrder: 1, url: "https://cdn.example/b1.webp", mediaType: "image/webp" },
    { postId: "a", mediaOrder: 1, url: "https://cdn.example/a1.webp", mediaType: "image/webp" },
    { postId: "a", mediaOrder: 0, url: "https://cdn.example/a0.webp", mediaType: "image/webp" },
    { postId: "c", url: "https://cdn.example/c-first.webp", mediaType: "image/webp" },
    { postId: "c", mediaOrder: 0, url: "https://cdn.example/c-second.webp", mediaType: "image/webp" },
    { url: "https://cdn.example/orphan.webp", mediaType: "image/webp" },
  ]);

  assert.deepEqual(
    grouped.get("a").map((media) => media.url),
    ["https://cdn.example/a0.webp", "https://cdn.example/a1.webp"],
  );
  assert.deepEqual(
    grouped.get("b").map((media) => media.url),
    ["https://cdn.example/b1.webp"],
  );
  assert.deepEqual(
    grouped.get("c").map((media) => media.url),
    ["https://cdn.example/c-first.webp", "https://cdn.example/c-second.webp"],
  );
  assert.equal(grouped.has(""), false);
  assert.equal(grouped.size, 3);
  assert.equal(groupWafrnMedia(undefined).size, 0);
});

test("normalizes grouped Wafrn media into renderable attachments", () => {
  const grouped = groupWafrnMedia([
    {
      postId: "post",
      mediaOrder: 0,
      url: "https://cdn.example/photo.webp",
      mediaType: "image/webp",
      description: "A photo",
    },
    { postId: "post", mediaOrder: 1, url: "https://cdn.example/movie.mp4", mediaType: "video/mp4" },
  ]);

  assert.deepEqual(normalizeMediaAttachments(grouped.get("post")), [
    {
      url: "https://cdn.example/photo.webp",
      previewUrl: "https://cdn.example/photo.webp",
      description: "A photo",
    },
  ]);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test worker/fedicomments.test.js`
Expected: FAIL because `groupWafrnMedia` is not exported.

- [ ] **Step 3: Implement `groupWafrnMedia` in `worker/fedicomments.js`**

Place it near `normalizeMediaAttachments`:

```js
function groupWafrnMedia(medias) {
  const grouped = new Map();
  if (!Array.isArray(medias)) {
    return grouped;
  }

  for (const media of medias) {
    if (!media || typeof media !== "object") {
      continue;
    }
    const postId = String(media.postId || "").trim();
    if (!postId) {
      continue;
    }
    if (!grouped.has(postId)) {
      grouped.set(postId, []);
    }
    grouped.get(postId).push(media);
  }

  for (const list of grouped.values()) {
    list.sort((a, b) => (Number(a.mediaOrder) || 0) - (Number(b.mediaOrder) || 0));
  }

  return grouped;
}
```

Then in `fetchWafrnThread`, build `const mediaByPost = groupWafrnMedia(forum.medias);` before the `posts` mapping and use:

```js
mediaAttachments: normalizeMediaAttachments(
  mediaByPost.get(String(post.id)) ||
    post.media_attachments ||
    post.mediaAttachments ||
    post.attachments ||
    post.media,
),
```

Add `groupWafrnMedia` to the `export { ... }` block.

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test worker/fedicomments.test.js`
Expected: PASS, including the two existing tests.

- [ ] **Step 5: Commit**

```bash
git add worker/fedicomments.js worker/fedicomments.test.js
git commit -m "fix: pull Wafrn media into FediComments"
```

---

### Task 2: Client-side Wafrn media mapping

**Files:**
- Modify: `themes/re-terminal/static/js/fedicomment.js`

**Interfaces:**
- Consumes: the Wafrn `data.medias` shape from `/api/forum/:id` (same shape as Task 1).
- Produces: `FediComment#groupWafrnMedia(medias)` returning `Map<string, object[]>` with the same grouping and ordering rules as Task 1.

- [ ] **Step 1: Add `groupWafrnMedia` to the `FediComment` class**

Place it next to `normalizeMediaAttachments`:

```js
groupWafrnMedia(medias) {
  const grouped = new Map();
  if (!Array.isArray(medias)) {
    return grouped;
  }

  medias.forEach(media => {
    if (!media || typeof media !== 'object') {
      return;
    }
    const postId = String(media.postId || '').trim();
    if (!postId) {
      return;
    }
    if (!grouped.has(postId)) {
      grouped.set(postId, []);
    }
    grouped.get(postId).push(media);
  });

  grouped.forEach(list => {
    list.sort((a, b) => (Number(a.mediaOrder) || 0) - (Number(b.mediaOrder) || 0));
  });

  return grouped;
}
```

- [ ] **Step 2: Use the grouping in `mapWafrnPosts`**

At the start of `mapWafrnPosts`, after the `users` map:

```js
const mediaByPost = this.groupWafrnMedia(data.medias);
```

Then replace the existing `mediaAttachments` expression with:

```js
mediaAttachments: this.normalizeMediaAttachments(
  mediaByPost.get(String(post.id)) ||
    post.media_attachments ||
    post.mediaAttachments ||
    post.attachments ||
    post.media
),
```

- [ ] **Step 3: Verify the browser bundle parses and the worker tests still pass**

Run: `node --check themes/re-terminal/static/js/fedicomment.js`
Expected: no output, exit code 0.

Run: `node --test worker/fedicomments.test.js`
Expected: PASS.

- [ ] **Step 4: Build the site to confirm the asset is copied**

Run: `npm run build`
Expected: Hugo build completes and `public/js/fedicomment.js` contains `groupWafrnMedia`.

- [ ] **Step 5: Commit**

```bash
git add themes/re-terminal/static/js/fedicomment.js
git commit -m "fix: pull Wafrn media in client FediComments fallback"
```
