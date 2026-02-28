import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { WeeklyPlan } from "./WeeklyPlan.tsx";

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
  it("renders heading 'Ukesplan'", async () => {
    vi.mocked(usePlannedRecipes).mockReturnValue([]);

    await renderWithProviders(<WeeklyPlan />);

    expect(
      screen.getByRole("heading", { name: "Ukesplan" }),
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
