"use client";

import { useLanguage } from "@/context/language-context";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dictionary.education.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.education.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 py-12">
          {dictionary.education.educationList.map((edu) => (
            <div key={edu.institution} className="grid gap-4 md:grid-cols-[1fr_250px] md:gap-8">
              <div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-base font-medium text-primary">
                  {edu.institution}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
