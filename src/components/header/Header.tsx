import { useLanguage } from "../../i18n/LanguageContext.tsx";
import styles from "./Header.module.css";

export function Header() {
  const { lang, setLang } = useLanguage();

  return (
    <header className={styles.header}>
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className={styles.title}>Meal Planner</h1>
      </a>
      <button
        className={styles.langToggle}
        onClick={() => setLang(lang === "no" ? "en" : "no")}
        type="button"
      >
        {lang === "no" ? "EN" : "NO"}
      </button>
    </header>
  );
}
