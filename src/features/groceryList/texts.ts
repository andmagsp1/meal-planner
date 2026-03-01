import { useLanguage } from "../../i18n/LanguageContext.tsx";

const texts = {
  no: {
    loading: "Laster...",
  },
  en: {
    loading: "Loading...",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
