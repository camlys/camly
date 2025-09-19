import { MetadataRoute } from 'next';

const URL = 'https://camly.site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${URL}/sitemap.xml`,
  };
}
