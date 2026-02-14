# Git push script
cd "c:\เอกสาร\CE385"

# Reset and pull
git fetch origin
git reset --hard origin/main

# Check status
git log --oneline -n 5
