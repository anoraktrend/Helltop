import test from "node:test";
import assert from "node:assert/strict";
import {
  injectFavorites,
  injectListenBrainzDashboard,
  injectNowPlaying,
} from "./index.js";

/*
 * Snapshot HTML is external data (Jellyfin/ListenBrainz metadata). Passing it
 * as the string replacement to String.replace would let `$&`, "$'", "$`" or
 * "$$" sequences in track/album names splice parts of the page into itself.
 * Injectors must treat the snapshot as opaque: use a function replacement.
 */
test("injectFavorites treats $ sequences in snapshot HTML as literal text", () => {
  const page =
    '<html><body><div class="lb-favorites" id="jellyfin-favorites" hidden></div><p>Page tail</p></body></html>';
  const snapshotHtml =
    '<section class="lb-section lb-favorites" id="jellyfin-favorites">Track name with $& and "$\'" inside</section>';

  const output = injectFavorites(page, { html: snapshotHtml });

  assert.ok(output.includes('with $& and "$\'" inside'));
  assert.equal(output.split("<p>Page tail</p>").length, 2);
  assert.ok(!output.includes('id="jellyfin-favorites" hidden'));
});

test("injectNowPlaying treats $ sequences in the card HTML as literal text", () => {
  const page =
    '<html><body><div class="lb-now-playing" id="jellyfin-now-playing" hidden></div><p>Page tail</p></body></html>';
  const snapshot = {
    playing: true,
    title: "A $& B",
    artist: "Some Artist",
    album: "",
    artUrl: null,
  };

  const output = injectNowPlaying(page, snapshot);

  // escapeHtml turns the & into &amp;, but the leading `$&` of "$&amp;" would
  // still re-expand to the matched mount div under a string replacement.
  assert.ok(output.includes("A $&amp; B"));
  assert.ok(!output.includes('id="jellyfin-now-playing" hidden'));
  assert.equal(output.split("<p>Page tail</p>").length, 2);
});

test("injectListenBrainzDashboard treats $ sequences in the dashboard HTML as literal text", () => {
  const page =
    "<html><body><listenbrainz-dashboard></listenbrainz-dashboard><p>Page tail</p></body></html>";
  const dashboard =
    '<div class="lb-dashboard">Top album "$&" by "$\'" artist</div>';

  const output = injectListenBrainzDashboard(page, dashboard);

  assert.ok(output.includes('Top album "$&" by "$\'" artist'));
  assert.equal(output.split("<p>Page tail</p>").length, 2);
});
