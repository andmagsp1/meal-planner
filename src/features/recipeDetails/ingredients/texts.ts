import { useLanguage } from "../../../i18n/LanguageContext.tsx";

const texts = {
  no: { ingredients: "Ingredienser" },
  en: { ingredients: "Ingredients" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
