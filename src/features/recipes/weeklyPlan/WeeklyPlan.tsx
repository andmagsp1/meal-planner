import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2 } from "@sb1/ffe-core-react";
import type { Recipe } from "../../../../server/types.ts";
import { usePlannedRecipes } from "./hooks/usePlannedRecipes.ts";
import { ResetPlanButton } from "./resetPlanButton/ResetPlanButton.tsx";
import { useTexts } from "./texts.ts";
import styles from "./weeklyPlan.module.css";
import { WeeklyPlanList } from "./weeklyPlanList/WeeklyPlanList.tsx";

interface Props {
  recipes: Recipe[] | undefined;
}

export function WeeklyPlan({ recipes }: Props) {
  const texts = useTexts();
  const plannedRecipes = usePlannedRecipes(recipes);

  return (
    <div className={styles.WeeklyPlanContainer}>
      <CardBase className={styles.WeeklyPlanCard}>
        <div className={styles.WeeklyPlanHeader}>
          <Heading2 lookLike={4} style={{ marginBottom: 0 }}>
            {texts.weeklyPlan}
          </Heading2>
          <ResetPlanButton plannedRecipes={plannedRecipes} />
        </div>
        <WeeklyPlanList plannedRecipes={plannedRecipes} />
      </CardBase>
    </div>
  );
}
