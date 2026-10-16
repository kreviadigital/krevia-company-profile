Add-Type -AssemblyName System.Drawing

$repoRoot = "D:\01_Projects\Krevia-Digital"
$publicDir = Join-Path $repoRoot "public"
$appDir = Join-Path $repoRoot "src\app"

# ==========================================
# 1. GENERATE APP ICON & FAVICON (512x512)
# ==========================================
Write-Host "Creating Favicon & App Icons..."
$iconSize = 512
$iconBitmap = New-Object System.Drawing.Bitmap $iconSize, $iconSize
$gIcon = [System.Drawing.Graphics]::FromImage($iconBitmap)
$gIcon.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gIcon.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gIcon.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gIcon.Clear([System.Drawing.Color]::Transparent)

# Clean rounded squircle container
$rect = New-Object System.Drawing.Rectangle 16, 16, 480, 480
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$radius = 110
$d = $radius * 2
$path.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
$path.AddArc($rect.Right - $d, $rect.Y, $d, $d, 270, 90)
$path.AddArc($rect.Right - $d, $rect.Bottom - $d, $d, $d, 0, 90)
$path.AddArc($rect.X, $rect.Bottom - $d, $d, $d, 90, 90)
$path.CloseFigure()

# Background: Crisp white with very soft border
$whiteBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$gIcon.FillPath($whiteBrush, $path)

$borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(35, 16, 29, 53), 4)
$gIcon.DrawPath($borderPen, $path)

# Draw Logo Mark inside
$logoMarkPath = Join-Path $publicDir "logo-mark.png"
$srcMark = [System.Drawing.Bitmap]::FromFile($logoMarkPath)

# Bounding box calculation to keep mark centered & prominent
$markW = 360
$markH = [int](360 * 774 / 1001)
$markX = [int]((512 - $markW) / 2)
$markY = [int]((512 - $markH) / 2)

$gIcon.DrawImage($srcMark, $markX, $markY, $markW, $markH)

