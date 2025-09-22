import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/landing/animate-on-scroll';
import Link from 'next/link';
import { apps } from '@/lib/apps-config';

export function AppGrid() {
  return (
    <section id="apps" className="container py-20 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Explore Our Applications
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Discover powerful tools to enhance your workflow and productivity.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((app, index) => (
          <AnimateOnScroll
            key={index}
            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
            delay={app.delay}
          >
            <Link href={`/apps/${index}`} className="h-full block">
              <div className="h-full animated-border-card rounded-lg">
                <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <AnimateOnScroll
                      className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
                      delay={app.delay + 100}
                    >
                      <div className="mb-4">{app.icon}</div>
                    </AnimateOnScroll>
                    <AnimateOnScroll
                      className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-2"
                      delay={app.delay + 200}
                    >
                      <CardTitle className="font-headline">
                        {app.title}
                      </CardTitle>
                    </AnimateOnScroll>
                    <AnimateOnScroll
                      className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-3"
                      delay={app.delay + 300}
                    >
                      <CardDescription className="pt-2">
                        {app.description}
                      </CardDescription>
                    </AnimateOnScroll>
                  </CardHeader>
                </Card>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
