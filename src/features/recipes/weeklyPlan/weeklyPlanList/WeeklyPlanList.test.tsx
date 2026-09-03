import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderHookWithProviders } from "../../../../test/renderHookWithProviders.tsx";
import { renderWithProviders } from "../../../../test/renderWithProviders.tsx";
import { WeeklyPlanList } from "./WeeklyPlanList.tsx";
import { useTexts } from "./texts.ts";

const makeRecipe = (id: string, name: string) => ({
  id,
  name,
  imageUrl: "",
  ingredients: [],
  description: "",
  steps: "",
});

describe("WeeklyPlanList", () => {
  const { result } = renderHookWithProviders(() => useTexts());
  const texts = result.current;

  it("shows empty message when prop is undefined", async () => {
    await renderWithProviders(
      <WeeklyPlanList plannedRecipes={undefined} />,
    );

    expect(screen.getByText(texts.noMealsInPlan)).toBeDefined();
  });

  it("shows empty message when list is empty", async () => {
    await renderWithProviders(<WeeklyPlanList plannedRecipes={[]} />);

    expect(screen.getByText(texts.noMealsInPlan)).toBeDefined();
  });

  it("shows recipe names as links when list is populated", async () => {
    await renderWithProviders(
      <WeeklyPlanList
        plannedRecipes={[
          makeRecipe("1", "Pasta Carbonara"),
          makeRecipe("2", "Taco"),
        ]}
      />,
    );

    expect(screen.getByRole("link", { name: "Pasta Carbonara" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Taco" })).toBeDefined();
  });
});
