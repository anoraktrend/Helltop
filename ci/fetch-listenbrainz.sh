#!/usr/bin/env bash
set -euo pipefail

# Refresh data/listenbrainz/*.json from the public ListenBrainz API.
# Used by build.sh and safe to run manually.

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "${script_dir}/fetch-listenbrainz.mjs" "$@"
