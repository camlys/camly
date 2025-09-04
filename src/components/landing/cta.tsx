import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Cta() {
  return (
    <AnimateOnScroll
      tag="section"
      className="py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-8"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Ready to Elevate Your Business?
          </h2>
          <p className="mt-4 text-foreground/80 md:text-xl">
            Join thousands of satisfied teams and take your productivity to the next level.
            Start your journey with Camly today.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
