import { useLanguage } from "../../../../i18n/LanguageContext.tsx";

const texts = {
  no: { resetPlan: "Tøm ukesplan" },
  en: { resetPlan: "Clear plan" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
