import { Checkbox } from "@sb1/ffe-form-react";
import { useHandleMeal } from "../../recipes/recipesList/hooks/useHandleMeal.ts";
import { usePlan } from "../../recipes/recipesList/hooks/usePlan.ts";
import styles from "./weeklyPlanCheckbox.module.css";
import { useTexts } from "./texts.ts";

export function WeeklyPlanCheckbox({ recipeId }: { recipeId: string }) {
  const texts = useTexts();
  const { toggleMeal } = useHandleMeal();
  const { isInPlan } = usePlan();

  return (
    <div className={styles.MealCheckbox}>
      <Checkbox
        checked={isInPlan(recipeId)}
        onChange={() => toggleMeal(recipeId)}
      >
        {texts.addToWeeklyPlan}
      </Checkbox>
    </div>
  );
}
