Write-Host "Setting up images for Allo mon kiné..."

$images = @{
    "WhatsApp Image 2026-01-29 at 14.24.08.jpeg" = "final-hero.jpg"
    "WhatsApp Image 2026-01-29 at 14.24.04.jpeg" = "final-senior.jpg"
    "WhatsApp Image 2026-01-29 at 14.25.48.jpeg" = "final-knee.jpg"
    "WhatsApp Image 2026-01-29 at 14.28.16.jpeg" = "final-trust.jpg"
}

$sourceDir = "public\images"

# Ensure directory exists
if (!(Test-Path $sourceDir)) {
    New-Item -ItemType Directory -Path $sourceDir | Out-Null
}

foreach ($key in $images.Keys) {
    $source = Join-Path $sourceDir $key
    $dest = Join-Path $sourceDir $images[$key]
    
    if (Test-Path $source) {
        Write-Host "Found $key -> Renaming to $($images[$key])"
        Move-Item -Path $source -Destination $dest -Force
    } else {
        Write-Warning "File not found: $key"
        Write-Host "Please ensure '$key' is inside '$sourceDir'"
    }
}

Write-Host "Done! If you saw warnings, please copy your WhatsApp images to 'public/images' and run this script again."
