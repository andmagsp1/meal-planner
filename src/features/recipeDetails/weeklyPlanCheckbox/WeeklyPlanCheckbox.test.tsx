import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { WeeklyPlanCheckbox } from "./WeeklyPlanCheckbox.tsx";

vi.mock("../../hooks/usePlan.ts", () => ({
  usePlan: vi.fn(),
}));

vi.mock("../../hooks/useHandleMeal.ts", () => ({
  useHandleMeal: vi.fn(),
}));

import { useHandleMeal } from "../../hooks/useHandleMeal.ts";
import { usePlan } from "../../hooks/usePlan.ts";

describe("WeeklyPlanCheckbox", () => {
  it("checkbox is unchecked when recipe is not in plan", async () => {
    vi.mocked(usePlan).mockReturnValue({
      plan: undefined,
      isInPlan: () => false,
    });
    vi.mocked(useHandleMeal).mockReturnValue({
      toggleMeal: vi.fn(),
    });

    await renderWithProviders(<WeeklyPlanCheckbox recipeId="1" />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("checkbox is checked when recipe is in plan", async () => {
    vi.mocked(usePlan).mockReturnValue({
      plan: undefined,
      isInPlan: () => true,
    });
    vi.mocked(useHandleMeal).mockReturnValue({
      toggleMeal: vi.fn(),
    });

    await renderWithProviders(<WeeklyPlanCheckbox recipeId="1" />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("calls toggleMeal on change", async () => {
    const toggleMeal = vi.fn();
    vi.mocked(usePlan).mockReturnValue({
      plan: undefined,
      isInPlan: () => false,
    });
    vi.mocked(useHandleMeal).mockReturnValue({
      toggleMeal,
    });

    await renderWithProviders(<WeeklyPlanCheckbox recipeId="42" />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(toggleMeal).toHaveBeenCalledWith("42");
  });
});
