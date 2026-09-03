import { useLanguage } from "../../../i18n/LanguageContext.tsx";

const texts = {
  no: { steps: "Fremgangsmåte" },
  en: { steps: "Steps" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
