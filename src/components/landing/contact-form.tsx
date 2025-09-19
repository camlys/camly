"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Card, CardContent } from "../ui/card";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await submitContactForm(null, formData);

    if (result.errors && Object.keys(result.errors).length > 0) {
      toast({
        title: "Error submitting form",
        description: result.message,
        variant: "destructive",
      });
      Object.entries(result.errors).forEach(([key, value]) => {
        form.setError(key as keyof z.infer<typeof formSchema>, {
          type: "manual",
          message: value?.[0] || "Invalid input",
        });
      });
    } else {
      toast({
        title: "Success!",
        description: result.message,
      });
      form.reset();
    }
  }

  return (
    <AnimateOnScroll
      tag="section"
      id="contact"
      className="w-full py-20 md:py-24 bg-muted/50 data-[state=closed]:opacity-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-10"
    >
      <div className="container">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-xl">
              Have questions or want a personalized demo? We're here to help.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
                    <p className="text-foreground/80">
                        Reach out to us via email, phone, or visit our office. We look forward to hearing from you.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:support@camly.site" className="hover:underline">support@camly.site</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <span>+91 84348 28368</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <span>123 Camly pvt. Chandini chowk, Begusarai 851101</span>
                    </div>
                </div>
                 <div className="flex items-center gap-4 pt-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Twitter className="h-6 w-6 text-foreground/70" /></Link>
                    </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Linkedin className="h-6 w-6 text-foreground/70" /></Link>
                    </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Facebook className="h-6 w-6 text-foreground/70" /></Link>
                    </Button>
                </div>
            </div>
             <Card>
                <CardContent className="p-6">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Tell us how we can help"
                                className="min-h-[120px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
