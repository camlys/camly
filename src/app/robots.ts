import { MetadataRoute } from 'next';

const URL = 'https://camly.site';

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
