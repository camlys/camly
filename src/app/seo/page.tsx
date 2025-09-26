import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Search, Target, Link as LinkIcon, Edit, MapPin, ShoppingCart, FileText, BarChartBig, Lightbulb, LineChart, Users, QrCode, Calculator, Image as ImageIcon, Crop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';
import { apps } from '@/lib/apps-config';

export const metadata: Metadata = {
  title: 'SEO Services & Strategy',
  description: 'Elevate your online presence with Camly\'s expert SEO services. We offer comprehensive strategies including keyword research, on-page optimization, link building, and technical SEO to boost your rankings and drive organic traffic.',
  keywords: ['SEO services', 'search engine optimization', 'keyword research', 'on-page SEO', 'technical SEO', 'link building', 'organic traffic', 'SEO audit', 'local SEO', 'ecommerce SEO', 'content marketing'],
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
        title: "On-Page SEO",
        description: "We optimize your content, meta tags, and site structure to be search engine friendly, improving your chances of ranking for competitive terms.",
        delay: 100,
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Technical SEO",
        description: "We perform in-depth technical audits to fix issues related to site speed, mobile-friendliness, crawlability, and indexing that could be hurting your ranking.",
        delay: 200,
    },
    {
        icon: <LinkIcon className="h-8 w-8 text-primary" />,
        title: "Quality Link Building",
        description: "Building a strong backlink profile is crucial. We focus on acquiring high-quality, relevant links to boost your site's authority and trustworthiness.",
        delay: 300,
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Content Marketing",
        description: "Engaging, high-quality content is the fuel for SEO success. We help you create and promote content that attracts, informs, and converts your target audience.",
        delay: 400,
    },
    {
        icon: <MapPin className="h-8 w-8 text-primary" />,
        title: "Local SEO",
        description: "Dominate the local search results. We optimize your Google Business Profile and build local citations to attract customers in your geographical area.",
        delay: 500,
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: "E-commerce SEO",
        description: "Drive more sales with our specialized e-commerce SEO services. We optimize product pages, improve site architecture, and implement strategies to reduce cart abandonment.",
        delay: 600,
    },
    {
        icon: <BarChartBig className="h-8 w-8 text-primary" />,
        title: "Analytics and Reporting",
        description: "We provide transparent, detailed reports that track your key performance indicators. Understand your ROI and see the direct impact of our SEO efforts.",
        delay: 700,
    }
];

const seoProcess = [
  {
    step: "01",
    title: "Discovery & SEO Audit",
    description: "We start by understanding your business, goals, and target audience. A comprehensive technical, on-page, and off-page SEO audit reveals your current standing and opportunities for growth."
  },
  {
    step: "02",
    title: "Strategy & Keyword Research",
    description: "Based on the audit, we develop a tailored SEO strategy. In-depth keyword research allows us to target terms that your ideal customers are searching for, balancing search volume with competitive reality."
  },
  {
    step: "03",
    title: "Implementation",
    description: "Our team gets to work. This includes fixing technical issues, optimizing your site's content and structure, creating new content, and building high-quality backlinks."
  },
  {
    step: "04",
    title: "Monitoring & Reporting",
    description: "SEO is an ongoing process. We continuously monitor your rankings, traffic, and conversions. You'll receive regular, easy-to-understand reports that show your progress and our impact."
  },
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

                <AnimateOnScroll tag="section" className="w-full py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                     <div className="container">
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
                                </CardHeader>
                                 <CardContent className="pt-0">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                                </Card>
                            </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
                
                 <AnimateOnScroll tag="section" className="w-full py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                            Integrated Tools to Boost Your Online Presence
                            </h2>
                            <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                                Effective SEO is supported by great tools. Our application suite is designed to enhance your digital footprint.
                            </p>
                        </div>
                        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-5">
                            {apps.map((app, index) => (
                            <AnimateOnScroll
                                key={index}
                                className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
                                delay={app.delay}
                            >
                               <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                                  <CardHeader>
                                    <div className="mb-4">{app.icon}</div>
                                    <CardTitle className="font-headline">{app.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground">{app.description}</p>
                                </CardContent>
                                </Card>
                            </AnimateOnScroll>
                            ))}
                        </div>
                         <div className="text-center mt-12">
                            <Button asChild size="lg">
                                <Link href="/#apps">Explore All Apps</Link>
                            </Button>
                        </div>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll tag="section" className="w-full py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="container">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                                Our Proven SEO Process
                            </h2>
                            <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                                A transparent and effective process designed for results.
                            </p>
                        </div>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
                            {seoProcess.map((item, index) => (
                                <AnimateOnScroll key={index} className="relative group mb-12 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                                    <div className="md:flex items-center md:even:flex-row-reverse">
                                        <div className="md:w-5/12">
                                            <div className="md:group-even:text-right md:group-odd:pl-8 md:group-even:pr-8">
                                                <p className="text-8xl font-black text-primary/10">{item.step}</p>
                                                <h3 className="text-2xl font-bold font-headline mt-2">{item.title}</h3>
                                                <p className="text-foreground/80 mt-2">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block w-2/12">
                                            <div className="w-8 h-8 mx-auto bg-primary rounded-full border-4 border-background shadow-lg"></div>
                                        </div>
                                        <div className="md:w-5/12"></div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>


                <AnimateOnScroll tag="section" className="w-full py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <div className="container">
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
                                <LineChart className="h-8 w-8 text-primary mt-1 shrink-0" />
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
                            <div className="flex items-start gap-4">
                                <Lightbulb className="h-8 w-8 text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold font-headline">Custom Strategies</h3>
                                    <p className="text-foreground/80">We don't do 'one-size-fits-all'. Every campaign is uniquely tailored to your specific business goals, industry, and competitive landscape.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Users className="h-8 w-8 text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold font-headline">Dedicated Support</h3>
                                    <p className="text-foreground/80">You get more than just a service; you get a partner. Our team is always available to answer your questions and provide expert guidance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </main>
            <Footer />
        </div>
    );
}

    



