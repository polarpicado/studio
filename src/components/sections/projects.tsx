"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Lock, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProjectsSection() {
  const { dictionary } = useLanguage();

  return (
    <section id="projects" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {dictionary.projects.title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {dictionary.projects.description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 xl:grid-cols-2">
          {dictionary.projects.projectList.map((project) => {
            const projectImage = PlaceHolderImages.find(
              (img) => img.id === project.id
            );
            const demoUrl =
              "demoUrl" in project && typeof project.demoUrl === "string"
                ? project.demoUrl
                : undefined;
            const flowSteps =
              "flowSteps" in project && Array.isArray(project.flowSteps)
                ? project.flowSteps
                : undefined;

            return (
              <Card
                key={project.id}
                className="flex flex-col overflow-hidden rounded-[1.75rem] border-border/70 bg-card/90"
              >
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={projectImage.description}
                    data-ai-hint={projectImage.imageHint}
                    width={600}
                    height={400}
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="h-56 w-full object-cover"
                  />
                )}
                <CardHeader className="space-y-4">
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary"
                    >
                      {project.tag}
                    </Badge>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {project.summary}
                    </CardDescription>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {dictionary.projects.problemLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-secondary-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {dictionary.projects.solutionLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-secondary-foreground">
                        {project.solution}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {dictionary.projects.resultLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-secondary-foreground">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.value + metric.label}
                        className="rounded-2xl border border-border/70 bg-background/90 p-4"
                      >
                        <p className="text-2xl font-black tracking-tight text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {flowSteps && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full rounded-full">
                          <Workflow className="mr-2" />
                          {dictionary.projects.viewFlow}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>{dictionary.projects.flowTitle}</DialogTitle>
                          <DialogDescription>{project.title}</DialogDescription>
                        </DialogHeader>
                        <ol className="relative space-y-4 pl-1">
                          {flowSteps.map((step, index) => (
                            <li key={step} className="relative flex gap-4">
                              {index < flowSteps.length - 1 && (
                                <span className="absolute left-4 top-9 h-[calc(100%-1.25rem)] w-px bg-gradient-to-b from-primary/50 to-primary/10" />
                              )}
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                                {index + 1}
                              </span>
                              <p className="pt-1 text-sm leading-6 text-foreground">{step}</p>
                            </li>
                          ))}
                        </ol>
                        <p className="flex items-center gap-2 rounded-2xl bg-secondary p-3 text-xs text-muted-foreground">
                          <Lock className="h-4 w-4 shrink-0" />
                          {dictionary.projects.confidential}
                        </p>
                      </DialogContent>
                    </Dialog>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {demoUrl && (
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
