# Zero-dependency local web server in PowerShell (.NET HttpListener)
# Allows testing on mobile phones over the same Wi-Fi network!
param(
    [int]$Port = 8080
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$Port/")
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
    Write-Host "========================================================" -ForegroundColor Cyan
    Write-Host " 🪔 Festive Greeting Web App Local Server Running! " -ForegroundColor Yellow
    Write-Host " Local URL:    http://localhost:$Port/" -ForegroundColor Green
    
    $localIp = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi*","Ethernet*" -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notlike "169.*" } | Select-Object -First 1).IPAddress
    if ($localIp) {
        Write-Host " Mobile Wi-Fi: http://$($localIp):$Port/" -ForegroundColor Yellow
        Write-Host " Open the Mobile Wi-Fi URL on your phone's browser!" -ForegroundColor Cyan
    }
    Write-Host " Press Ctrl+C in this terminal to stop the server." -ForegroundColor Gray
    Write-Host "========================================================" -ForegroundColor Cyan

    Start-Process "http://localhost:$Port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = "index.html" }
        
        $filePath = Join-Path $PSScriptRoot $urlPath

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".json" { "application/json" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".mp3"  { "audio/mpeg" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Server stopped: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener.IsListening) { $listener.Stop() }
}

