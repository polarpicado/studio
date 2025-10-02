"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { dictionary } = useLanguage();
  const webhookUrl = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_WEBHOOK_URL_PROD
    : process.env.NEXT_PUBLIC_WEBHOOK_URL_TEST;

  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
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
          <Card>
            <CardContent className="p-6">
              <form 
                action={webhookUrl} 
                method="POST" 
                className="space-y-4 text-left"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">{dictionary.contact.nameLabel}</Label>
                  <Input 
                    id="name" 
                    {...register("name")}
                    placeholder={dictionary.contact.namePlaceholder} 
                    name="nombre"
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
                    name="correo"
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
                    className="min-h-[100px]"
                    name="mensaje"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? dictionary.contact.sending : dictionary.contact.sendMessage}
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
