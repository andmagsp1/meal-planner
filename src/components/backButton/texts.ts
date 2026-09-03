import { useLanguage } from "../../i18n/LanguageContext.tsx";

const texts = {
  no: {
    back: "Tilbake",
  },
  en: {
    back: "Back",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