# Save to public and app
$iconBitmap.Save((Join-Path $appDir "icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$iconBitmap.Save((Join-Path $appDir "apple-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$iconBitmap.Save((Join-Path $publicDir "icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)

# Generate 48x48 favicon
$icoBitmap = New-Object System.Drawing.Bitmap 48, 48
$gIco = [System.Drawing.Graphics]::FromImage($icoBitmap)
$gIco.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gIco.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gIco.DrawImage($iconBitmap, 0, 0, 48, 48)
$icoBitmap.Save((Join-Path $publicDir "favicon.ico"), [System.Drawing.Imaging.ImageFormat]::Icon)
$icoBitmap.Save((Join-Path $appDir "favicon.ico"), [System.Drawing.Imaging.ImageFormat]::Icon)

$gIco.Dispose()
$icoBitmap.Dispose()
$srcMark.Dispose()
$borderPen.Dispose()
$whiteBrush.Dispose()
$path.Dispose()
$gIcon.Dispose()

Write-Host "Icons generated successfully!"

# ==========================================
# 2. GENERATE OPENGRAPH IMAGE (1200x630)
# ==========================================
Write-Host "Creating OpenGraph Social Share Image (1200x630)..."
$ogW = 1200
$ogH = 630
$ogBmp = New-Object System.Drawing.Bitmap $ogW, $ogH
$gOg = [System.Drawing.Graphics]::FromImage($ogBmp)
$gOg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gOg.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$gOg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gOg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background: Premium Deep Krevia Navy (#0B1323 to #101D35)
$bgRect = New-Object System.Drawing.Rectangle 0, 0, $ogW, $ogH
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $bgRect, ([System.Drawing.Color]::FromArgb(255, 10, 18, 32)), ([System.Drawing.Color]::FromArgb(255, 16, 29, 53)), 35.0
$gOg.FillRectangle($bgBrush, $bgRect)

# Ambient Royal Blue Glow in Top-Right
$glowRect = New-Object System.Drawing.Rectangle 720, -120, 650, 520
$glowBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $glowRect, ([System.Drawing.Color]::FromArgb(50, 29, 78, 216)), ([System.Drawing.Color]::FromArgb(0, 29, 78, 216)), 0.0
$gOg.FillEllipse($glowBrush, $glowRect)
$glowBrush.Dispose()

# Ambient Subtle Blue Glow in Bottom-Left
$glow2Rect = New-Object System.Drawing.Rectangle -120, 320, 560, 440
$glow2Brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $glow2Rect, ([System.Drawing.Color]::FromArgb(35, 29, 78, 216)), ([System.Drawing.Color]::FromArgb(0, 16, 29, 53)), 90.0
$gOg.FillEllipse($glow2Brush, $glow2Rect)
$glow2Brush.Dispose()

# Card Inner Border (Subtle glass outline)
$cardBorderRect = New-Object System.Drawing.Rectangle 36, 36, 1128, 558
$cardPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(40, 255, 255, 255)), 1.5
$gOg.DrawRectangle($cardPen, $cardBorderRect)
$cardPen.Dispose()

# Top-Left Brand: Draw App Icon squircle + Typography
$gOg.DrawImage($iconBitmap, 72, 68, 76, 76)

$brandFont = [System.Drawing.Font]::new("Segoe UI", [float]26, [System.Drawing.FontStyle]::Bold)
$brandSubFont = [System.Drawing.Font]::new("Segoe UI", [float]11, [System.Drawing.FontStyle]::Bold)
$whiteTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$accentTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 96, 165, 250))

$gOg.DrawString("KREVIA DIGITAL", $brandFont, $whiteTextBrush, 164, 76)
$gOg.DrawString("SOFTWARE ENGINEERING & DIGITAL TRANSFORMATION", $brandSubFont, $accentTextBrush, 166, 115)

# Top-Right Location Badge
$badgeRect = New-Object System.Drawing.Rectangle 830, 84, 298, 42
$badgePath = New-Object System.Drawing.Drawing2D.GraphicsPath
$bRadius = 21
$bD = $bRadius * 2
$badgePath.AddArc($badgeRect.X, $badgeRect.Y, $bD, $bD, 180, 90)
$badgePath.AddArc($badgeRect.Right - $bD, $badgeRect.Y, $bD, $bD, 270, 90)
$badgePath.AddArc($badgeRect.Right - $bD, $badgeRect.Bottom - $bD, $bD, $bD, 0, 90)
$badgePath.AddArc($badgeRect.X, $badgeRect.Bottom - $bD, $bD, $bD, 90, 90)
$badgePath.CloseFigure()

$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(60, 29, 78, 216))
$badgePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 96, 165, 250), 1)
$gOg.FillPath($badgeBrush, $badgePath)
$gOg.DrawPath($badgePen, $badgePath)

# Green status dot & text
$greenDotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 52, 211, 153))
$gOg.FillEllipse($greenDotBrush, 850, 100, 10, 10)
$greenDotBrush.Dispose()

$badgeFont = [System.Drawing.Font]::new("Segoe UI", [float]11, [System.Drawing.FontStyle]::Bold)
$badgeTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 226, 232, 240))
$gOg.DrawString("Pekanbaru, Riau - Indonesia", $badgeFont, $badgeTextBrush, 870, 96)

# Headline Kicker Badge
$kickerFont = [System.Drawing.Font]::new("Segoe UI", [float]11, [System.Drawing.FontStyle]::Bold)
$kickerBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 147, 197, 253))
$gOg.DrawString("MITRA REKAYASA TEKNOLOGI TERPERCAYA", $kickerFont, $kickerBrush, 72, 190)

# Main Headline
$headlineFont = [System.Drawing.Font]::new("Segoe UI", [float]35, [System.Drawing.FontStyle]::Bold)
$headlineBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$headlineRect = New-Object System.Drawing.RectangleF 72, 220, 1050, 95
$gOg.DrawString("Solusi Software Kustom & Arsitektur Skalabel", $headlineFont, $headlineBrush, $headlineRect)

# Subtitle
$subFont = [System.Drawing.Font]::new("Segoe UI", [float]16, [System.Drawing.FontStyle]::Regular)
$subBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 160, 174, 192))
$subRect = New-Object System.Drawing.RectangleF 72, 325, 1050, 65
$gOg.DrawString("Membantu bisnis, instansi, dan korporasi modern merancang custom web & mobile apps, integrasi sistem multi-platform, dan otomatisasi alur operasional.", $subFont, $subBrush, $subRect)

