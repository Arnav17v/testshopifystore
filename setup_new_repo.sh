#!/bin/bash

# Script to rename folder and setup new GitHub repo
# Run this AFTER closing Cursor

set -e

echo "🚀 Setting up testshopifystore repository..."

# Navigate to Documents
cd /Users/arnavverma/Documents

# Rename folder
if [ -d "commerceplate" ]; then
    echo "📁 Renaming folder from commerceplate to testshopifystore..."
    mv commerceplate testshopifystore
    echo "✅ Folder renamed successfully!"
else
    echo "⚠️  Folder commerceplate not found. It may already be renamed."
fi

# Navigate to new folder
cd testshopifystore

# Remove old remote
echo "🔗 Removing old git remote..."
git remote remove origin 2>/dev/null || echo "No origin remote found (this is okay)"

# Prompt for GitHub username
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Add new remote
echo "🔗 Adding new git remote..."
git remote add origin https://github.com/${GITHUB_USERNAME}/testshopifystore.git

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: testshopifystore"
echo "3. Choose Public or Private"
echo "4. DO NOT initialize with README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo "6. Then run: git push -u origin main"
echo ""
