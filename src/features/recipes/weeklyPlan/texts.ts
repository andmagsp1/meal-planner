import { useLanguage } from "../../../i18n/LanguageContext";

const texts = {
  no: {
    weeklyPlan: "Ukesplan",
  },
  en: { weeklyPlan: "Weekly plan" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
