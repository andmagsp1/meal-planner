import { useLanguage } from "../../../i18n/LanguageContext";

const texts = {
  no: { noResults: "Ingen oppskrifter funnet.", addToWeeklyPlan: "Legg til i ukesplan" },
  en: { noResults: "No recipes found.", addToWeeklyPlan: "Add to weekly plan" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
