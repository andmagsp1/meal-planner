import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderHookWithProviders } from "../../../../../test/renderHookWithProviders.tsx";
import { usePlan } from "../../../../hooks/usePlan.ts";
import { useClearPlan } from "./useClearPlan.ts";

vi.mock("../../../../../api/weeklyPlan.ts");

import {
  clearAllMeals,
  getWeeklyPlan,
} from "../../../../../api/weeklyPlan.ts";

describe("useClearPlan", () => {
  it("calls clearAllMeals when clearPlan is invoked", async () => {
    vi.mocked(clearAllMeals).mockResolvedValue(undefined);

    const { result } = renderHookWithProviders(() => useClearPlan());

    result.current.clearPlan();

    await waitFor(() =>
      expect(clearAllMeals).toHaveBeenCalledWith("1"),
    );
  });

  it("invalidates weeklyPlan query on success", async () => {
    vi.mocked(getWeeklyPlan).mockResolvedValue({
      id: "1",
      meals: [{ id: "meal-1", recipeId: "recipe-1" }],
    });
    vi.mocked(clearAllMeals).mockResolvedValue(undefined);

    // Use both hooks so the weeklyPlan query is active
    const { result } = renderHookWithProviders(() => ({
      clearPlan: useClearPlan(),
      plan: usePlan(),
    }));

    // Wait for the plan query to resolve
    await waitFor(() => expect(result.current.plan.plan).toBeDefined());

    // Clear the call count so we can detect the refetch
    vi.mocked(getWeeklyPlan).mockClear();
    vi.mocked(getWeeklyPlan).mockResolvedValue({
      id: "1",
      meals: [],
    });

    result.current.clearPlan.clearPlan();

    // After successful mutation, the weeklyPlan query should be refetched
    await waitFor(() => expect(getWeeklyPlan).toHaveBeenCalled());
  });
});
