import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "../../../../test/renderWithProviders.tsx";
import { WeeklyPlanList } from "./WeeklyPlanList.tsx";

const makeRecipe = (id: string, name: string) => ({
  id,
  name,
  imageUrl: "",
  ingredients: [],
  description: "",
  steps: "",
});

describe("WeeklyPlanList", () => {
  it("shows empty message when prop is undefined", async () => {
    await renderWithProviders(
      <WeeklyPlanList plannedRecipes={undefined} />,
    );

    expect(screen.getByText("Ingen måltider lagt til ennå.")).toBeDefined();
  });

  it("shows empty message when list is empty", async () => {
    await renderWithProviders(<WeeklyPlanList plannedRecipes={[]} />);

    expect(screen.getByText("Ingen måltider lagt til ennå.")).toBeDefined();
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
