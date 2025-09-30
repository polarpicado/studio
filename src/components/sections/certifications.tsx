import { Award } from "lucide-react";
import { useLanguage } from "@/context/language-context";

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
            <div
              key={cert.name}
              className="flex items-start gap-4 p-4 rounded-lg bg-card"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
