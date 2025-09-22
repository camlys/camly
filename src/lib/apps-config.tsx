import { QrCode, Calculator, ImageIcon, Scissors } from 'lucide-react';

export const apps = [
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'QR & Barcode',
    description:
      'Generate and customize QR codes and barcodes for your business needs.',
    href: 'https://qrick.vercel.app/',
    delay: 0,
  },
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: 'Calculator',
    description: 'A simple and elegant calculator for your daily calculations.',
    href: 'https://calput.vercel.app/',
    delay: 150,
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: 'Favicon Gen',
    description: 'Create your perfect favicon from an image, text, or emoji.',
    href: 'https://favicon-generate.vercel.app/',
    delay: 300,
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: 'Image Resizer',
    description: 'Quickly resize and optimize your images for any use case.',
    href: 'https://img-resizers.vercel.app/',
    delay: 450,
  },
];
