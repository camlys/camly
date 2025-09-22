"use client"

import { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Home, LayoutGrid } from 'lucide-react';

export default function AppViewerClient({ app, apps }: { app: any, apps: any[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
        <div className="absolute top-4 left-4 z-10">
           <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
               <Button
                variant="ghost"
                className="animated-icon-background focus-visible:ring-0 focus-visible:ring-offset-0 px-6 py-4"
                onMouseEnter={() => setIsMenuOpen(true)}
              >
                <LayoutGrid className="h-6 w-6" />
                <span className="sr-only">All Apps</span>
              </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent 
              align="start" 
              className="bg-background/80 backdrop-blur-sm"
              onMouseLeave={() => setIsMenuOpen(false)}
             >
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <Home className="h-6 w-6 mr-2" />
                    <span className="ml-2 font-bold">Home</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              {apps.map((appItem, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link href={`/apps/${index}`}>
                    {appItem.icon}
                    <span className="ml-2">{appItem.title}</span>
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
