import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function CertificationsSection() {
  const { dictionary } = useLanguage();
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dictionary.certifications.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.certifications.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.certifications.certificationList.map((cert) => (
            <Link
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-card/90 transition-colors group"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold flex items-center gap-2">
                  {cert.name}
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
