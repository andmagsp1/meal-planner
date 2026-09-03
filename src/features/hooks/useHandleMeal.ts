import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addMealToPlan,
  removeMealFromPlan,
} from "../../api/weeklyPlan.ts";
import { generateShoppingList } from "../../api/shoppingList.ts";
import { usePlan } from "./usePlan.ts";

const PLAN_ID = "1";

export function useHandleMeal() {
  const queryClient = useQueryClient();
  const { plan, isInPlan } = usePlan();

  const addMeal = useMutation({
    mutationFn: (recipeId: string) => addMealToPlan(PLAN_ID, recipeId),
    onSuccess: async () => {
      await generateShoppingList(PLAN_ID);
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] });
      queryClient.invalidateQueries({ queryKey: ["shoppingList"] });
    },
  });

  const removeMeal = useMutation({
    mutationFn: (mealId: string) => removeMealFromPlan(PLAN_ID, mealId),
    onSuccess: async () => {
      await generateShoppingList(PLAN_ID);
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] });
      queryClient.invalidateQueries({ queryKey: ["shoppingList"] });
    },
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

  return {
    toggleMeal,
  };
}
