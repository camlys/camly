import { MetadataRoute } from 'next';
import { apps } from '@/components/landing/app-grid';

const URL = 'https://camly.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoutes = apps.map((app, index) => ({
    url: `${URL}/apps/${index}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: `${URL}/seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...appRoutes,
    ...staticRoutes,
  ];
}
