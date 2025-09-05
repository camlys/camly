import { MetadataRoute } from 'next';
import { apps } from '@/components/landing/app-grid';

const URL = 'https://camlys.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoutes = apps.map((app, index) => ({
    url: `${URL}/apps/${index}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: URL,
      lastModified: new Date(),
    },
    ...appRoutes,
  ];
}
