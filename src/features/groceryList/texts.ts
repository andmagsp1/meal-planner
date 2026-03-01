import { useLanguage } from "../../i18n/LanguageContext.tsx";

const texts = {
  no: {
    loading: "Laster...",
    errorLoadingGroceryList: "Feil ved lasting av handleliste.",
    groceryList: "Handleliste",
  },
  en: {
    loading: "Loading...",
    errorLoadingGroceryList: "Error loading grocery list.",
    groceryList: "Grocery List",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
