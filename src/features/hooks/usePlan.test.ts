import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { usePlan } from "./usePlan.ts";
import type { WeeklyPlan } from "../../../server/types.ts";
import { renderHookWithProviders } from "../../test/renderHookWithProviders.tsx";

vi.mock("../../api/weeklyPlan.ts");

import { getWeeklyPlan } from "../../api/weeklyPlan.ts";

describe("usePlan", () => {
  it("isInPlan returns false when plan has no matching meals", async () => {
    const plan: WeeklyPlan = {
      id: "1",
      meals: [{ id: "meal-1", recipeId: "recipe-99" }],
    };
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);

    const { result } = renderHookWithProviders(() => usePlan());

    await waitFor(() => expect(result.current.plan).toBeDefined());
    expect(result.current.isInPlan("recipe-1")).toBe(false);
  });

  it("isInPlan returns true when plan contains the recipeId", async () => {
    const plan: WeeklyPlan = {
      id: "1",
      meals: [
        { id: "meal-1", recipeId: "recipe-1" },
        { id: "meal-2", recipeId: "recipe-2" },
      ],
    };
    vi.mocked(getWeeklyPlan).mockResolvedValue(plan);

    const { result } = renderHookWithProviders(() => usePlan());

    await waitFor(() => expect(result.current.plan).toBeDefined());
    expect(result.current.isInPlan("recipe-1")).toBe(true);
  });

  it("isInPlan returns false when API returns no data", async () => {
    vi.mocked(getWeeklyPlan).mockResolvedValue(undefined as never);

    const { result } = renderHookWithProviders(() => usePlan());

    expect(result.current.isInPlan("recipe-1")).toBe(false);
  });
});
