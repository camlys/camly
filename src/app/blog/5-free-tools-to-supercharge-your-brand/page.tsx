import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Metadata } from "next";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { apps } from "@/lib/apps-config";

export const metadata: Metadata = {
    title: "5 Free Tools to Supercharge Your Productivity & Brand",
    description: "Discover five essential free tools—a QR Code Generator, Favicon Generator, Image Resizer, PDF Editor, and Calculator—that will streamline your workflow, enhance your brand, and boost productivity.",
    keywords: ["free business tools", "productivity tools", "QR code generator", "favicon generator", "image resizer", "PDF editor", "online calculator", "small business resources"],
    openGraph: {
        title: "5 Free Tools to Supercharge Your Productivity & Brand | Camly",
        description: "Unlock your business's potential with these five powerful and free online tools from Camly. From marketing to web design, we've got you covered.",
        images: ['/og-image-5-tools.png'],
    },
};

export default function FiveToolsGuidePage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <article className="container max-w-4xl py-20 md:py-28">
                    <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                        <p className="text-primary font-semibold">Productivity</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            5 Free Tools to Supercharge Your Productivity & Brand
                        </h1>
                        <p className="mt-4 text-foreground/80 md:text-lg">
                            In today's fast-paced digital landscape, efficiency is key. Having the right tools at your disposal can make all the difference. Here are five essential, free online tools that can help you streamline your workflow, strengthen your brand, and save valuable time.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="my-8 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={200}>
                        <Image
                            src="https://picsum.photos/seed/blog4/1200/600"
                            alt="A desk with various productivity tools"
                            width={1200}
                            height={600}
                            data-ai-hint="productivity tools desk"
                            className="rounded-xl"
                        />
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={300}>
                        <p>
                            Whether you're a small business owner, a marketer, or a web developer, juggling multiple tasks is part of the job. This curated suite of applications is designed to tackle common challenges, from marketing engagement to document management.
                        </p>
                        
                        <h2>1. QR & Barcode Generator: Bridge Physical and Digital</h2>
                        <p>
                            QR codes are a powerhouse for marketing. Easily link your physical marketing materials—like flyers, business cards, or product packaging—to your digital presence.
                        </p>
                        <ul>
                            <li><strong>Drive Traffic:</strong> Send users to your website, social media, or a special landing page.</li>
                            <li><strong>Offer Convenience:</strong> Provide quick access to menus, contact info, or Wi-Fi.</li>
                        </ul>
                         <div className="not-prose my-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="/apps/0">Try the QR & Barcode Generator <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>

                        <h2>2. Favicon Generator: Stamp Your Brand on the Web</h2>
                        <p>
                           A favicon is your website's tiny but mighty brand ambassador. It appears in browser tabs, bookmarks, and history, making your site instantly recognizable.
                        </p>
                        <ul>
                            <li><strong>Boost Brand Recognition:</strong> A custom favicon makes your site stand out in a sea of tabs.</li>
                            <li><strong>Enhance Professionalism:</strong> It's a small detail that shows you care about your brand's presentation.</li>
                        </ul>
                        <div className="not-prose my-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="/apps/2">Create Your Favicon <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>


                        <h2>3. Image Resizer: Optimize for Speed and Performance</h2>
                        <p>
                            Large images are the number one cause of slow websites. An image resizer is a crucial tool for any webmaster. Properly sized images lead to faster load times, better user experience, and improved SEO.
                        </p>
                         <div className="not-prose my-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="/apps/3">Use the Image Resizer <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>

                        <h2>4. PDFpro: Your Free Online PDF Editor</h2>
                        <p>
                            Handling documents is a daily task for any business. PDFpro allows you to edit, merge, and organize PDF files directly in your browser, without needing to install any software.
                        </p>
                         <ul>
                            <li><strong>Edit Contracts:</strong> Quickly fill out forms or add signatures.</li>
                            <li><strong>Combine Reports:</strong> Merge multiple PDFs into a single, organized document.</li>
                        </ul>
                         <div className="not-prose my-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="/apps/4">Try PDFpro Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>

                        <h2>5. Calculator: For Quick and Easy Calculations</h2>
                        <p>
                            Sometimes, you just need to run the numbers. Whether it's calculating a project budget, figuring out a discount, or simply doing daily arithmetic, a clean, simple calculator is an indispensable tool.
                        </p>
                         <div className="not-prose my-4">
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="/apps/1">Open the Calculator <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                       
                        <div className="not-prose my-10 text-center">
                            <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                                <div className="bg-muted/50 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold font-headline">Ready to Boost Your Productivity?</h3>
                                    <p className="mt-2 text-foreground/80">Explore our full suite of free tools and discover a smarter way to work.</p>
                                    <Button asChild size="lg" className="mt-6">
                                        <Link href="/#apps">Explore All Apps <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </AnimateOnScroll>
                </article>
            </main>
            <Footer />
        </div>
    );
}
