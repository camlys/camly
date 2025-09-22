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
import { apps } from '@/lib/apps-config';

export default function AppViewerClient({ app }: { app: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
        <div className="absolute top-4 left-4 z-10">
           <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
               <Button
                variant="ghost"
                className="px-4 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 border"
              >
                <LayoutGrid className="h-6 w-6" />
                <span className="sr-only">App Hub</span>
              </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent 
              align="start" 
              className="w-80 bg-background/80 p-4 backdrop-blur-sm"
             >
                <div className="mb-2">
                  <DropdownMenuItem asChild>
                    <Link href="/" className="focus:bg-accent">
                      <Home className="h-6 w-6 mr-2" />
                      <span className="ml-2 font-bold">Home</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                 <div className="my-2">
                  <h3 className="text-lg font-medium font-headline px-2">App Hub</h3>
                  <p className="text-sm text-muted-foreground px-2">Quick access to all tools.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {apps.map((appItem, index) => (
                    <DropdownMenuItem key={index} asChild className="h-auto p-0 focus:bg-transparent focus:text-inherit">
                      <Link href={`/apps/${index}`} className="block w-full h-full">
                         <div className="flex flex-col items-center justify-center p-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground">
                            {appItem.icon}
                            <span className="mt-2 text-xs font-medium text-center">{appItem.title}</span>
                         </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
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
