import { BackButton } from "@sb1/ffe-buttons-react";
import { Link } from "@tanstack/react-router";
import styles from "./backButton.module.css";
import { useTexts } from "./texts.ts";

export function BackButtonLink({ to }: { to: string }) {
  const texts = useTexts();

  return (
    <div className={styles.BackButtonContainer}>
      <BackButton as={Link} to={to}>
        {texts.back}
      </BackButton>
    </div>
  );
}
