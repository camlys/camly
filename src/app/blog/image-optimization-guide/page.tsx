import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Metadata } from "next";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Optimizing Images for the Web: A Beginner's Guide",
    description: "Master the art of image resizing and compression to dramatically improve your website's loading speed, SEO, and user experience.",
    keywords: ["image optimization", "web performance", "image compression", "image resizing", "page speed"],
    openGraph: {
        title: "Optimizing Images for the Web: A Beginner's Guide | Camly",
        description: "Slow website? Your images might be the culprit. Learn how to properly optimize them for the web.",
        images: ['/og-image-img-guide.png'],
    },
};

export default function ImageOptimizationPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <article className="container max-w-4xl py-20 md:py-28">
                    <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                        <p className="text-primary font-semibold">Web Performance</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            Optimizing Images for the Web: A Beginner's Guide
                        </h1>
                        <p className="mt-4 text-foreground/80 md:text-lg">
                            Large, unoptimized images are one of the biggest causes of slow-loading websites. Learn the essential techniques of resizing and compression to make your site faster for everyone.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="my-8 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={200}>
                        <Image
                            src="https://picsum.photos/seed/blog3/1200/600"
                            alt="Image editing software showing image compression"
                            width={1200}
                            height={600}
                            data-ai-hint="image editing software"
                            className="rounded-xl"
                        />
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={300}>
                        <p>
                            In the digital world, speed matters. Users expect websites to load almost instantly. High-resolution images are beautiful, but their large file sizes can bring your site to a grinding halt. That's where image optimization comes in.
                        </p>
                        
                        <h2>Why is Image Optimization Important?</h2>
                        <ul>
                            <li><strong>Improved Page Load Speed:</strong> Smaller image files mean faster loading times, which is crucial for retaining visitors.</li>
                            <li><strong>Better SEO Rankings:</strong> Site speed is a confirmed ranking factor for Google. A faster site can lead to better visibility in search results.</li>
                            <li><strong>Enhanced User Experience:</strong> A snappy, responsive site is a joy to use. A slow, laggy one is a source of frustration.</li>
                            <li><strong>Reduced Bandwidth Consumption:</strong> Optimized images save bandwidth for both your server and your visitors, which is especially important for users on mobile data plans.</li>
                        </ul>

                        <h2>The Two Pillars of Image Optimization</h2>
                        <h3>1. Image Resizing (Dimensions)</h3>
                        <p>
                            Never use HTML or CSS to shrink a large image. If you need a 500px wide image, upload it at that size. Uploading a 4000px image and scaling it down in the browser forces the user to download the massive original file, wasting data and time.
                        </p>
                        
                        <h3>2. Image Compression (File Size)</h3>
                        <p>
                            Compression reduces the file size of an image without significantly degrading its quality.
                            <strong>Lossy compression</strong> removes some data, resulting in a much smaller file with a minor quality reduction. It's great for photographs (JPEGs).
                            <strong>Lossless compression</strong> reduces file size without any quality loss. It's ideal for graphics with sharp lines and text (PNGs).
                        </p>

                        <div className="not-prose my-10 text-center">
                             <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                                <div className="bg-muted/50 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold font-headline">Ready to Speed Up Your Site?</h3>
                                    <p className="mt-2 text-foreground/80">Quickly resize and optimize your images with our simple and powerful tool.</p>
                                    <Button asChild size="lg" className="mt-6">
                                        <Link href="/apps/3">Use the Image Resizer <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
