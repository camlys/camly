import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";

const faqs = [
  {
    question: "What is Camly and how can it help my business?",
    answer:
      "Camly is a comprehensive suite of productivity tools designed to streamline your workflow, enhance collaboration, and provide actionable insights through advanced analytics. It helps teams work more efficiently and make data-driven decisions.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to get started. You can sign up and start exploring Camly's capabilities today.",
  },
  {
    question: "What kind of security measures are in place?",
    answer:
      "We take data security very seriously. Camly uses enterprise-grade security protocols, including end-to-end encryption, role-based access control, and regular third-party security audits to ensure your data is always protected.",
  },
  {
    question: "Can Camly integrate with other tools I use?",
    answer:
      "Absolutely. Camly is designed to fit seamlessly into your existing ecosystem. We offer a wide range of integrations with popular tools for project management, communication, and more. You can find a full list on our integrations page.",
  },
];

export function Faq() {
  return (
    <AnimateOnScroll
      tag="section"
      id="faq"
      className="container py-20 md:py-24 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Find answers to common questions about Camly.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
             <AnimateOnScroll 
                key={index}
                delay={index * 150}
                className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4"
              >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimateOnScroll>
          ))}
        </Accordion>
      </div>
    </AnimateOnScroll>
  );
}
