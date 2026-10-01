"use client";

import { Bot, ScanSearch, ShieldCheck, Workflow } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const STEP_ICONS = [ScanSearch, Workflow, Bot, ShieldCheck];

export default function HowIWorkSection() {
  const { dictionary } = useLanguage();
  const { title, description, steps } = dictionary.process;

  return (
    <section id="process" className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-accent/10 xl:block"
          />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length];
              return (
                <li
                  key={step.title}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-background text-primary shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div className="mt-5 flex-1 rounded-[1.5rem] border border-border/70 bg-card/80 p-5 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/30">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
