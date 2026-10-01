"use client";

import AIAssistant from "@/components/ai-assistant";
import AnimatedBackground from "@/components/animated-background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import FeaturedLinksSection from "@/components/sections/featured-links";
import HowIWorkSection from "@/components/sections/how-i-work";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-1">
        <AboutSection />
        <HowIWorkSection />
        <FeaturedLinksSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
