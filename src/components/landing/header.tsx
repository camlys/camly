"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LayoutGrid } from 'lucide-react';
import { apps } from '@/lib/apps-config';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from '../ui/popover';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '/blog', label: 'Blog' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '/seo', label: 'SEO' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline">Camly</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-between">
           <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center">
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 focus-visible:ring-0 focus-visible:ring-offset-0 border"
                >
                  <LayoutGrid className="h-5 w-5" />
                  <span className="sr-only">App Hub</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="w-80 bg-background/80 p-4 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-medium font-headline">App Hub</h3>
                  <p className="text-sm text-muted-foreground">Quick access to all tools.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {apps.map((app, index) => (
                    <DropdownMenuItem key={index} asChild className="h-auto p-0 focus:bg-transparent focus:text-inherit">
                      <Link href={`/apps/${index}`} className="block w-full h-full">
                         <div className="flex flex-col items-center justify-center p-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground">
                            {app.icon}
                            <span className="mt-2 text-xs font-medium text-center">{app.title}</span>
                         </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            <div className="md:hidden ml-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-auto p-2 bg-background/80 backdrop-blur-sm"
                >
                  <nav className="flex flex-col items-start space-y-1">
                    {navLinks.map(link => (
                      <PopoverClose key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="block w-full rounded-md p-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {link.label}
                        </Link>
                      </PopoverClose>
                    ))}
                  </nav>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
