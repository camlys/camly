import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { AppGrid } from '@/components/landing/app-grid';
import { Features } from '@/components/landing/features';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { SeoHighlight } from '@/components/landing/seo-highlight';
import { Faq } from '@/components/landing/faq';
import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from '@/components/landing/footer';
import { BlogHighlight } from '@/components/landing/blog-highlight';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="bg-secondary">
         <AppGrid />
        </div>
        <div className="bg-background">
          <Features />
        </div>
        <div className="bg-secondary">
          <Testimonials />
        </div>
         <div className="bg-background">
          <BlogHighlight />
        </div>
        <div className="bg-muted/50">
          <Cta />
        </div>
        <div className="bg-background">
          <SeoHighlight />
        </div>
        <div className="bg-secondary">
          <Faq />
        </div>
        <div className="bg-muted/50">
          <ContactForm />
        </div>
      </main>      
      <Footer />
    </div>
  );
}
