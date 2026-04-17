"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function ImpactMetricsSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="impact" className="w-full py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.metrics.items.map((item) => (
            <Card
              key={item.value + item.label}
              className="rounded-[1.75rem] border-border/70 bg-card/90"
            >
              <CardContent className="space-y-3 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  {item.label}
                </p>
                <p className="text-4xl font-black tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
