
"use client"

import { useState, useRef, useEffect } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Home, LayoutGrid, Move } from 'lucide-react';
import { apps } from '@/lib/apps-config';
import { cn } from '@/lib/utils';

export default function AppViewerClient({ app }: { app: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 16 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleDragStart = (clientX: number, clientY: number) => {
    if (!dragRef.current) return;
    
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    
    dragStartPos.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };
  
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    // Only allow dragging with the primary mouse button
    if (e.button !== 0) return;
    handleDragStart(e.clientX, e.clientY);
  };
  
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging || !dragRef.current) return;
    let newX = clientX - dragStartPos.current.x;
    let newY = clientY - dragStartPos.current.y;

    // Clamp position to be within the viewport
    const { offsetWidth, offsetHeight } = dragRef.current;
    newX = Math.max(16, Math.min(newX, window.innerWidth - offsetWidth - 16));
    newY = Math.max(16, Math.min(newY, window.innerHeight - offsetHeight - 16));
    
    setPosition({ x: newX, y: newY });
  };
  
  const handleMouseMove = (e: globalThis.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };
  
  const handleTouchMove = (e: globalThis.TouchEvent) => {
    handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleDragEnd);
      document.body.style.cursor = 'grabbing';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      document.body.style.cursor = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
       document.body.style.cursor = '';
    };
  }, [isDragging]);


  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
        <div 
          ref={dragRef}
          className="absolute z-10 flex items-center p-1 rounded-md border backdrop-blur-sm"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
           <div 
              className={cn("p-2 cursor-grab", isDragging && "cursor-grabbing")}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <Move className="h-4 w-4 text-muted-foreground" />
            </div>
           <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
               <Button
                variant="ghost"
                className="p-2 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <LayoutGrid className="h-6 w-6" />
                <span className="sr-only">App Hub</span>
              </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent 
              align="start" 
              className="w-80 bg-background/80 p-4 backdrop-blur-sm mt-2"
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
