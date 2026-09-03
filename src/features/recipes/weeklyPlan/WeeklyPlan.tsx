import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2 } from "@sb1/ffe-core-react";
import { usePlannedRecipes } from "./hooks/usePlannedRecipes.ts";
import { ResetPlanButton } from "./resetPlanButton/ResetPlanButton.tsx";
import { useTexts } from "./texts.ts";
import styles from "./weeklyPlan.module.css";
import { WeeklyPlanList } from "./weeklyPlanList/WeeklyPlanList.tsx";

export function WeeklyPlan() {
  const texts = useTexts();
  const plannedRecipes = usePlannedRecipes();

  return (
    <div className={styles.WeeklyPlanContainer}>
      <CardBase className={styles.WeeklyPlanCard}>
        <div className={styles.WeeklyPlanHeader}>
          <Heading2 lookLike={4} className={styles.WeeklyPlanHeading}>
            {texts.weeklyPlan}
          </Heading2>
          <ResetPlanButton plannedRecipes={plannedRecipes} />
        </div>
        <WeeklyPlanList plannedRecipes={plannedRecipes} />
      </CardBase>
    </div>
  );
}
