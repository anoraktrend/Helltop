/*
 * Smart typography for display text.
 *
 * Jellyfin and ListenBrainz hand us plain ASCII punctuation from a lot of
 * clients. This applies the same substitutions Apple's smart punctuation
 * does: three dots become an ellipsis, straight apostrophes become
 * typographic apostrophes, and straight double quotes become opening or
 * closing curly quotes based on their position.
 */

function isOpeningContext(before, after) {
  return (
    (!before || /[\s([{<"'“‘—–-]/.test(before)) &&
    Boolean(after) &&
    !/[\s)\]}>.,;:!?—–-]/.test(after)
  );
}

export function typographicText(value) {
  let text = String(value ?? "");
  if (!text) {
    return "";
  }

  text = text.replace(/\.{3,}/g, "…");

  text = text.replace(/'/g, (match, offset, whole) => {
    const before = whole[offset - 1] || "";
    const after = whole[offset + 1] || "";

    // Contractions, possessives, and elisions like '90s.
    if (/[A-Za-z0-9]/.test(before) || /[0-9]/.test(after)) {
      return "’";
    }

    return isOpeningContext(before, after) ? "‘" : "’";
  });

  text = text.replace(/"/g, (match, offset, whole) => {
    const before = whole[offset - 1] || "";
    const after = whole[offset + 1] || "";
    return isOpeningContext(before, after) ? "“" : "”";
  });

  return text;
}

export function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

const HTML_ENTITIES = {
  "…": "&hellip;",
  "‘": "&lsquo;",
  "’": "&rsquo;",
  "“": "&ldquo;",
  "”": "&rdquo;",
};

export function typographicHtml(value) {
  return escapeHtml(typographicText(value)).replace(
    /[…‘’“”]/g,
    (character) => HTML_ENTITIES[character],
  );
}
