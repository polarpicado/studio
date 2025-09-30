"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionary as enDictionary } from "@/lib/dictionaries/en";
import { dictionary as esDictionary } from "@/lib/dictionaries/es";

type Language = "en" | "es";
type Dictionary = typeof enDictionary;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const dictionary = language === "en" ? enDictionary : esDictionary;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
