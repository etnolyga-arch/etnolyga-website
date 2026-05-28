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

# All 49 frame IDs (frames 1-24 already downloaded; this script starts from 25)
$ids = @(
  "8:88","8:138","8:188","8:234","8:302","8:604","8:923","8:1161","8:1396","8:1614",
  "8:1816","8:2056","8:2278","8:2607","8:2924","8:3253","8:3541","8:3847","8:4056","8:4276",
  "8:4509","8:4700","8:4907","8:5135","8:5338","8:5590","8:5858","8:6175","8:6407","8:6657",
  "8:6857","8:7077","8:7310","8:7501","8:7708","8:7936","8:8187","8:8454","8:8771","8:8911",
  "8:8966","8:9022","8:9151","8:9170","8:9246","8:9322","8:9341","8:9396","8:9410"
)

# ASCII-safe name map (avoid special chars that break PS parser)
$nameMap = @{}
$nameMap["8:88"]   = "Facebook_icon"
$nameMap["8:138"]  = "Instagram_icon"
$nameMap["8:188"]  = "Youtube_icon"
$nameMap["8:234"]  = "Rastai_vertikalus_trumpi"
$nameMap["8:302"]  = "960px_homepage"
$nameMap["8:604"]  = "960px_homepage_v2"
$nameMap["8:923"]  = "960_kontaktai"
$nameMap["8:1161"] = "960_naujienų_sarasas"
$nameMap["8:1396"] = "960_naujiena_1_var"
$nameMap["8:1614"] = "960_naujiena_2_var"
$nameMap["8:1816"] = "960_apie_ritini"
$nameMap["8:2056"] = "960_komanda"
$nameMap["8:2278"] = "960_komandu_sarasas"
$nameMap["8:2607"] = "960_turnyrine_lentele"
$nameMap["8:2924"] = "960_turnyrine_lentele_v2"
$nameMap["8:3253"] = "640px_homepage"
$nameMap["8:3541"] = "640px_homepage_v2"
$nameMap["8:3847"] = "640px_naujienų_sarasas"
$nameMap["8:4056"] = "640px_tvarkarastis"
$nameMap["8:4276"] = "640px_apie_ritini"
$nameMap["8:4509"] = "640px_naujiena_2_var"
$nameMap["8:4700"] = "640px_naujiena_1_var"
$nameMap["8:4907"] = "640px_kontaktai"
$nameMap["8:5135"] = "640px_komanda"
$nameMap["8:5338"] = "640px_turnyrine_lentele"
$nameMap["8:5590"] = "640px_turnyrine_lentele_v2"
$nameMap["8:5858"] = "640px_komandu_sarasas"
$nameMap["8:6175"] = "320px_homepage"
$nameMap["8:6407"] = "320px_homepage_v2"
$nameMap["8:6657"] = "320px_naujienų_sarasas"
$nameMap["8:6857"] = "320px_tvarkarastis"
$nameMap["8:7077"] = "320px_apie_ritini"
$nameMap["8:7310"] = "320px_naujiena_2_var"
$nameMap["8:7501"] = "320px_naujiena_1_var"
$nameMap["8:7708"] = "320px_kontaktai"
$nameMap["8:7936"] = "320px_turnyrine_lentele"
$nameMap["8:8187"] = "320px_turnyrine_lentele_v2"
$nameMap["8:8454"] = "320px_komandu_sarasas"
$nameMap["8:8771"] = "Rastai_horizontalus_ilgi"
$nameMap["8:8911"] = "Etnolyga_horizontalus_logo"
$nameMap["8:8966"] = "Etnolyga_vertikalus_logo"
$nameMap["8:9022"] = "Rastai_horizontalus_trumpi"
$nameMap["8:9151"] = "Komanda_component"
$nameMap["8:9170"] = "Meniu"
$nameMap["8:9246"] = "Meniu_v2"
$nameMap["8:9322"] = "Galerija"
$nameMap["8:9341"] = "Button"
$nameMap["8:9396"] = "Filtras"
$nameMap["8:9410"] = "320px_komanda"

# Resume from frame 25 (index 24)
$startFrom = 24
$fi = $startFrom
$batchSize = 4

$remaining = $ids[$startFrom..($ids.Count - 1)]
Write-Host "Exporting frames $($startFrom + 1) to $($ids.Count)..."

for ($b = 0; $b -lt $remaining.Count; $b += $batchSize) {
    $end = [Math]::Min($b + $batchSize - 1, $remaining.Count - 1)
    $batch = $remaining[$b..$end]
    $encoded = ($batch | ForEach-Object { $_ -replace ":", "%3A" }) -join ","
    $url = "https://api.figma.com/v1/images/" + $FileId + "?ids=" + $encoded + "&format=png&scale=1"
    $batchNum = [Math]::Floor($b / $batchSize) + 1
    Write-Host "Batch $batchNum ($($batch.Count) frames)..."

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
                if ($nameMap.ContainsKey($nodeId)) {
                    $name = $nameMap[$nodeId]
                } else {
                    $name = $nodeId -replace ":", "-"
                }
                $out = Join-Path $OutDir ("frame-" + $fi + "--" + $name + ".png")
                Write-Host "  [$fi] $name"
                try {
                    Invoke-WebRequest -Uri $imgUrl -OutFile $out -ErrorAction Stop
                } catch {
                    Write-Host "    DL error: $($_.Exception.Message)"
                }
            }
        } catch {
            $retries--
            $errMsg = $_.Exception.Message
            if ($errMsg -match "429") {
                Write-Host "  429 rate limited - waiting 60s ($retries retries left)..."
                Start-Sleep -Seconds 60
            } else {
                Write-Host "  Error ($retries retries left): $errMsg"
                Start-Sleep -Seconds 5
            }
        }
    }
    if (-not $success) {
        Write-Host "  FAILED batch $batchNum after all retries."
    }

    if (($b + $batchSize) -lt $remaining.Count) {
        Write-Host "  Waiting 20s..."
        Start-Sleep -Seconds 20
    }
}

Write-Host "Done - $fi total frames in $OutDir"
