# FediComments: pull Wafrn image attachments

## Intent

Comments with images on Wafrn currently render without those images on the blog.
A live forum response for the Halloween post confirms it: the reply text says
"OK so images do not get passed through."

## What is wrong

Wafrn's `/api/forum/:id` response puts media in a top-level `medias` array,
linked to posts by `postId`:

```json
"medias": [
  {
    "url": "https://new.media.wafrn.net/uploads/....webp",
    "mediaType": "image/webp",
    "description": "...",
    "postId": "01a195dc-...",
    "mediaOrder": 0
  }
]
```

The edge renderer and the client-side fallback both look for media on each post
(`media_attachments`, `mediaAttachments`, `attachments`, `media`), so Wafrn
media never reaches `normalizeMediaAttachments`.

## Goals

- Show image attachments from Wafrn replies in both the edge-rendered thread and
  the client-side fallback.
- Keep the existing image filtering and sanitizing behaviour unchanged.
- Cover the mapping with a unit test.

## Non-goals

- Video, audio, or other non-image attachments.
- Pulling media from the root Fediverse post; FediComments only renders replies.
- Changing Mastodon handling, which already works via `media_attachments`.

## Approach

Group the top-level Wafrn `medias` by `postId`, sort each group by `mediaOrder`,
and pass that list to the existing `normalizeMediaAttachments` for each reply.
Do the same in `mapWafrnPosts` for the client widget. Extract the grouping into a
small exported helper in `worker/fedicomments.js` so it can be unit tested.

The alternatives (proxying Wafrn media, or scraping image URLs out of post HTML)
add infrastructure or miss attachments that are not inline in the content, so
they do not fit.

## Design

- `worker/fedicomments.js`: add `groupWafrnMedia(medias)` returning a
  `Map<postId, media[]>`; use it in `fetchWafrnThread` when building each post.
- `themes/re-terminal/static/js/fedicomment.js`: build the same map from
  `data.medias` inside `mapWafrnPosts`.
- `worker/fedicomments.test.js`: assert that Wafrn-shaped media is grouped and
  normalised into a renderable image attachment.
