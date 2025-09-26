import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Metadata } from "next";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "The Ultimate Guide to QR Codes for Small Businesses",
    description: "Learn how QR codes can revolutionize your marketing, operations, and customer engagement. A comprehensive guide for small businesses, with a link to our free QR code generator.",
    keywords: ["QR codes", "small business marketing", "customer engagement", "digital marketing", "contactless solutions", "QR code generator", "free tools"],
    openGraph: {
        title: "The Ultimate Guide to QR Codes for Small Businesses | Camly",
        description: "Unlock the power of QR codes for your small business. From marketing campaigns to simplifying operations, this guide covers it all.",
        images: ['/og-image-qr-guide.png'],
    },
};

export default function QRCodeGuidePage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <article className="container max-w-4xl py-20 md:py-28">
                    <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                        <p className="text-primary font-semibold">Marketing</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            The Ultimate Guide to QR Codes for Small Businesses
                        </h1>
                        <p className="mt-4 text-foreground/80 md:text-lg">
                            Once a niche technology, QR codes are now an essential tool for businesses of all sizes. Learn how to leverage them to boost your marketing, streamline operations, and enhance customer experience.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="my-8 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={200}>
                        <Image
                            src="https://picsum.photos/seed/blog1/1200/600"
                            alt="QR Code on a coffee cup"
                            width={1200}
                            height={600}
                            data-ai-hint="qr code business"
                            className="rounded-xl"
                        />
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={300}>
                        <p>
                            QR (Quick Response) codes are two-dimensional barcodes that can store a variety of information, from URLs and contact details to Wi-Fi credentials and payment links. Their ability to bridge the physical and digital worlds makes them an incredibly versatile tool for small businesses.
                        </p>
                        
                        <h2>Why Should Your Small Business Use QR Codes?</h2>
                        <ul>
                            <li><strong>Cost-Effective:</strong> Generating QR codes is often free or low-cost, making it an accessible marketing channel for any budget.</li>
                            <li><strong>Contactless Engagement:</strong> In today's world, offering contactless options for menus, payments, and information is a huge plus for customer safety and convenience.</li>
                            <li><strong>Trackable Marketing:</strong> Dynamic QR codes allow you to track scan data, providing valuable insights into the performance of your marketing campaigns.</li>
                            <li><strong>Enhanced Customer Experience:</strong> QR codes can provide instant access to information, from product details to video tutorials, enriching the customer journey.</li>
                        </ul>

                        <h2>Creative Ways to Use QR Codes</h2>
                        <ol>
                            <li><strong>On Business Cards:</strong> Add a QR code that links to your portfolio, LinkedIn profile, or a contact form.</li>
                            <li><strong>In-Store Displays:</strong> Link to product pages, reviews, or "how-to" videos.</li>
                            <li><strong>Restaurant Menus:</strong> Offer a digital, contactless menu that can be updated instantly.</li>
                            <li><strong>Event Promotions:</strong> Link to an RSVP form, event schedule, or a map to the venue.</li>
                             <li><strong>Packaging:</strong> Provide re-order links, user manuals, or ask for a review.</li>
                        </ol>

                        <h2>Getting Started with QR Codes</h2>
                        <p>
                            Creating a QR code is simple. With tools like Camly's QR & Barcode Generator, you can create a customized, high-resolution QR code in seconds.
                        </p>
                        
                        <div className="not-prose my-10 text-center">
                            <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                                <div className="bg-muted/50 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold font-headline">Ready to Create Your Own QR Code?</h3>
                                    <p className="mt-2 text-foreground/80">Use our free generator to create custom QR codes for your business needs.</p>
                                    <Button asChild size="lg" className="mt-6">
                                        <Link href="/apps/0">Generate a QR Code <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
