import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Blog | Productivity, SEO, and Business Tools Insights',
  description: 'Explore our latest articles and insights on productivity, SEO, web development, and business tools like our PDF editor and QR code generator to help you streamline your workflow and amplify your results.',
  openGraph: {
    title: 'Blog | Camly',
    description: 'Insights and articles on productivity tools from the Camly team.',
  },
};

export const posts = [
    {
        title: "5 Free Tools to Supercharge Your Productivity & Brand",
        description: "Discover five essential free tools that will streamline your workflow, enhance your brand, and boost productivity.",
        href: "/blog/5-free-tools-to-supercharge-your-brand",
        category: "Productivity",
        image: "https://picsum.photos/seed/blog4/600/400",
        aiHint: "productivity tools desk",
    },
    {
        title: "A Strategic Guide to Brand Building with Free Tools",
        description: "Learn how to build a strong brand identity from the ground up using free, powerful tools for logos, marketing, and more.",
        href: "/blog/a-guide-to-brand-building-with-free-tools",
        category: "Branding",
        image: "https://picsum.photos/seed/blog5/600/400",
        aiHint: "brand identity moodboard",
    },
    {
        title: "The Ultimate Guide to QR Codes for Small Businesses",
        description: "Learn how QR codes can revolutionize your marketing, operations, and customer engagement.",
        href: "/blog/qr-code-guide",
        category: "Marketing",
        image: "https://picsum.photos/seed/blog1/600/400",
        aiHint: "qr code business",
    },
    {
        title: "Why Every Website Needs a Great Favicon",
        description: "A deep dive into the importance of favicons for brand identity, user experience, and SEO.",
        href: "/blog/website-favicon-importance",
        category: "Web Design",
        image: "https://picsum.photos/seed/blog2/600/400",
        aiHint: "website logo browser",
    },
    {
        title: "Optimizing Images for the Web: A Beginner's Guide",
        description: "Master the art of image resizing and compression to improve your site's speed and user experience.",
        href: "/blog/image-optimization-guide",
        category: "Web Performance",
        image: "https://picsum.photos/seed/blog3/600/400",
        aiHint: "image editing software",
    },
];

export default function BlogIndexPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <AnimateOnScroll tag="section" className="container pt-20 pb-12 md:pt-28 md:pb-20 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            Camly Blog
                        </h1>
                        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                            Insights on productivity, technology, and business growth from our team of experts.
                        </p>
                    </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll tag="section" className="container pb-20 md:pb-32 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" delay={200}>
                     <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                        <AnimateOnScroll
                            key={index}
                            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
                            delay={index * 150 + 200}
                        >
                            <Link href={post.href} className="h-full block group">
                            <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                                <CardHeader className="p-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    data-ai-hint={post.aiHint}
                                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                </CardHeader>
                                <CardContent className="p-6">
                                <p className="text-sm text-primary font-medium mb-2">{post.category}</p>
                                <CardTitle className="font-headline mb-2 leading-snug">{post.title}</CardTitle>
                                <CardDescription>{post.description}</CardDescription>
                                <div className="flex items-center mt-4 text-sm font-semibold text-primary group-hover:underline">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                                </CardContent>
                            </Card>
                            </Link>
                        </AnimateOnScroll>
                        ))}
                    </div>
                </AnimateOnScroll>
            </main>
            <Footer />
        </div>
    );
}
