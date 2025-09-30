"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  const { dictionary } = useLanguage();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? dictionary.contact.sending : dictionary.contact.sendMessage}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ContactSection() {
  const { dictionary } = useLanguage();
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
        reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);
  
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
              <form ref={formRef} action={formAction} className="space-y-4 text-left">
                <div className="space-y-2">
                  <Label htmlFor="name">{dictionary.contact.nameLabel}</Label>
                  <Input id="name" {...register("name")} placeholder={dictionary.contact.namePlaceholder} />
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
                    className="min-h-[100px]"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
