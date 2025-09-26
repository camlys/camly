import { QrCode, Calculator, ImageIcon, Scissors, FileEdit } from 'lucide-react';

export const apps = [
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'QR & Barcode',
    description:
      'Effortlessly generate, customize, and download high-quality QR codes and barcodes for your business cards, marketing materials, and products.',
    href: 'https://qrick.vercel.app/',
    delay: 0,
  },
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: 'Calculator',
    description: 'A simple, elegant, and user-friendly calculator for all your daily mathematical needs, from basic arithmetic to more complex calculations.',
    href: 'https://calput.vercel.app/',
    delay: 150,
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: 'Favicon Gen',
    description: 'Create the perfect favicon for your website from an image, text, or emoji. Our generator provides all the formats you need for every browser.',
    href: 'https://favicon-generate.vercel.app/',
    delay: 300,
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: 'Image Resizer',
    description: 'Quickly resize and optimize your images for web, social media, or any other use case without losing quality. A must-have for web developers.',
    href: 'https://img-resizers.vercel.app/',
    delay: 450,
  },
  {
    icon: <FileEdit className="h-8 w-8 text-primary" />,
    title: 'PDFpro',
    description: 'Edit your PDF files with ease. A simple and powerful tool for all your PDF editing needs.',
    href: 'https://pdfpro-app.vercel.app/',
    delay: 600,
  },
];
