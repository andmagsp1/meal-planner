import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className={styles.title}>Meal Planner</h1>
      </a>
    </header>
  );
}
