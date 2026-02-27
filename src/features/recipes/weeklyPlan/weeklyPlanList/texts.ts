import { useLanguage } from "../../../../i18n/LanguageContext.tsx";

const texts = {
  no: { noMealsInPlan: "Ingen måltider lagt til ennå." },
  en: { noMealsInPlan: "No meals added yet." },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
