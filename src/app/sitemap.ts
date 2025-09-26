import { MetadataRoute } from 'next';
import { apps } from '@/lib/apps-config';
import { posts } from '@/app/blog/page';

const URL = 'https://camly.site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoutes = apps.map((app, index) => ({
    url: `${URL}/apps/${index}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${URL}${post.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const staticRoutes = [
     {
      url: `${URL}/#apps`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${URL}/seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
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
    ...blogRoutes,
    ...staticRoutes,
  ];
}
