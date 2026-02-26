import { useTranslation } from "../../i18n/LanguageContext.tsx";
import styles from "./footer.module.css";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={`${styles.footer}`}>
      <p className={styles.text}>{t("copyright")}</p>
    </footer>
  );
}
