import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/app/blog/page";
import { ArrowRight } from "lucide-react";

export function BlogHighlight() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <AnimateOnScroll
      tag="section"
      id="blog"
      className="container py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          From the Blog
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Explore our latest articles and insights on productivity, technology, and more.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post, index) => (
          <AnimateOnScroll
            key={index}
            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
            delay={index * 150}
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
      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </AnimateOnScroll>
  );
}
