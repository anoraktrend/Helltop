import test from "node:test";
import assert from "node:assert/strict";
import { pickJellyfinUser, favoriteArtUrl, renderFavorites } from "./favorites.js";

const ALBUM = {
  Id: "f3d15eb0d1f76a3b12c37556e4c24af3",
  Name: "Mentally sILLy",
  AlbumArtist: "FEM&M",
  ProductionYear: 2026,
  ImageTags: { Primary: "8ac85182b8e4519fac1505f7228bd5d8" },
};
const TRACK = {
  Id: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  Name: "Head Like a Hole",
  Album: "Pretty Hate Machine",
  AlbumArtist: "Nine Inch Nails",
  AlbumId: "b7994b329ee0b896677209e7822e11de",
  AlbumPrimaryImageTag: "a7a48a0b5dbcb374eaa7a64c50c77b5e",
};

test("pickJellyfinUser matches by name case-insensitively and returns null when missing", () => {
  const users = [
    { Name: "angstrom", Id: "c24e9c00ae1c47f5b369942471cac2a9" },
    { Name: "lucy", Id: "29483b7aa7a945e8ac03f6b4cc0f6218" },
  ];
  assert.equal(pickJellyfinUser(users, "LUCY")?.Id, "29483b7aa7a945e8ac03f6b4cc0f6218");
  assert.equal(pickJellyfinUser(users, "nobody"), null);
  assert.equal(pickJellyfinUser([], "lucy"), null);
});

test("favoriteArtUrl prefers the album image for albums and inherited album art for tracks", () => {
  assert.equal(
    favoriteArtUrl(ALBUM, 250),
    "/api/art?id=f3d15eb0d1f76a3b12c37556e4c24af3&tag=8ac85182b8e4519fac1505f7228bd5d8&size=250",
  );
  assert.equal(
    favoriteArtUrl(TRACK, 250),
    "/api/art?id=b7994b329ee0b896677209e7822e11de&tag=a7a48a0b5dbcb374eaa7a64c50c77b5e&size=250",
  );
  assert.equal(
    favoriteArtUrl({ AlbumId: "b7994b329ee0b896677209e7822e11de" }, 250),
    "/api/art?id=b7994b329ee0b896677209e7822e11de&size=250",
  );
  assert.equal(favoriteArtUrl({}, 250), "");
});

test("renderFavorites renders nothing when there is nothing to show", () => {
  assert.equal(renderFavorites({ albums: [], tracks: [] }), "");
});

test("renderFavorites escapes names and includes albums and tracks", () => {
  const html = renderFavorites({
    albums: [ALBUM],
    tracks: [TRACK, { ...TRACK, Name: '<script>alert("x")</script>' }],
  });
  assert.match(html, /From the Library/);
  assert.match(html, /♥ Hearted Albums/);
  assert.match(html, /♥ Hearted Tracks/);
  assert.match(html, /Mentally sILLy/);
  assert.match(html, /FEM&amp;M/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /Head Like a Hole/);
  assert.match(html, /Nine Inch Nails/);
  assert.match(html, /8ac85182b8e4519fac1505f7228bd5d8/);
});

test("renderFavorites omits the album grid when only tracks exist", () => {
  const html = renderFavorites({ albums: [], tracks: [TRACK] });
  assert.match(html, /From the Library/);
  assert.doesNotMatch(html, /lb-fav-albums/);
  assert.match(html, /lb-list/);
});
