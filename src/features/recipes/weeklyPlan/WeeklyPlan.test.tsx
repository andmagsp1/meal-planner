import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderHookWithProviders } from "../../../test/renderHookWithProviders.tsx";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { WeeklyPlan } from "./WeeklyPlan.tsx";
import { useTexts } from "./texts.ts";

vi.mock("./hooks/usePlannedRecipes.ts", () => ({
  usePlannedRecipes: vi.fn(),
}));

vi.mock("./resetPlanButton/hooks/useClearPlan.ts", () => ({
  useClearPlan: vi.fn(() => ({ clearPlan: vi.fn() })),
}));

import { usePlannedRecipes } from "./hooks/usePlannedRecipes.ts";

const makeRecipe = (id: string, name: string) => ({
  id,
  name,
  imageUrl: "",
  ingredients: [],
  description: "",
  steps: "",
});

describe("WeeklyPlan", () => {
  const { result } = renderHookWithProviders(() => useTexts());
  const texts = result.current;

  it("renders heading 'Ukesplan'", async () => {
    vi.mocked(usePlannedRecipes).mockReturnValue([]);

    await renderWithProviders(<WeeklyPlan />);

    expect(
      screen.getByRole("heading", { name: texts.weeklyPlan }),
    ).toBeDefined();
  });

  it("passes planned recipes to child components", async () => {
    vi.mocked(usePlannedRecipes).mockReturnValue([
      makeRecipe("1", "Pasta Carbonara"),
      makeRecipe("2", "Taco"),
    ]);

    await renderWithProviders(<WeeklyPlan />);

    expect(screen.getByText("Pasta Carbonara")).toBeDefined();
    expect(screen.getByText("Taco")).toBeDefined();
  });
});
