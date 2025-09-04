import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { QrCode, Calculator, Image, Crop } from "lucide-react";
import Link from "next/link";

const apps = [
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: "QR & Barcode Generator",
    description: "Generate and customize QR codes and barcodes for your business needs.",
    href: "https://qrick.vercel.app/",
    delay: 0,
  },
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: "Calculator App",
    description: "A simple and elegant calculator for your daily calculations.",
    href: "https://calput.vercel.app/",
    delay: 150,
  },
  {
    icon: <Image className="h-8 w-8 text-primary" />,
    title: "Favicon Generator",
    description: "Create your perfect favicon from an image, text, or emoji.",
    href: "https://favicon-generate.vercel.app/",
    delay: 300,
  },
  {
    icon: <Crop className="h-8 w-8 text-primary" />,
    title: "Image Resizer",
    description: "Quickly resize and optimize your images for any use case.",
    href: "https://img-resizers.vercel.app/",
    delay: 450,
  },
];

export function AppGrid() {
  return (
    <section id="apps" className="container py-20 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Explore Our Applications
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Discover powerful tools to enhance your workflow and productivity.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((app, index) => (
          <AnimateOnScroll
            key={index}
            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4"
            delay={app.delay}
          >
            <Link href={app.href} target="_blank" rel="noopener noreferrer" className="h-full block">
              <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4">{app.icon}</div>
                  <CardTitle className="font-headline">{app.title}</CardTitle>
                  <CardDescription className="pt-2">{app.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
