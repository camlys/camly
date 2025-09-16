import { notFound } from 'next/navigation';
import { apps } from '@/components/landing/app-grid';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Grid3x3 } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    return {
      title: 'App Not Found',
    };
  }

  const app = apps[appId];
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: app.title,
    description: app.description,
    openGraph: {
      title: `${app.title} | Camly`,
      description: app.description,
      images: [...previousImages],
    },
     twitter: {
      card: 'summary_large_image',
      title: `${app.title} | Camly`,
      description: app.description,
      images: [...previousImages],
    },
  };
}


export default function AppViewerPage({ params }: { params: { id: string } }) {
  const appId = parseInt(params.id, 10);

  if (isNaN(appId) || appId < 0 || appId >= apps.length) {
    notFound();
  }

  const app = apps[appId];

  return (
    <div className="flex flex-col h-screen">
       <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
         <Link href="/" className="flex items-center">
            <div className="p-2 rounded-full animated-icon-background">
              <Logo className="h-6 w-6" />
            </div>
            <span className="sr-only">Back to Home</span>
         </Link>
       </div>
        <div className="absolute top-4 right-2 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button
                variant="ghost"
                className="animated-icon-background focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
              >
                <Grid3x3 className="h-5 w-5 text-foreground z-10 relative left-px" />
                <span className="sr-only">All Apps</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {apps.map((app, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link href={`/apps/${index}`}>
                    {app.icon}
                    <span className="ml-2">{app.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <iframe
          src={app.href}
          className="flex-1 w-full border-0"
          title={app.title}
          allowFullScreen
        />
    </div>
  );
}
