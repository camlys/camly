import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32 px-4 md:px-6">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
          Streamline Your Workflow, Amplify Your Results.
        </h1>
        <p className="max-w-[600px] text-foreground/80 md:text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-in-out delay-200">
          Camly provides the tools you need to optimize processes, boost
          productivity, and drive growth. Discover a smarter way to work.
        </p>
        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out delay-400">
          <Button size="lg" asChild>
            <Link href="#contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
      <Image
        src="https://picsum.photos/1200/800"
        alt="Hero Image"
        width={1200}
        height={800}
        data-ai-hint="abstract tech"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover animate-in fade-in zoom-in-95 duration-1000 ease-in-out delay-500"
      />
    </section>
  );
}
