import { useQuery } from "@tanstack/react-query";
import { getWeeklyPlan } from "../../api/weeklyPlan.ts";

const PLAN_ID = "1";

export function usePlan() {
  const { data: plan } = useQuery({
    queryKey: ["weeklyPlan"],
    queryFn: () => getWeeklyPlan(PLAN_ID),
  });

  const isInPlan = (recipeId: string): boolean =>
    plan?.meals.some((meal) => meal.recipeId === recipeId) ?? false;

  return {
    plan,
    isInPlan,
  };
}
