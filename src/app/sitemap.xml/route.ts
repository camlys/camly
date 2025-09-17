import { apps } from '@/components/landing/app-grid';

const URL = 'https://camly.site';

function generateSitemap() {
    const appRoutes = apps.map((app, index) => `
    <url>
        <loc>${URL}/apps/${index}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`);

    const staticRoutes = [
        { url: `${URL}/seo`, changefreq: 'monthly', priority: 0.7 },
    ].map(route => `
    <url>
        <loc>${route.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`);

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1</priority>
    </url>
    ${appRoutes.join('')}
    ${staticRoutes.join('')}
</urlset>`;
}

export async function GET() {
    const body = generateSitemap();

    return new Response(body, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'xml-version': '1.0',
            'encoding': 'UTF-8'
        }
    });
}