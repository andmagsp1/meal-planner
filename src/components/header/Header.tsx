import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import { useLanguage } from "../../i18n/LanguageContext.tsx";
import styles from "./Header.module.css";

export function Header() {
  const { lang, setLang } = useLanguage();

  return (
    <header className={styles.header}>
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className={styles.title}>Meal Planner</h1>
      </a>
      <TabGroup>
        <Tab selected={lang === "no"} onClick={() => setLang("no")}>
          NO
        </Tab>
        <Tab selected={lang === "en"} onClick={() => setLang("en")}>
          EN
        </Tab>
      </TabGroup>
    </header>
  );
}
