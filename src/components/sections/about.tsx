"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
  const profilePic = PlaceHolderImages.find((img) => img.id === "profile-pic");
  const { dictionary } = useLanguage();

  return (
    <section id="about" className="relative w-full overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  {dictionary.hero.title}
                </h1>
                <p className="max-w-3xl text-lg text-foreground md:text-xl">
                  {dictionary.hero.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="#featured">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {dictionary.hero.viewDemo}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/25 px-6"
              >
                <Link href="#projects">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {dictionary.hero.viewProjects}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/25 px-6"
              >
                <Link href="#contact">
                  <MessageSquareText className="mr-2 h-5 w-5" />
                  {dictionary.hero.contact}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 -z-10 h-72 rounded-[2rem] bg-primary/10 blur-3xl" />
            <Card className="overflow-hidden rounded-[2rem] border-border/70 bg-card/95 shadow-2xl shadow-primary/10">
              <CardContent className="space-y-6 p-6 md:p-8">
                {profilePic && (
                  <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-secondary">
                    <Image
                      src={profilePic.imageUrl}
                      alt={profilePic.description}
                      data-ai-hint={profilePic.imageHint}
                      width={520}
                      height={520}
                      className="aspect-[4/4.2] w-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="border-t border-border/70 pt-1" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
