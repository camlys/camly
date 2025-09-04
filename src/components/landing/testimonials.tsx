"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";

const testimonials = [
  {
    quote: "Camly has transformed the way our team works. The efficiency gains have been incredible, and the platform is a joy to use. I can't recommend it enough!",
    name: "Mahirani",
    title: "CEO, Innovate Inc.",
    avatar: "M",
    image: "https://picsum.photos/100/100?random=1",
    aiHint: "woman portrait"
  },
  {
    quote: "The collaborative features are second to none. Our projects are more organized, and communication has never been smoother. A must-have tool for any modern business.",
    name: "Vikash Kumar",
    title: "Project Manager, Tech Solutions",
    avatar: "VK",
    image: "https://picsum.photos/100/100?random=2",
    aiHint: "man portrait"
  },
  {
    quote: "From implementation to daily use, the Camly team has been incredibly supportive. The platform is robust, secure, and has exceeded all our expectations.",
    name: "Rajan Kumar",
    title: "Operations Director, Growth Co.",
    avatar: "RK",
    image: "https://picsum.photos/100/100?random=3",
    aiHint: "man smiling"
  },
];

export function Testimonials() {
  return (
    <AnimateOnScroll
      tag="section"
      id="testimonials"
      className="w-full py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Loved by Teams Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col h-full justify-between p-6">
                      <p className="text-lg italic text-foreground/90">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-4 pt-6 mt-auto">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </AnimateOnScroll>
  );
}
