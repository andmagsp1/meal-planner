import { useLanguage } from "../../i18n/LanguageContext";

const texts = {
  no: {
    recipes: "Oppskrifter",
    loading: "Laster...",
    errorLoadingRecipes: "Feil ved lasting av oppskrifter.",
  },
  en: {
    recipes: "Recipes",
    loading: "Loading...",
    errorLoadingRecipes: "Error loading recipes.",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
