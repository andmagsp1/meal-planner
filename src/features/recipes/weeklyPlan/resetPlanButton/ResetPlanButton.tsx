import { TertiaryButton } from "@sb1/ffe-buttons-react";
import type { Recipe } from "../../../../../server/types.ts";
import { useClearPlan } from "./hooks/useClearPlan.ts";
import styles from "./resetPlanButton.module.css";
import { useTexts } from "./texts.ts";

interface Props {
  plannedRecipes: Recipe[] | undefined;
}

export function ResetPlanButton({ plannedRecipes }: Props) {
  const { clearPlan } = useClearPlan();
  const texts = useTexts();

  if (!plannedRecipes || plannedRecipes.length === 0) {
    return null;
  }

  return (
    <TertiaryButton onClick={clearPlan} className={styles.ResetPlanButton}>
      {texts.resetPlan}
    </TertiaryButton>
  );
}
