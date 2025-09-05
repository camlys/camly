import { notFound } from 'next/navigation';
import { apps } from '@/components/landing/app-grid';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function AppViewerPage({ params }: { params: { id: string } }) {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    notFound();
  }

  const app = apps[appId];

  return (
    <div className="flex flex-col h-screen">
       <Link href="/" className="absolute top-4 left-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm">
          <Logo className="h-6 w-6" />
          <span className="sr-only">Back to Home</span>
       </Link>
        <iframe
          src={app.href}
          className="flex-1 w-full border-0"
          title={app.title}
          allowFullScreen
        />
    </div>
  );
}
