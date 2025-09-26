import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { Metadata } from "next";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Why Every Website Needs a Great Favicon (and How to Make One)",
    description: "A deep dive into the importance of favicons for brand identity, user experience, and even SEO. Learn why you shouldn't underestimate this tiny icon and how to create one with our free generator.",
    keywords: ["favicon", "website branding", "user experience", "SEO", "web design", "favicon generator", "free tools", "brand identity"],
    openGraph: {
        title: "Why Every Website Needs a Great Favicon | Camly",
        description: "Discover how a simple favicon can significantly impact your website's professionalism and brand recognition. Create yours for free.",
        images: ['/og-image-favicon-guide.png'],
    },
};

export default function FaviconGuidePage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <article className="container max-w-4xl py-20 md:py-28">
                    <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                        <p className="text-primary font-semibold">Web Design</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            Why Every Website Needs a Great Favicon
                        </h1>
                        <p className="mt-4 text-foreground/80 md:text-lg">
                            It's one of the smallest elements of your website, but its impact is huge. A favicon is crucial for branding, usability, and professionalism. Let's explore why you can't afford to ignore it.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="my-8 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={200}>
                        <Image
                            src="https://picsum.photos/seed/blog2/1200/600"
                            alt="Browser tabs with favicons"
                            width={1200}
                            height={600}
                            data-ai-hint="website logo browser"
                            className="rounded-xl"
                        />
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={300}>
                        <p>
                            A favicon (short for "favorite icon") is the small icon that appears in browser tabs, bookmarks, and history lists. While tiny, it serves as a powerful visual anchor for your website.
                        </p>
                        
                        <h2>The Unseen Power of a Favicon</h2>
                        <ul>
                            <li><strong>Brand Recognition:</strong> A favicon is a constant, subtle reinforcement of your brand. In a sea of open tabs, your unique icon helps users quickly find their way back to your site.</li>
                            <li><strong>Credibility and Professionalism:</strong> A missing or generic favicon can make a site look incomplete or unprofessional. A custom favicon shows attention to detail and builds trust.</li>
                            <li><strong>Improved User Experience:</strong> Favicons make it easier for users to navigate and organize their bookmarks and browser tabs. This small convenience enhances the overall usability of your site.</li>
                            <li><strong>SEO Benefits:</strong> While not a direct ranking factor, a good favicon can improve user engagement metrics like click-through rate from bookmarks and time on site, which can indirectly influence SEO.</li>
                        </ul>

                        <h2>Best Practices for Favicon Design</h2>
                        <ol>
                            <li><strong>Keep it Simple:</strong> The small size demands a simple, recognizable design. Your brand's logo or a simplified version of it is often the best choice.</li>
                            <li><strong>Use Brand Colors:</strong> Be consistent with your brand's color palette to reinforce brand identity.</li>
                            <li><strong>Test on Different Backgrounds:</strong> Ensure your favicon is visible on both light and dark browser themes.</li>
                            <li><strong>Use the Right Format:</strong> While `.ico` is the traditional format, modern browsers also support `.png`, `.svg`, and even GIFs. An online favicon generator can help you create all the necessary sizes and formats.</li>
                        </ol>

                        <div className="not-prose my-10 text-center">
                             <AnimateOnScroll className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                                <div className="bg-muted/50 p-8 rounded-lg">
                                    <h3 className="text-2xl font-bold font-headline">Ready to Create a Perfect Favicon?</h3>
                                    <p className="mt-2 text-foreground/80">Generate a favicon from an image, text, or emoji with our easy-to-use tool.</p>
                                    <Button asChild size="lg" className="mt-6">
                                        <Link href="/apps/2">Try the Favicon Generator <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
