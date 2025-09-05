import { notFound } from 'next/navigation';
import { apps } from '@/components/landing/app-grid';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function AppViewerPage({ params }: { params: { id: string } }) {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    notFound();
  }

  const app = apps[appId];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <iframe
          src={app.href}
          className="flex-1 w-full border-0"
          title={app.title}
          allowFullScreen
        />
      </main>
      <Footer />
    </div>
  );
}
