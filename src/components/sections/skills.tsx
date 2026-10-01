"use client";

import {
  Bot,
  Boxes,
  DatabaseZap,
  Headset,
  Network,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

const iconMap = {
  automation: Workflow,
  support: Headset,
  data: DatabaseZap,
  ai: Bot,
  infrastructure: Network,
  systems: Boxes,
};

export default function SkillsSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="skills" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {dictionary.skills.title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {dictionary.skills.description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.skills.categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Boxes;

            return (
              <Card
                key={category.title}
                className="rounded-[1.75rem] border-border/70 bg-card/85 shadow-sm"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
