import { Paragraph } from "@sb1/ffe-core-react";
import { Link } from "@tanstack/react-router";
import type { Recipe } from "../../../../../server/types.ts";
import { useTexts } from "./texts.ts";
import styles from "./weeklyPlanList.module.css";

interface Props {
  plannedRecipes: Recipe[] | undefined;
}

export function WeeklyPlanList({ plannedRecipes }: Props) {
  const texts = useTexts();

  if (!plannedRecipes || plannedRecipes.length === 0) {
    return (
      <Paragraph className={styles.NoMealsParagraph}>
        {texts.noMealsInPlan}
      </Paragraph>
    );
  }

  return (
    <ul className={styles.WeeklyPlanList}>
      {plannedRecipes.map((recipe) => (
        <li key={recipe.id} className={styles.WeeklyPlanListItem}>
          <Link to="/recipe/$recipeId" params={{ recipeId: recipe.id }}>
            {recipe.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
