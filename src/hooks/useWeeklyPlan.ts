import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addMealToPlan,
  clearAllMeals,
  getWeeklyPlan,
  removeMealFromPlan,
} from "../api/weeklyPlan.ts";

const PLAN_ID = "1";

export function useWeeklyPlan() {
  const queryClient = useQueryClient();

  const { data: plan } = useQuery({
    queryKey: ["weeklyPlan"],
    queryFn: () => getWeeklyPlan(PLAN_ID),
  });

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

  const clearPlan = useMutation({
    mutationFn: () => clearAllMeals(PLAN_ID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const isInPlan = (recipeId: string): boolean =>
    plan?.meals.some((meal) => meal.recipeId === recipeId) ?? false;

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

  return { plan, isInPlan, toggleMeal, clearPlan: () => clearPlan.mutate() };
}
