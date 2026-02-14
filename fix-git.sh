#!/bin/bash
cd "c:/เอกสาร/CE385" || exit 1

# Set git editor to true
export GIT_EDITOR="true"

# Reset to remote
echo "Fetching from remote..."
git fetch origin main

echo ""
echo "Resetting to origin/main..."
git reset --hard origin/main

echo ""
echo "Checking status..."
git status

echo ""
echo "Done!"
