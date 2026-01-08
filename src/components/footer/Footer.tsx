import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p className={styles.text}>© 2026 Meal Planner</p>
    </footer>
  );
}
