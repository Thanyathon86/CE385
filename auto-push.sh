#!/bin/bash
cd "c:\เอกสาร\CE385" || exit 1

# Configure git to not use editor
export GIT_EDITOR=true
git config core.editor true

# Fetch latest
git fetch origin main

# Reset to origin/main
git reset --hard origin/main

# Clean untracked files
git clean -fd

# Get current file list
echo "Files in local repo:"
ls -la

# Check status
git status

echo "Done!"
