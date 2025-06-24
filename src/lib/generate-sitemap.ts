import fs from 'fs';
import path from 'path';

export function generateSitemap() {
  // Get all page directories from src/app
  const pagesDirectory = path.join(process.cwd(), 'src', 'app');
  const pages = fs.readdirSync(pagesDirectory)
    .filter(file => {
      const stat = fs.statSync(path.join(pagesDirectory, file));
      return stat.isDirectory() && !file.startsWith('_') && !file.startsWith('.');
    });

  // Current date in ISO format for lastmod
  const currentDate = new Date().toISOString();

  // Start XML string
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pages.circulsense.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add each page to sitemap
  pages.forEach(page => {
    if (page !== 'api' && fs.existsSync(path.join(pagesDirectory, page, 'page.tsx'))) {
      const pageUrl = `https://pages.circulsense.com/${page}`;
      sitemap += `
  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  });

  // Close XML
  sitemap += '\n</urlset>';

  // Write sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
} 