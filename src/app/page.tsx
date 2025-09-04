import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { AppGrid } from '@/components/landing/app-grid';
import { Features } from '@/components/landing/features';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { Faq } from '@/components/landing/faq';
import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AppGrid />
        <Features />
        <Testimonials />
        <Cta />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
