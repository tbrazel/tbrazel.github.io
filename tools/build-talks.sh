#!/usr/bin/env bash
#
# Export every talk source in talks/_src/<name> to talks/<name>,
# sharing the theme and libraries through talks/assets.
#
# Usage: bash tools/build-talks.sh [name ...]

set -euo pipefail

cd "$(dirname "$0")/.."
# Prefer the shared talks/.venv when it exists (CI installs into its own Python).
if [[ -z "${PYTHON:-}" && -x talks/.venv/bin/python ]]; then PYTHON=talks/.venv/bin/python; fi
PYTHON="${PYTHON:-python3}"

if [[ $# -gt 0 ]]; then
  talks=("$@")
else
  talks=()
  for src in talks/_src/*/; do
    talks+=("$(basename "$src")")
  done
fi

for name in "${talks[@]}"; do
  src="talks/_src/$name"
  echo "Building $name"
  # Refresh the direct-file fallback the exporter renders from.
  "$PYTHON" "$src/tools/sync.py"
  rm -rf "talks/$name"
  "$PYTHON" "$src/tools/export_audience.py" "$src" "talks/$name" --shared talks/assets
done
