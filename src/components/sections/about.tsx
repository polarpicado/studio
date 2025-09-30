import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { professionalSummary } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const profilePic = PlaceHolderImages.find((img) => img.id === "profile-pic");

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Joao Basanta
            </h1>
            <h2 className="text-xl text-primary md:text-2xl font-medium">
              System Engineer & Automation Expert
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {professionalSummary}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {profilePic && (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                data-ai-hint={profilePic.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square shadow-lg border-4 border-card"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
