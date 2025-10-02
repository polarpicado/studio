"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
