"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { dictionary } = useLanguage();
  const { toast } = useToast();

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, dictionary.contact.validation.name),
        email: z.string().email(dictionary.contact.validation.email),
        message: z.string().min(10, dictionary.contact.validation.message),
      }),
    [dictionary]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? dictionary.contact.errorDescription);
      }

      toast({
        title: dictionary.contact.successTitle,
        description: dictionary.contact.successDescription,
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: dictionary.contact.errorTitle,
        description:
          error instanceof Error
            ? error.message
            : dictionary.contact.errorDescription,
      });
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {dictionary.contact.title}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dictionary.contact.description}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group w-full rounded-full border-[#25D366]/50 bg-card/60 px-6 backdrop-blur hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
          >
            <a
              href={dictionary.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-[#25D366] transition-colors group-hover:text-white" />
              {dictionary.contact.whatsappLabel}
            </a>
          </Button>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <Card className="rounded-[1.75rem] border-border/70 bg-card/95">
            <CardContent className="p-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 text-left"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">{dictionary.contact.nameLabel}</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder={dictionary.contact.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{dictionary.contact.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder={dictionary.contact.emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{dictionary.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder={dictionary.contact.messagePlaceholder}
                    className="min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" disabled={isSubmitting} className="rounded-full">
                  {isSubmitting
                    ? dictionary.contact.sending
                    : dictionary.contact.sendMessage}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
