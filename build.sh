#!/usr/bin/env bash
set -euo pipefail

# Resolve the repository root so the script works from any working directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Hugo version used by this site. The vendored re-terminal theme uses
# .Site.Language.Locale, which requires a newer Hugo than the one currently
# preinstalled in Cloudflare's Workers Builds image (0.147.7).
#
# Override with HELLTOP_HUGO_VERSION if needed.
HUGO_VERSION="${HELLTOP_HUGO_VERSION:-0.168.0}"

hugo_ready=false
if command -v hugo >/dev/null 2>&1; then
  installed="$(hugo version 2>/dev/null || true)"
  if [[ "$installed" == *"v${HUGO_VERSION}"* && "$installed" == *"+extended"* ]]; then
    hugo_ready=true
  fi
fi

if [[ "$hugo_ready" == false ]]; then
  if [[ "$(uname -s)" != "Linux" ]]; then
    echo "Hugo extended v${HUGO_VERSION} is required. Install it manually on $(uname -s), or set HELLTOP_HUGO_VERSION to an installed version." >&2
    exit 1
  fi

  case "$(uname -m)" in
    x86_64|amd64) arch="amd64" ;;
    aarch64|arm64) arch="arm64" ;;
    *)
      echo "Unsupported architecture: $(uname -m)" >&2
      exit 1
      ;;
  esac

  tmp_dir="$(mktemp -d)"
  trap 'rm -rf "$tmp_dir"' EXIT

  echo "Installing Hugo extended v${HUGO_VERSION} (linux-${arch})..."
  curl -fsSL \
    "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${arch}.tar.gz" \
    -o "${tmp_dir}/hugo.tar.gz"
  mkdir -p "${tmp_dir}/hugo"
  tar -xzf "${tmp_dir}/hugo.tar.gz" -C "${tmp_dir}/hugo" hugo
  export PATH="${tmp_dir}/hugo:${PATH}"
fi

echo "Using $(hugo version)"

# Snapshot the ListenBrainz dashboard data before Hugo reads data/.
# Missing node or a ListenBrainz outage must not break the deploy: the fetch
# script keeps the last committed snapshot when a request fails.
if [[ "${HELLTOP_SKIP_LISTENBRAINZ:-0}" != "1" ]]; then
  if command -v node >/dev/null 2>&1; then
    echo "Refreshing ListenBrainz data..."
    node "${SCRIPT_DIR}/ci/fetch-listenbrainz.mjs" || \
      echo "warning: ListenBrainz refresh failed; using existing data" >&2
  else
    echo "warning: node not found; using existing ListenBrainz data" >&2
  fi
fi

hugo --gc --minify --cleanDestinationDir "$@"