# 4 Modern Feature Chips / Pills
$pills = @(
    "Custom Web & Mobile Apps",
    "API & System Integration",
    "Enterprise UI/UX Design",
    "100% Hak Milik Source Code"
)

$pillFont = [System.Drawing.Font]::new("Segoe UI", [float]12, [System.Drawing.FontStyle]::Bold)
$pillX = 72
$pillY = 412

foreach ($pillText in $pills) {
    $strSize = $gOg.MeasureString($pillText, $pillFont)
    $pillWidth = [int]$strSize.Width + 44
    $pillHeight = 44
    
    $pRect = New-Object System.Drawing.Rectangle $pillX, $pillY, $pillWidth, $pillHeight
    $pPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pRad = 12
    $pD = $pRad * 2
    $pPath.AddArc($pRect.X, $pRect.Y, $pD, $pD, 180, 90)
    $pPath.AddArc($pRect.Right - $pD, $pRect.Y, $pD, $pD, 270, 90)
    $pPath.AddArc($pRect.Right - $pD, $pRect.Bottom - $pD, $pD, $pD, 0, 90)
    $pPath.AddArc($pRect.X, $pRect.Bottom - $pD, $pD, $pD, 90, 90)
    $pPath.CloseFigure()
    
    $pBg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(35, 255, 255, 255))
    $pPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 255, 255, 255), 1)
    $pTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 241, 245, 249))
    
    $gOg.FillPath($pBg, $pPath)
    $gOg.DrawPath($pPen, $pPath)
    
    # Checkmark icon dot in blue
    $blueDot = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 96, 165, 250))
    $gOg.FillEllipse($blueDot, $pillX + 16, $pillY + 18, 8, 8)
    $blueDot.Dispose()
    
    $gOg.DrawString($pillText, $pillFont, $pTextBrush, ($pillX + 32), ($pillY + 12))
    
    $pBg.Dispose()
    $pPen.Dispose()
    $pTextBrush.Dispose()
    $pPath.Dispose()
    
    $pillX += $pillWidth + 14
}

# Bottom Divider & Domain bar
$divPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(35, 255, 255, 255), 1)
$gOg.DrawLine($divPen, 72, 498, 1128, 498)
$divPen.Dispose()

$footFont = [System.Drawing.Font]::new("Segoe UI", [float]15, [System.Drawing.FontStyle]::Bold)
$footDomainBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$gOg.DrawString("kreviadigital.com", $footFont, $footDomainBrush, 72, 520)

$footRightFont = [System.Drawing.Font]::new("Segoe UI", [float]13, [System.Drawing.FontStyle]::Regular)
$footRightBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$gOg.DrawString("Solusi Teknologi & Transformasi Digital Berstandar Enterprise", $footRightFont, $footRightBrush, 690, 522)

# Cleanup brushes & fonts
$footRightBrush.Dispose()
$footRightFont.Dispose()
$footDomainBrush.Dispose()
$footFont.Dispose()
$pillFont.Dispose()
$subBrush.Dispose()
$subFont.Dispose()
$headlineBrush.Dispose()
$headlineFont.Dispose()
$kickerBrush.Dispose()
$kickerFont.Dispose()
$badgeTextBrush.Dispose()
$badgeFont.Dispose()
$badgePen.Dispose()
$badgeBrush.Dispose()
$badgePath.Dispose()
$accentTextBrush.Dispose()
$whiteTextBrush.Dispose()
$brandSubFont.Dispose()
$brandFont.Dispose()
$bgBrush.Dispose()
$iconBitmap.Dispose()

# Save OpenGraph Image to both public and src/app
$ogBmp.Save((Join-Path $publicDir "og-image.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$ogBmp.Save((Join-Path $appDir "opengraph-image.png"), [System.Drawing.Imaging.ImageFormat]::Png)

$gOg.Dispose()
$ogBmp.Dispose()

Write-Host "OpenGraph Card generated successfully (1200x630)!"
