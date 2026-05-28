param(
    [Parameter(Mandatory=$false)]
    [string]$Token = $env:FIGMA_TOKEN
)

if (-not $Token) {
    Write-Host "ERROR: Missing Figma token. Pass -Token or set FIGMA_TOKEN env var." -ForegroundColor Red
    exit 1
}

$FileId = "5XkqZR8Tdc34HkSKKUmla4"
$Headers = @{ "X-Figma-Token" = $Token }
$OutDir = "D:\Projects\Ai-First-Company\ai-first-workspace-aj-meile\Dev\etnolyga-website\public\figma-assets\frames"

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$ids = @(
  "8:88","8:138","8:188","8:234","8:302","8:604","8:923","8:1161","8:1396","8:1614",
  "8:1816","8:2056","8:2278","8:2607","8:2924","8:3253","8:3541","8:3847","8:4056","8:4276",
  "8:4509","8:4700","8:4907","8:5135","8:5338","8:5590","8:5858","8:6175","8:6407","8:6657",
  "8:6857","8:7077","8:7310","8:7501","8:7708","8:7936","8:8187","8:8454","8:8771","8:8911",
  "8:8966","8:9022","8:9151","8:9170","8:9246","8:9322","8:9341","8:9396","8:9410"
)

# Hardcoded name map (avoids extra API call = saves rate limit quota)
$nameMap = @{
  "8:88"   = "Facebook_icon"
  "8:138"  = "Instagram_icon"
  "8:188"  = "Youtube_icon"
  "8:234"  = "Rastai_vertikalus_trumpi"
  "8:302"  = "960px_homepage"
  "8:604"  = "960px_homepage_v2"
  "8:923"  = "960_kontaktai"
  "8:1161" = "960_naujienų_sarasas"
  "8:1396" = "960_naujiena_1_var"
  "8:1614" = "960_naujiena_2_var"
  "8:1816" = "960_apie_ritinį"
  "8:2056" = "960_komanda"
  "8:2278" = "960_komandų_sarasas"
  "8:2607" = "960_turnyrine_lentele"
  "8:2924" = "960_turnyrine_lentele_v2"
  "8:3253" = "640px_homepage"
  "8:3541" = "640px_homepage_v2"
  "8:3847" = "640px_naujienų_sarasas"
  "8:4056" = "640px_tvarkarastis"
  "8:4276" = "640px_apie_ritinį"
  "8:4509" = "640px_naujiena_2_var"
  "8:4700" = "640px_naujiena_1_var"
  "8:4907" = "640px_kontaktai"
  "8:5135" = "640px_komanda"
  "8:5338" = "640px_turnyrine_lentele"
  "8:5590" = "640px_turnyrine_lentele_v2"
  "8:5858" = "640px_komandų_sarasas"
  "8:6175" = "320px_homepage"
  "8:6407" = "320px_homepage_v2"
  "8:6657" = "320px_naujienų_sarasas"
  "8:6857" = "320px_tvarkarastis"
  "8:7077" = "320px_apie_ritinį"
  "8:7310" = "320px_naujiena_2_var"
  "8:7501" = "320px_naujiena_1_var"
  "8:7708" = "320px_kontaktai"
  "8:7936" = "320px_turnyrine_lentele"
  "8:8187" = "320px_turnyrine_lentele_v2"
  "8:8454" = "320px_komandų_sarasas"
  "8:8771" = "Rastai_horizontalus_ilgi"
  "8:8911" = "Etnolyga_horizontalus_logo"
  "8:8966" = "Etnolyga_vertikalus_logo"
  "8:9022" = "Rastai_horizontalus_trumpi"
  "8:9151" = "Komanda_component"
  "8:9170" = "Meniu"
  "8:9246" = "Meniu_v2"
  "8:9322" = "Galerija"
  "8:9341" = "Button"
  "8:9396" = "Filtras"
  "8:9410" = "320px_komanda"
}

# Export in batches of 4 with 20s delay + 429 retry
# startFrom=24 resumes from frame 25 (frames 1-24 already downloaded)
$batchSize = 4
$startFrom = 24
$fi = $startFrom

$remainingIds = $ids[$startFrom..($ids.Count - 1)]
Write-Host "Exporting frames $($startFrom+1) to $($ids.Count)..."

for ($b = 0; $b -lt $remainingIds.Count; $b += $batchSize) {
    $batch = $remainingIds[$b..([Math]::Min($b + $batchSize - 1, $remainingIds.Count - 1))]
    $encoded = ($batch | ForEach-Object { $_ -replace ":", "%3A" }) -join ","
    $url = "https://api.figma.com/v1/images/$FileId`?ids=$encoded&format=png&scale=1"
    $batchNum = [Math]::Floor($b / $batchSize) + 1
    Write-Host "Batch $($batchNum): $($batch.Count) frames..."

    $retries = 3
    $success = $false
    while ($retries -gt 0 -and -not $success) {
        try {
            $resp = Invoke-RestMethod -Uri $url -Headers $Headers
            $success = $true
            foreach ($prop in ($resp.images | Get-Member -MemberType NoteProperty)) {
                $nodeId = $prop.Name
                $imgUrl = $resp.images.$nodeId
                if (-not $imgUrl) { continue }
                $fi++
                $name = if ($nameMap.ContainsKey($nodeId)) { $nameMap[$nodeId] } else { $nodeId -replace ":", "-" }
                $out = Join-Path $OutDir "frame-$fi--$name.png"
                Write-Host "  [$fi] $name"
                try { Invoke-WebRequest -Uri $imgUrl -OutFile $out -ErrorAction Stop }
                catch { Write-Host "    DL ERR: $($_.Exception.Message)" }
            }
        } catch {
            $retries--
            $msg = $_.Exception.Message
            if ($msg -match "429") {
                Write-Host "  429 rate limited — waiting 60s (retries left: $retries)..."
                Start-Sleep -Seconds 60
            } else {
                Write-Host "  ERR $retries retries left: $msg"
                Start-Sleep -Seconds 5
            }
        }
    }
    if (-not $success) { Write-Host "  FAILED batch $($batchNum) after all retries." }

    if (($b + $batchSize) -lt $remainingIds.Count) {
        Write-Host "  Waiting 20s..."
        Start-Sleep -Seconds 20
    }
}
Write-Host "Done - $fi total frames exported."
