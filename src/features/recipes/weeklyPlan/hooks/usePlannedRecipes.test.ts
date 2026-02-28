import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Recipe, WeeklyPlan } from "../../../../../server/types.ts";
import { renderHookWithProviders } from "../../../../test/renderHookWithProviders.tsx";
import { usePlannedRecipes } from "./usePlannedRecipes.ts";

vi.mock("../../../../api/getRecipes.ts");
vi.mock("../../../../api/weeklyPlan.ts");

import { getRecipes } from "../../../../api/getRecipes.ts";
import { getWeeklyPlan } from "../../../../api/weeklyPlan.ts";

const recipes: Recipe[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    imageUrl: "pasta.jpg",
    ingredients: [],
    description: "Classic Italian pasta",
    steps: "",
  },
  {
    id: "2",
    name: "Chicken Tikka Masala",
    imageUrl: "tikka.jpg",
    ingredients: [],
    description: "Indian curry dish",
    steps: "",
  },
  {
    id: "3",
    name: "Pancakes",
    imageUrl: "pancakes.jpg",
    ingredients: [],
    description: "Fluffy pancakes",
    steps: "",
  },
];

const plan: WeeklyPlan = {
  id: "1",
  meals: [
    { id: "meal-1", recipeId: "1" },
    { id: "meal-2", recipeId: "3" },
  ],
};

describe("usePlannedRecipes", () => {
  it("returns planned recipes when both APIs resolve", async () => {
    vi.mocked(getRecipes).mockResolvedValue(recipes);
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);

    const { result } = renderHookWithProviders(() => usePlannedRecipes());

    await waitFor(() => expect(result.current).toBeDefined());
    expect(result.current).toEqual([
      { id: "1", name: "Pasta Carbonara" },
      { id: "3", name: "Pancakes" },
    ]);
  });

  it("filters out meals with no matching recipe", async () => {
    const planWithUnknown: WeeklyPlan = {
      id: "1",
      meals: [
        { id: "meal-1", recipeId: "1" },
        { id: "meal-2", recipeId: "999" },
      ],
    };
    vi.mocked(getRecipes).mockResolvedValue(recipes);
    vi.mocked(getWeeklyPlan).mockResolvedValue(planWithUnknown);

    const { result } = renderHookWithProviders(() => usePlannedRecipes());

    await waitFor(() => expect(result.current).toBeDefined());
    expect(result.current).toEqual([{ id: "1", name: "Pasta Carbonara" }]);
  });

  it("returns undefined when plan is not yet loaded", () => {
    vi.mocked(getRecipes).mockResolvedValue(recipes);
    vi.mocked(getWeeklyPlan).mockReturnValue(new Promise(() => {}));

    const { result } = renderHookWithProviders(() => usePlannedRecipes());

    expect(result.current).toBeUndefined();
  });

  it("returns undefined when recipes are not yet loaded", () => {
    vi.mocked(getRecipes).mockReturnValue(new Promise(() => {}));
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);

    const { result } = renderHookWithProviders(() => usePlannedRecipes());

    expect(result.current).toBeUndefined();
  });
});
