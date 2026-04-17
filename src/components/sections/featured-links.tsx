"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function FeaturedLinksSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="featured" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {dictionary.featured.title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {dictionary.featured.description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {dictionary.featured.links.map((item) => (
            <Card
              key={item.title}
              className="group rounded-[1.75rem] border-border/70 bg-card/95 shadow-sm transition-transform hover:-translate-y-1"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="w-full rounded-full">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
