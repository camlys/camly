import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Search, Target, Link as LinkIcon, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services & Strategy',
  description: 'Elevate your online presence with Camly\'s expert SEO services. We offer comprehensive strategies including keyword research, on-page optimization, link building, and technical SEO to boost your rankings and drive organic traffic.',
  keywords: ['SEO services', 'search engine optimization', 'keyword research', 'on-page SEO', 'technical SEO', 'link building', 'organic traffic'],
  openGraph: {
    title: 'Expert SEO Services to Boost Your Ranking | Camly',
    description: 'Unlock your website\'s potential with our data-driven SEO strategies. From keyword analysis to content optimization, we cover all aspects of search engine optimization.',
    images: ['/og-image-seo.png'],
  },
  twitter: {
    title: 'Expert SEO Services to Boost Your Ranking | Camly',
    description: 'Unlock your website\'s potential with our data-driven SEO strategies.',
    images: ['/og-image-seo.png'],
  },
};

const seoServices = [
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Keyword Research & Strategy",
        description: "We identify high-value keywords to target the right audience and drive relevant traffic to your site. Our strategy is built on data-driven insights to maximize your visibility.",
        delay: 0,
    },
    {
        icon: <Edit className="h-8 w-8 text-primary" />,
        title: "On-Page SEO & Content Optimization",
        description: "Our experts optimize your content, meta tags, and site structure to be search engine friendly, improving your chances of ranking for competitive terms.",
        delay: 150,
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Technical SEO Audit",
        description: "We perform in-depth technical audits to fix issues related to site speed, mobile-friendliness, crawlability, and indexing that could be hurting your ranking.",
        delay: 300,
    },
    {
        icon: <LinkIcon className="h-8 w-8 text-primary" />,
        title: "Quality Link Building",
        description: "Building a strong backlink profile is crucial. We focus on acquiring high-quality, relevant links to boost your site's authority and trustworthiness.",
        delay: 450,
    }
];

export default function SEOPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <AnimateOnScroll tag="section" className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="flex flex-col items-start gap-6">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-gradient-to-r from-primary via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
                            Dominate Search Rankings with Expert SEO
                        </h1>
                        <p className="max-w-[600px] text-foreground/80 md:text-xl">
                            Unlock your website's true potential. Our data-driven SEO services are designed to increase your visibility, drive organic traffic, and convert visitors into customers.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" asChild>
                                <Link href="/#contact">Get a Free SEO Audit</Link>
                            </Button>
                        </div>
                    </div>
                    <Image
                        src="https://picsum.photos/seed/seo1/1200/800"
                        alt="SEO Strategy"
                        width={1200}
                        height={800}
                        data-ai-hint="seo analytics"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    />
                </AnimateOnScroll>

                <AnimateOnScroll tag="section" className="container py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                     <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        Our Comprehensive SEO Services
                        </h2>
                        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                            We cover every angle of SEO to build a holistic strategy for your success.
                        </p>
                    </div>
                    <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {seoServices.map((service, index) => (
                        <AnimateOnScroll
                            key={index}
                            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
                            delay={service.delay}
                        >
                            <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <CardHeader>
                                <div className="mb-4">{service.icon}</div>
                                <CardTitle className="font-headline">{service.title}</CardTitle>
                                <CardContent className="p-0 pt-4">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </CardHeader>
                            </Card>
                        </AnimateOnScroll>
                        ))}
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll tag="section" className="container py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                            Why Choose Camly for SEO?
                        </h2>
                         <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                            Our approach is transparent, strategic, and always focused on delivering measurable results.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="h-8 w-8 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold font-headline">Proven Results</h3>
                                <p className="text-foreground/80">Our track record speaks for itself. We've helped businesses across various industries achieve top rankings and significant growth in organic traffic.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <BarChart className="h-8 w-8 text-primary mt-1 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold font-headline">Transparent Reporting</h3>
                                <p className="text-foreground/80">You'll receive detailed, easy-to-understand reports that show your progress, keyword rankings, and the direct impact of our efforts on your bottom line.</p>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </main>
            <Footer />
        </div>
    );
}