"use client";

import { useLanguage } from "@/context/language-context";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dictionary.experience.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.experience.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 py-12">
          {dictionary.experience.experienceList.map((job) => (
            <div key={`${job.role}-${job.company}`} className="grid gap-4 md:grid-cols-[1fr_250px] md:gap-8">
              <div>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-base font-medium text-primary">
                  {job.company}
                </p>
                <div className="mt-2 text-sm text-muted-foreground">
                    <p>{job.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
