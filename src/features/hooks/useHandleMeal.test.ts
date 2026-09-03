import { waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { WeeklyPlan } from "../../../server/types.ts";
import { renderHookWithProviders } from "../../test/renderHookWithProviders.tsx";
import { useHandleMeal } from "./useHandleMeal.ts";
import { usePlan } from "./usePlan.ts";

vi.mock("../../api/weeklyPlan.ts");

import {
  addMealToPlan,
  getWeeklyPlan,
  removeMealFromPlan,
} from "../../api/weeklyPlan.ts";

describe("useHandleMeal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("toggleMeal adds a meal when recipe is not in plan", async () => {
    const plan: WeeklyPlan = { id: "1", meals: [] };
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);
    vi.mocked(addMealToPlan).mockResolvedValue(undefined);

    const { result } = renderHookWithProviders(() => ({
      handleMeal: useHandleMeal(),
      plan: usePlan(),
    }));

    await waitFor(() => expect(result.current.plan.plan).toBeDefined());

    result.current.handleMeal.toggleMeal("recipe-1");

    await waitFor(() =>
      expect(addMealToPlan).toHaveBeenCalledWith("1", "recipe-1"),
    );
  });

  it("toggleMeal removes a meal when recipe is in plan", async () => {
    const plan: WeeklyPlan = {
      id: "1",
      meals: [{ id: "meal-1", recipeId: "recipe-1" }],
    };
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);
    vi.mocked(removeMealFromPlan).mockResolvedValue(undefined);

    const { result } = renderHookWithProviders(() => ({
      handleMeal: useHandleMeal(),
      plan: usePlan(),
    }));

    await waitFor(() => expect(result.current.plan.plan).toBeDefined());

    result.current.handleMeal.toggleMeal("recipe-1");

    await waitFor(() =>
      expect(removeMealFromPlan).toHaveBeenCalledWith("1", "meal-1"),
    );
  });

  it("toggleMeal calls addMealToPlan when plan is not yet loaded", async () => {
    vi.mocked(getWeeklyPlan).mockReturnValue(new Promise(() => {}));
    vi.mocked(addMealToPlan).mockResolvedValue(undefined);

    const { result } = renderHookWithProviders(() => useHandleMeal());

    // Plan not loaded — isInPlan returns false, so addMeal branch is taken
    result.current.toggleMeal("recipe-1");

    await waitFor(() =>
      expect(addMealToPlan).toHaveBeenCalledWith("1", "recipe-1"),
    );
    expect(removeMealFromPlan).not.toHaveBeenCalled();
  });
});
