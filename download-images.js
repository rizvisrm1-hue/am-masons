const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://am-masons.com/wp-content/uploads/';

const images = [
  // Logos
  { url: '2026/03/amd-logo-white-282x44.png', dest: 'public/images/logo/logo-white.png' },
  { url: '2026/03/theworkplace-logo-dark-300x300.png', dest: 'public/images/logo/logo-dark.png' },
  { url: '2026/03/cropped-theworkplace-logo-dark-270x270.png', dest: 'public/favicon.ico' },
  
  // Hero / General
  { url: 'elementor/thumbs/facilites-rk5m4o1dazt6m79gvjhic007vg787vlpntlv8fcmjk.jpg', dest: 'public/images/hero/facilites.jpg' },
  { url: '2020/07/writing-notepad.jpg', dest: 'public/images/hero/writing-notepad.jpg' },
  { url: '2020/07/about-1.jpg', dest: 'public/images/hero/about-1.jpg' },
  { url: '2020/07/furniture.jpg', dest: 'public/images/hero/furniture.jpg' },
  
  // Offerings
  { url: '2026/09/space-effectiveness-audit-empty-office-1024x682.jpg', dest: 'public/images/offerings/space-effectiveness-audit-empty-office.jpg' },
  { url: '2020/07/work-floor.jpg', dest: 'public/images/offerings/work-floor.jpg' },
  { url: '2020/07/full-kitchen.jpg', dest: 'public/images/offerings/full-kitchen.jpg' },
  { url: '2020/07/conf-room.jpg', dest: 'public/images/offerings/conf-room.jpg' },
  { url: '2020/07/gallery-1.jpg', dest: 'public/images/offerings/gallery-1.jpg' },
  { url: '2020/07/hero-bg-01.jpg', dest: 'public/images/offerings/hero-bg-01.jpg' },
  { url: '2026/09/retail-space-effectiveness-store-interior-1024x685.jpg', dest: 'public/images/offerings/retail-space-effectiveness-store-interior.jpg' },
  
  // Insights
  { url: '2026/09/ChatGPT-Image-Sep-16-2026-02_24_56-PM-300x200.webp', dest: 'public/images/insights/relocation.webp' },
  { url: '2026/08/image-compressed-300x200.webp', dest: 'public/images/insights/fractional.webp' },
  { url: '2026/08/ChatGPT-5-300x200.webp', dest: 'public/images/insights/office-right.webp' },
  { url: '2026/07/ChatGPT-4-300x158.webp', dest: 'public/images/insights/standardize.webp' },
  { url: '2026/05/ChatGPT-3-300x169.webp', dest: 'public/images/insights/camera-offline.webp' },
  { url: '2026/04/ChatGPT-2-300x169.webp', dest: 'public/images/insights/workplace-standards.webp' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
};

async function run() {
  for (const img of images) {
    const fullUrl = baseUrl + img.url;
    console.log(`Downloading ${fullUrl} to ${img.dest}...`);
    try {
      await download(fullUrl, img.dest);
      console.log('Success.');
    } catch (e) {
      console.error(e);
    }
  }
}

run();
