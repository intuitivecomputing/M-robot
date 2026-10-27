#!/bin/bash

# Ensure script stops on errors
set -e

# The M project site and docs deploy to GitHub Pages instead
# (.github/workflows/pages.yml); this script only covers the plant research site.
echo "🚀 Starting manual deployment to Vercel for the plant research website..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI could not be found. Installing it now globally..."
    npm install -g vercel
fi

# Determine if this is a production deployment
PROD_FLAG=""
if [ "$1" == "--prod" ]; then
    PROD_FLAG="--prod"
    echo "📦 Running PRODUCTION deployment"
else
    echo "🧪 Running PREVIEW deployment (use ./deploy.sh --prod for production)"
fi

echo ""
echo "====================================="
echo "Deploying PLANT RESEARCH WEBSITE"
echo "====================================="
cd apps/plant-research-website
vercel $PROD_FLAG
cd ../..

echo ""
echo "✅ Deployment completed!"
