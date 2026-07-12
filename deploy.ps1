Write-Host ">>> [1/5] Pull latest code..."
git pull origin main

Write-Host ">>> [2/5] Install dependencies..."
npm ci

Write-Host ">>> [3/5] Build VuePress..."
npm run docs:build

Write-Host ">>> [4/5] Restart Nginx container..."
docker restart help-center

Write-Host ">>> [5/5] Verify service..."
Start-Sleep -Seconds 2
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host ">>> Deploy success! HTTP: $($response.StatusCode)"
        Write-Host ">>> URL: http://localhost:8080"
    }
} catch {
    Write-Host ">>> Deploy failed!"
    exit 1
}
