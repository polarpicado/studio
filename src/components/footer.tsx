"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { dictionary } = useLanguage();

  return (
    <footer className="border-t bg-background/70 py-6 backdrop-blur-md md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          &copy; {currentYear} Joao Basanta. {dictionary.footer.rights}
        </p>
        <p className="text-center text-sm text-muted-foreground">
          {dictionary.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
