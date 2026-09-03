import { useLanguage } from "../../i18n/LanguageContext.tsx";

const texts = {
  no: {
    loading: "Laster...",
    errorLoadingGroceryList: "Feil ved lasting av handleliste.",
    groceryList: "Handleliste",
    emptyGroceryList: "Handlelisten er tom.",
  },
  en: {
    loading: "Loading...",
    errorLoadingGroceryList: "Error loading grocery list.",
    groceryList: "Grocery List",
    emptyGroceryList: "The grocery list is empty.",
  },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
