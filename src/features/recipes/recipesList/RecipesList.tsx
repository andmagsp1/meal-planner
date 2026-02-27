import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { addMealToPlan, removeMealFromPlan } from "../../../api/weeklyPlan.ts";
import { usePlan } from "./hooks/usePlan.ts";
import styles from "./recipesList.module.css";
import { useTexts } from "./texts";

interface Props {
  filteredList: { id: string; name: string; description: string }[] | undefined;
}

const PLAN_ID = "1";

export function RecipesList({ filteredList }: Props) {
  const texts = useTexts();
  const queryClient = useQueryClient();
  const { plan, isInPlan } = usePlan();

  const addMeal = useMutation({
    mutationFn: (recipeId: string) => addMealToPlan(PLAN_ID, recipeId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const removeMeal = useMutation({
    mutationFn: (mealId: string) => removeMealFromPlan(PLAN_ID, mealId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const getMealId = (recipeId: string): string | undefined =>
    plan?.meals.find((meal) => meal.recipeId === recipeId)?.id;

  const toggleMeal = (recipeId: string) => {
    if (isInPlan(recipeId)) {
      const mealId = getMealId(recipeId);
      if (mealId) {
        removeMeal.mutate(mealId);
      }
    } else {
      addMeal.mutate(recipeId);
    }
  };

  if (filteredList?.length === 0) {
    return <Paragraph>{texts.noResults}</Paragraph>;
  }

  return (
    <div className={styles.RecipesListContainer}>
      {filteredList?.map((recipe) => (
        <CardBase
          key={recipe.id}
          className={
            isInPlan(recipe.id) ? styles.RecipeCardBordered : styles.RecipeCard
          }
        >
          <div className={styles.RecipeCardContent}>
            <Link
              to="/recipe/$recipeId"
              params={{ recipeId: recipe.id }}
              className={styles.RecipeLink}
            >
              <Heading2 lookLike={4}>{recipe.name}</Heading2>
              <Paragraph>
                {recipe.description.length > 50
                  ? recipe.description.slice(0, 100) + "..."
                  : recipe.description}
              </Paragraph>
            </Link>
            <Checkbox
              checked={isInPlan(recipe.id)}
              onChange={() => toggleMeal(recipe.id)}
            >
              {texts.addToWeeklyPlan}
            </Checkbox>
          </div>
        </CardBase>
      ))}
    </div>
  );
}
