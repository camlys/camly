import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Grid3x3 } from 'lucide-react';
import { apps } from './app-grid';
import { cn } from '@/lib/utils';

export function Header() {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
           <div className="p-2 rounded-full animated-icon-background">
            <Logo className="h-6 w-6" />
          </div>
          <span className="font-bold font-headline">Camly</span>
        </Link>
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
        <div className="flex flex-1 items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="animated-icon-background focus-visible:ring-0 focus-visible:ring-offset-0 p-2 mr-2"
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

          <Button asChild className="hidden md:inline-flex" variant="secondary">
            <Link href="#contact">Request Demo</Link>
          </Button>

          <div className="md:hidden">
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
    </header>
  );
}
