#!/usr/bin/env bash
# Build and rsync the static site to the VPS.
# Usage: DEPLOY_HOST=user@vps.example.com ./deploy/deploy.sh
set -euo pipefail

: "${DEPLOY_HOST:?set DEPLOY_HOST, e.g. DEPLOY_HOST=james@1.2.3.4 ./deploy/deploy.sh}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/james-portfolio}"

cd "$(dirname "$0")/.."
npm run build
rsync -avz --delete dist/ "${DEPLOY_HOST}:${DEPLOY_PATH}/"
echo "deployed to ${DEPLOY_HOST}:${DEPLOY_PATH}"
