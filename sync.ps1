$env:GIT_EDITOR = "true"
$repoPath = "c:\เอกสาร\CE385"

Set-Location $repoPath

Write-Host "Configuring git..."
git config core.editor "true"

Write-Host "Fetching from remote..."
git fetch origin main --dry-run

Write-Host "Current status:"
git status --short

Write-Host "Done!"
