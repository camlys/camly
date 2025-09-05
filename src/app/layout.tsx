import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const URL_BASE = 'https://camlys.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(URL_BASE),
  title: {
    default: 'Camly - Streamline Your Workflow, Amplify Your Results.',
    template: `%s | Camly`,
  },
  description: 'A suite of powerful applications to streamline your workflow, enhance productivity, and drive growth. Discover QR generators, calculators, and more.',
  keywords: ['productivity tools', 'workflow optimization', 'business apps', 'QR code generator', 'image resizer', 'favicon generator', 'calculator'],
  openGraph: {
    title: 'Camly - Streamline Your Workflow, Amplify Your Results.',
    description: 'A suite of powerful applications to streamline your workflow, enhance productivity, and drive growth.',
    url: URL_BASE,
    siteName: 'Camly',
    images: [
      {
        url: `${URL_BASE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Camly - Productivity tools for modern businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camly - Streamline Your Workflow, Amplify Your Results.',
    description: 'A suite of powerful applications to streamline your workflow, enhance productivity, and drive growth.',
    images: [`${URL_BASE}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
