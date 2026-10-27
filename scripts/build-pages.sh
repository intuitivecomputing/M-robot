#!/usr/bin/env bash
# Builds the project site and the docs into one folder for GitHub Pages:
#   _site/       project site, served at https://intuitivecomputing.github.io/M-robot/
#   _site/docs/  docs site,    served at https://intuitivecomputing.github.io/M-robot/docs/
# Run by .github/workflows/pages.yml on every push to main. Run it locally
# (npm run build:pages) to check the output before pushing.
set -euo pipefail

BASE="/M-robot/"
ORIGIN="https://intuitivecomputing.github.io"
OUT="_site"

cd "$(dirname "$0")/.."
rm -rf "$OUT"

npm run build -w M-website -- --base="$BASE"
NITRO_PRESET=static NUXT_APP_BASE_URL="${BASE}docs/" NUXT_SITE_URL="${ORIGIN}${BASE}docs" \
    npm run generate -w M-website-docs

cp -R apps/M-website/dist "$OUT"
cp -R apps/M-website-docs/.output/public "$OUT/docs"

# The project site is a single-page app and GitHub Pages has no rewrites, so
# each route gets its own copy of the page. 404.html catches everything else;
# the app reads the URL, so old aliases such as /bom still land on the page.
cp "$OUT/index.html" "$OUT/build-guide.html"
cp "$OUT/index.html" "$OUT/bill-of-materials.html"
cp "$OUT/index.html" "$OUT/404.html"

echo "GitHub Pages site written to $OUT/"
