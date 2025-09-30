import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function AboutSection() {
  const profilePic = PlaceHolderImages.find(img => img.id === 'profile-pic');
  const { dictionary } = useLanguage();

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Joao Basanta
            </h1>
            <h2 className="text-xl text-primary md:text-2xl font-medium">
              {dictionary.about.jobTitle}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.about.professionalSummary}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">{dictionary.about.contactMe}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">{dictionary.about.viewMyWork}</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/polarpicado"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Github />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/joaobasanta/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Linkedin />
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/@PolarPicado"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Youtube />
                </Button>
              </Link>
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
