"use client"

import { useState } from 'react';
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

export default function AppViewerClient({ app, apps }: { app: any, apps: any[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
           <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
               <Button
                variant="ghost"
                className="animated-icon-background focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
                onMouseEnter={() => setIsMenuOpen(true)}
              >
                <Grid3x3 className="h-5 w-5 text-foreground z-10 relative left-px" />
                <span className="sr-only">All Apps</span>
              </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent 
              align="end" 
              className="bg-background/80 backdrop-blur-sm"
              onMouseLeave={() => setIsMenuOpen(false)}
             >
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
