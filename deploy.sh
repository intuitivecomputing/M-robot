#!/bin/bash

# Ensure script stops on errors
set -e

echo "🚀 Starting manual deployment to Vercel for both apps..."

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
echo "1️⃣ Deploying WEB app"
echo "====================================="
cd apps/M-website
vercel $PROD_FLAG
cd ../..

echo ""
echo "====================================="
echo "2️⃣ Deploying DOCS app"
echo "====================================="
cd apps/M-website-docs
vercel $PROD_FLAG
cd ../..

echo ""
echo "====================================="
echo "3️⃣ Deploying PLANT RESEARCH WEBSITE"
echo "====================================="
cd apps/plant-research-website
vercel $PROD_FLAG
cd ../..

echo ""
echo "✅ All deployments completed!"
