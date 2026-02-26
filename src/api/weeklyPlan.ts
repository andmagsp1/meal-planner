import type { WeeklyPlan } from "../../server/types.ts";

const BASE_URL = "http://localhost:3001/api/weekly-plans";

export async function getWeeklyPlan(planId: string): Promise<WeeklyPlan> {
  const response = await fetch(`${BASE_URL}/${planId}`);
  return await response.json();
}

export async function addMealToPlan(
  planId: string,
  recipeId: string,
): Promise<void> {
  await fetch(`${BASE_URL}/${planId}/meals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipeId }),
  });
}

export async function removeMealFromPlan(
  planId: string,
  mealId: string,
): Promise<void> {
  await fetch(`${BASE_URL}/${planId}/meals/${mealId}`, {
    method: "DELETE",
  });
}

export async function clearAllMeals(planId: string): Promise<void> {
  await fetch(`${BASE_URL}/${planId}/meals`, {
    method: "DELETE",
  });
}
