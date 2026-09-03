import { useLanguage } from "../../../i18n/LanguageContext.tsx";

const texts = {
  no: { addToWeeklyPlan: "Legg til i ukesplan" },
  en: { addToWeeklyPlan: "Add to weekly plan" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
