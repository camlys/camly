import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/landing/animate-on-scroll";
import { Zap, Users, ShieldCheck, PieChart } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Blazing Fast Performance",
    description: "Our platform is optimized for speed, ensuring your team can work without interruption or delay.",
    delay: 0,
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Workspace",
    description: "Enable seamless teamwork with shared projects, real-time editing, and integrated communication tools.",
    delay: 150,
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Protect your sensitive data with end-to-end encryption, role-based access, and regular security audits.",
    delay: 300,
  },
  {
    icon: <PieChart className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights into your team's performance with our powerful and intuitive analytics dashboard.",
    delay: 450,
  },
];

export function Features() {
  return (
    <section id="features" className="container py-20 md:py-24 px-4 md:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Everything You Need to Succeed
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Discover the powerful features that make Camly the perfect solution for your business.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <AnimateOnScroll
            key={index}
            className="data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4"
            delay={feature.delay}
          >
            <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
