import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp, Users, Target } from "lucide-react";
import Image from "next/image";

const seoBenefits = [
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Increase Organic Traffic",
        description: "Attract more visitors by ranking higher for the keywords that matter most to your business.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Reach Your Target Audience",
        description: "Connect with customers who are actively searching for the solutions you provide.",
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Achieve Higher ROI",
        description: "SEO provides a sustainable return on investment by delivering consistent, high-quality leads.",
    },
]

export function SeoHighlight() {
  return (
    <AnimateOnScroll
      tag="section"
      id="seo-highlight"
      className="w-full py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
    >
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                            Unlock Growth with SEO
                        </h2>
                        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
                            A great product deserves to be seen. Our expert SEO services help you climb the rankings and connect with your audience.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {seoBenefits.map((benefit, index) => (
                             <div key={index} className="flex items-start gap-4">
                                {benefit.icon}
                                <div>
                                    <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
                                    <p className="text-foreground/80">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-8">
                        <Button size="lg" asChild variant="outline">
                            <Link href="/seo">Learn More About SEO</Link>
                        </Button>
                    </div>
                </div>
                 <Image
                    src="https://picsum.photos/seed/seo-highlight/1000/1000"
                    alt="SEO Growth Chart"
                    width={1000}
                    height={1000}
                    data-ai-hint="seo chart"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
            </div>
        </div>
    </AnimateOnScroll>
  );
}
