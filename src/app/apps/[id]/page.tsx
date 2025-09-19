import { notFound } from 'next/navigation';
import { apps } from '@/components/landing/app-grid';
import type { Metadata } from 'next';
import AppViewerClient from './app-viewer-client';

export async function generateStaticParams() {
  return apps.map((app, index) => ({
    id: index.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    return {
      title: 'App Not Found',
    };
  }

  const app = apps[appId];
  
  return {
    title: app.title,
    description: app.description,
    openGraph: {
      title: `${app.title} | Camly`,
      description: app.description,
    },
     twitter: {
      card: 'summary_large_image',
      title: `${app.title} | Camly`,
      description: app.description,
    },
  };
}


export default function AppViewerPage({ params }: { params: { id: string } }) {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    notFound();
  }

  const app = apps[appId];

  return <AppViewerClient app={app} apps={apps} />;
}
