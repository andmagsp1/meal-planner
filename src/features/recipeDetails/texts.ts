import { useLanguage } from "../../i18n/LanguageContext.tsx";

const texts = {
  no: {
    loading: "Laster...",
    errorLoadingRecipe: "Feil ved lasting av oppskrift.",
  },
  en: {
    loading: "Loading...",
    errorLoadingRecipe: "Error loading recipe.",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
