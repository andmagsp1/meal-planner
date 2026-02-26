import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";

type Lang = "no" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("no");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslation() {
  const { lang } = useLanguage();
  return {
    t: (key: string) => translations[key]?.[lang] ?? key,
  };
}
