"use client";

import { useLanguage } from "@/context/language-context";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const VISIBLE_ITEMS = 3;

export default function ExperienceSection() {
  const { dictionary } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleJobs = isExpanded
    ? dictionary.experience.experienceList
    : dictionary.experience.experienceList.slice(0, VISIBLE_ITEMS);

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
          {visibleJobs.map((job) => (
            <div
              key={`${job.role}-${job.company}`}
              className="flex items-start gap-6 md:gap-8"
            >
              {job.logo_light && job.logo_dark && (
                <div className={`relative flex-shrink-0 ${
                    job.company === 'Camposol' ? 'h-14 w-14' : 'h-12 w-12'
                }`}>
                  <Image
                    src={job.logo_light}
                    alt={`${job.company} logo`}
                    fill
                    className={`object-contain block dark:hidden rounded-full ${
                      job.company === 'Camposol' ? '' : 'border border-black'
                    }`}
                  />
                  <Image
                    src={job.logo_dark}
                    alt={`${job.company} logo`}
                    fill
                    className={`object-contain hidden dark:block rounded-full ${
                      job.company === 'Camposol' ? '' : 'border border-white'
                    }`}
                  />
                </div>
              )}
              <div className="grid gap-4 flex-1">
                <div className="grid gap-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary">
                    {job.company}
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>{job.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {dictionary.experience.experienceList.length > VISIBLE_ITEMS && (
            <div className="flex justify-center">
                <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)}>
                    <span>{isExpanded ? 'Mostrar menos' : 'Mostrar más'}</span>
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}
