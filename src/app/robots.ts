import { MetadataRoute } from 'next';

const URL = 'https://camlys.vercel.app';

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
