# Figma Image Downloader
# Downloads all image assets from a Figma file
# Usage: .\download-figma-images.ps1 -Token "YOUR_FIGMA_TOKEN"

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$FileId = "5XkqZR8Tdc34HkSKKUmla4"
$OutDir = "$PSScriptRoot\..\public\figma-assets"
$FrameOutDir = "$PSScriptRoot\..\public\figma-assets\frames"
$Headers = @{ "X-Figma-Token" = $Token }

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
New-Item -ItemType Directory -Force -Path $FrameOutDir | Out-Null

Write-Host "Fetching Figma file structure..." -ForegroundColor Cyan

# Step 1: Get all image fills (bitmap images embedded in the design)
$ImagesUrl = "https://api.figma.com/v1/files/$FileId/images"
try {
    $ImagesResp = Invoke-RestMethod -Uri $ImagesUrl -Headers $Headers -ErrorAction Stop
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Make sure your token is valid and has access to this file." -ForegroundColor Yellow
    exit 1
}

$ImageFills = $ImagesResp.meta.images
$Count = ($ImageFills | Get-Member -MemberType NoteProperty).Count
Write-Host "Found $Count image fills in the file." -ForegroundColor Green

if ($Count -eq 0) {
    Write-Host "No bitmap image fills found. Trying frame export..." -ForegroundColor Yellow
}

# Step 2: Download each image fill
$i = 0
foreach ($prop in ($ImageFills | Get-Member -MemberType NoteProperty)) {
    $ref = $prop.Name
    $url = $ImageFills.$ref
    if (-not $url) { continue }
    $i++
    $ext = if ($url -match "\.png") { "png" } elseif ($url -match "\.jpg|\.jpeg") { "jpg" } elseif ($url -match "\.svg") { "svg" } else { "png" }
    $fileName = "fill-$i-$($ref.Substring(0, [Math]::Min(12, $ref.Length))).$ext"
    $filePath = Join-Path $OutDir $fileName
    Write-Host "[$i/$Count] Downloading $fileName ..." -ForegroundColor Gray
    try {
        Invoke-WebRequest -Uri $url -OutFile $filePath -ErrorAction Stop
    } catch {
        Write-Host "  SKIP: $($_.Exception.Message)" -ForegroundColor DarkYellow
    }
}

# Step 3: Export top-level frames as PNG (node-id 1-2 = page 1)
Write-Host "`nExporting frames from node 1-2 as PNG..." -ForegroundColor Cyan

$FileResp = Invoke-RestMethod -Uri "https://api.figma.com/v1/files/$FileId/nodes?ids=1-2&depth=2" -Headers $Headers
$FrameIds = @()
$page = $FileResp.nodes."1:2"
if ($page -and $page.document.children) {
    foreach ($child in $page.document.children) {
        if ($child.type -in @("FRAME","COMPONENT","COMPONENT_SET")) {
            $FrameIds += $child.id
        }
    }
}

if ($FrameIds.Count -gt 0) {
    $idList = ($FrameIds | Select-Object -First 30) -join ","
    Write-Host "Requesting export for $($FrameIds.Count) frames..." -ForegroundColor Cyan
    $ExportUrl = "https://api.figma.com/v1/images/$FileId?ids=$idList&format=png&scale=2"
    $ExportResp = Invoke-RestMethod -Uri $ExportUrl -Headers $Headers
    $fi = 0
    foreach ($prop in ($ExportResp.images | Get-Member -MemberType NoteProperty)) {
        $nodeId = $prop.Name
        $url = $ExportResp.images.$nodeId
        if (-not $url) { continue }
        $fi++
        $safeId = $nodeId -replace ":", "-"
        $fileName = "frame-$fi-$safeId.png"
        $filePath = Join-Path $FrameOutDir $fileName
        Write-Host "  [$fi] Saving $fileName" -ForegroundColor Gray
        try {
            Invoke-WebRequest -Uri $url -OutFile $filePath -ErrorAction Stop
        } catch {
            Write-Host "  SKIP: $($_.Exception.Message)" -ForegroundColor DarkYellow
        }
    }
    Write-Host "Exported $fi frames." -ForegroundColor Green
}

Write-Host "`nDone! Files saved to: $OutDir" -ForegroundColor Green
Get-ChildItem $OutDir | Select-Object Name, @{N='KB';E={[Math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
