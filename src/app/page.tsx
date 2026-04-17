"use client";

import AIAssistant from "@/components/ai-assistant";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import FeaturedLinksSection from "@/components/sections/featured-links";
import ImpactMetricsSection from "@/components/sections/impact-metrics";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ImpactMetricsSection />
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
