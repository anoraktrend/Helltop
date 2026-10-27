/* Live Jellyfin now-playing card for the Music page.
 *
 * The static HTML still contains the ListenBrainz "Last Played" card as a
 * fallback. This script polls the same-origin Worker proxy and replaces that
 * card while something is actually playing. The Jellyfin API key never reaches
 * the browser.
 */

(() => {
  const mount = document.getElementById("jellyfin-now-playing");
  if (!mount) {
    return;
  }

  const POLL_MS = 15000;
  let timer = null;
  // The Worker may have injected a server-rendered card already. If so, start
  // in the "live" state so a later stop/unpause correctly reveals the static
  // ListenBrainz fallback.
  let showingLive = !mount.hidden;

  const listenBrainzCard = () =>
    document.querySelector(".lb-now-playing:not(#jellyfin-now-playing)");

  function setLive(live) {
    if (live === showingLive) {
      return;
    }
    showingLive = live;

    const fallback = listenBrainzCard();
    if (fallback) {
      fallback.hidden = live;
    }
    mount.hidden = !live;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text != null) {
      node.textContent = text;
    }
    return node;
  }

  function clock(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  function playingIndicator() {
    const indicator = element("span", "lb-playing-indicator");
    for (let i = 0; i < 3; i += 1) {
      indicator.append(element("span", "lb-bar"));
    }
    return indicator;
  }

  function render(data) {
    if (!data || !data.playing) {
      mount.replaceChildren();
      setLive(false);
      return;
    }

    const art = element("div", "lb-np-art");
    if (data.artUrl) {
      const image = element("img");
      image.src = data.artUrl;
      image.alt = data.album || data.title || "";
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove());
      art.append(image);
      if (!data.paused) {
        art.append(playingIndicator());
      }
    }

    const info = element("div", "lb-np-info");
    info.append(
      element(
        "span",
        "lb-np-label",
        data.paused ? "Paused on Jellyfin" : "Now Playing on Jellyfin",
      ),
      element("span", "lb-np-track", data.title),
    );

    if (data.artist) {
      info.append(element("span", "lb-np-artist", data.artist));
    }
    if (data.album) {
      info.append(element("span", "lb-np-album", data.album));
    }

    const details = [];
    if (data.durationSeconds) {
      details.push(
        `${clock(data.positionSeconds)} / ${clock(data.durationSeconds)}`,
      );
    }
    if (data.device) {
      details.push(data.device);
    }
    if (details.length) {
      info.append(element("time", "lb-np-time", details.join(" · ")));
    }

    const card = element("div", "lb-np-card");
    if (data.artUrl) {
      card.append(art);
    }
    card.append(info);
    mount.replaceChildren(card);
    setLive(true);
  }

  async function refresh() {
    try {
      const response = await fetch("/api/now-playing", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (!response.ok) {
        return;
      }
      render(await response.json());
    } catch {
      // Keep the static ListenBrainz fallback visible on network errors.
    }
  }

  function start() {
    stop();
    timer = window.setInterval(refresh, POLL_MS);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  refresh();
  start();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      refresh();
      start();
    }
  });
})();
