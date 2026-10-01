"use client";

import { Award, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

const VISIBLE_ITEMS = 6;

export default function CertificationsSection() {
  const { dictionary } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleCerts = isExpanded
    ? dictionary.certifications.certificationList
    : dictionary.certifications.certificationList.slice(0, VISIBLE_ITEMS);

  return (
    <section
      id="certifications"
      className="w-full bg-muted/40 py-16 md:py-20 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {dictionary.certifications.title}
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            {dictionary.certifications.description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleCerts.map((cert) => {
            const content = (
              <>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="flex items-center gap-2 text-base font-bold">
                    {cert.name}
                    {cert.url && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </>
            );
            const className =
              "group flex items-start gap-4 rounded-[1.5rem] bg-card p-5 transition-colors";

            return cert.url ? (
              <Link
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} hover:bg-card/90`}
              >
                {content}
              </Link>
            ) : (
              <div key={cert.name} className={className}>
                {content}
              </div>
            );
          })}
        </div>
        {dictionary.certifications.certificationList.length > VISIBLE_ITEMS && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full"
            >
              <span>
                {isExpanded
                  ? dictionary.certifications.showLess
                  : dictionary.certifications.showMore}
              </span>
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
