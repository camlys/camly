import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "SEO", href: "/seo" },
    { name: "Contact", href: "/#contact"}
  ]

  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-bold font-headline">Camly</span>
          </div>
           <nav className="flex gap-4 sm:gap-6">
              {footerLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-foreground/60 hover:text-foreground">
                  {link.name}
                </Link>
              ))}
          </nav>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-foreground/70" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
         <div className="mt-6 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Camly. All rights reserved.
          </div>
      </div>
    </footer>
  );
}
