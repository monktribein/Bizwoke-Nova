const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Load and resize logo to 110x110
  const logoPath = path.join(__dirname, '../public/assets/bizwoke-nova-logo-hd.png');
  const logoBuffer = await sharp(logoPath)
    .resize(110, 110, { fit: 'contain' })
    .toBuffer();

  const base64Logo = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  const svgContent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Linear Gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F294A" />
        <stop offset="50%" stop-color="#0A1D36" />
        <stop offset="100%" stop-color="#061224" />
      </linearGradient>

      <!-- Glow Gradient Orange -->
      <radialGradient id="orangeGlow" cx="85%" cy="15%" r="60%">
        <stop offset="0%" stop-color="#F27A24" stop-opacity="0.32" />
        <stop offset="45%" stop-color="#F27A24" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#F27A24" stop-opacity="0" />
      </radialGradient>

      <!-- Glow Gradient Teal -->
      <radialGradient id="tealGlow" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="#0D9488" stop-opacity="0.25" />
        <stop offset="50%" stop-color="#0D9488" stop-opacity="0.05" />
        <stop offset="100%" stop-color="#0D9488" stop-opacity="0" />
      </radialGradient>

      <!-- Architectural Grid Pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#orangeGlow)" />
    <rect width="${width}" height="${height}" fill="url(#tealGlow)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Top Accent Bar -->
    <rect x="0" y="0" width="${width}" height="6" fill="#F27A24" />

    <!-- Inner Border Card Frame -->
    <rect x="36" y="36" width="${width - 72}" height="${height - 72}" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />

    <!-- Brand Header -->
    <g transform="translate(80, 80)">
      <!-- Logo Image Embedded -->
      <image href="${base64Logo}" x="0" y="0" width="80" height="80" />

      <!-- Brand Name & Tag -->
      <text x="96" y="38" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="900" font-size="32" fill="#FFFFFF" letter-spacing="-0.5">
        BIZWOKE NOVA<tspan font-size="20" fill="#F27A24">™</tspan>
      </text>

      <!-- Subtitle badge -->
      <rect x="96" y="52" width="310" height="24" rx="12" fill="rgba(242, 122, 36, 0.16)" stroke="rgba(242, 122, 36, 0.4)" stroke-width="1"/>
      <circle cx="110" cy="64" r="3.5" fill="#F27A24" />
      <text x="122" y="68" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="700" font-size="11" fill="#F27A24" letter-spacing="1">
        ENTERPRISE TECHNOLOGY &amp; AI
      </text>
    </g>

    <!-- Main Headline -->
    <g transform="translate(80, 240)">
      <text font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="-1.5">
        Building Digital Infrastructure
      </text>
      <text y="64" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#F27A24" letter-spacing="-1.5">
        for a Smarter India<tspan fill="#FFFFFF">.</tspan>
      </text>

      <!-- Sub-description -->
      <text y="125" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="500" font-size="20" fill="#94A3B8" letter-spacing="-0.2">
        Scalable Enterprise Software, AI Automation, and 12 Proprietary Platforms
      </text>
      <text y="153" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="500" font-size="20" fill="#94A3B8" letter-spacing="-0.2">
        engineered on the NKTech Enterprise Platform™ (NEP Core).
      </text>
    </g>

    <!-- Bottom Feature Pills & Domain -->
    <g transform="translate(80, 520)">
      <!-- Pill 1: 12 Platforms -->
      <rect x="0" y="0" width="180" height="38" rx="19" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1" />
      <text x="24" y="24" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#F8FAFC">
        12 Digital Platforms
      </text>

      <!-- Pill 2: 8 Core Sectors -->
      <rect x="195" y="0" width="180" height="38" rx="19" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1" />
      <text x="219" y="24" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#F8FAFC">
        8 National Sectors
      </text>

      <!-- Pill 3: ISO Ready -->
      <rect x="390" y="0" width="165" height="38" rx="19" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1" />
      <text x="414" y="24" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#F8FAFC">
        ISO 27001 Ready
      </text>

      <!-- Domain right aligned -->
      <g transform="translate(840, 6)">
        <text x="0" y="22" font-family="'Plus Jakarta Sans', Inter, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#F27A24" letter-spacing="0.5">
          bizwoke.com
        </text>
        <circle cx="140" cy="16" r="4" fill="#10B981" />
      </g>
    </g>
  </svg>
  `;

  const outputPngPath = path.join(__dirname, '../public/og-image.png');
  const outputJpgPath = path.join(__dirname, '../public/assets/og-image.jpg');

  await sharp(Buffer.from(svgContent))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPngPath);
  console.log('✅ Generated PNG:', outputPngPath);

  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(outputJpgPath);
  console.log('✅ Generated JPG:', outputJpgPath);
}

generateOGImage().catch(console.error);

