import test from "node:test";
import assert from "node:assert/strict";
import {
  groupWafrnMedia,
  normalizeMediaAttachments,
  renderFediComments,
} from "./fedicomments.js";

test("normalizes image attachments and rejects unsafe or non-image URLs", () => {
  assert.deepEqual(
    normalizeMediaAttachments([
      {
        type: "image",
        url: "https://cdn.example/photo",
        previewUrl: "https://cdn.example/preview",
        description: "A photo",
      },
      { type: "video", url: "https://cdn.example/movie.mp4" },
      { type: "image", url: "javascript:alert(1)" },
      { url: "https://cdn.example/photo.jpg" },
    ]),
    [
      {
        url: "https://cdn.example/photo",
        previewUrl: "https://cdn.example/preview",
        description: "A photo",
      },
      {
        url: "https://cdn.example/photo.jpg",
        previewUrl: "https://cdn.example/photo.jpg",
        description: "",
      },
    ],
  );
});

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

test("renders attachment image and escapes its alternative text", () => {
  const html = renderFediComments(
    {
      count: 1,
      comments: [
        {
          id: "comment",
          content: "",
          mediaAttachments: [
            {
              url: "https://cdn.example/photo",
              previewUrl: "https://cdn.example/preview",
              description: 'Photo " & <caption>',
            },
          ],
          account: {},
        },
      ],
    },
    {
      instance: "https://example.social",
      statusId: "post",
      platform: "mastodon",
      username: "user",
    },
  );

  assert.match(html, /class="fedicomment-media-attachments"/);
  assert.match(html, /src="https:\/\/cdn\.example\/preview"/);
  assert.match(html, /alt="Photo &quot; &amp; &lt;caption&gt;"/);
});
