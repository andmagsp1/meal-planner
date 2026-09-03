import { useLanguage } from "../../../i18n/LanguageContext";

const texts = {
  no: { searchLabel: "Søk etter oppskrifter" },
  en: { searchLabel: "Search recipes" },
};

export function useTexts() {
  const { lang } = useLanguage();
  return texts[lang];
}
