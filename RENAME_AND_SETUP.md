# Instructions to Rename Folder and Setup GitHub Repo

## Step 1: Close Cursor
Close Cursor completely to release the folder lock.

## Step 2: Rename the Folder
Open Terminal and run:
```bash
cd /Users/arnavverma/Documents
mv commerceplate testshopifystore
```

## Step 3: Reopen Cursor
Open Cursor and open the workspace at: `/Users/arnavverma/Documents/testshopifystore`

## Step 4: Update Git Remote
After reopening Cursor, run these commands in Terminal:
```bash
cd /Users/arnavverma/Documents/testshopifystore

# Remove old remote
git remote remove origin

# Add your new GitHub repo (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/testshopifystore.git
```

## Step 5: Create GitHub Repo
1. Go to https://github.com/new
2. Repository name: `testshopifystore`
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (since we already have these)
5. Click "Create repository"

## Step 6: Push to GitHub
After creating the repo, run:
```bash
cd /Users/arnavverma/Documents/testshopifystore
git push -u origin main
```

## Summary of Changes Made
- ✅ Updated `package.json` name from "commerceplate" to "testshopifystore"
- ✅ Committed all current changes
- ⏳ Folder rename (requires closing Cursor)
- ⏳ Git remote update (after folder rename)
