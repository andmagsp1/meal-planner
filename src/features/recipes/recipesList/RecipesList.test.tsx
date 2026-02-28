import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { RecipesList } from "./RecipesList.tsx";

vi.mock("../../hooks/usePlan.ts", () => ({
  usePlan: vi.fn(),
}));

vi.mock("../../hooks/useHandleMeal.ts", () => ({
  useHandleMeal: vi.fn(),
}));

import { useHandleMeal } from "../../hooks/useHandleMeal.ts";
import { usePlan } from "../../hooks/usePlan.ts";

describe("RecipesList", () => {
  beforeEach(() => {
    vi.mocked(usePlan).mockReturnValue({ plan: undefined, isInPlan: () => false });
    vi.mocked(useHandleMeal).mockReturnValue({ toggleMeal: vi.fn() });
  });

  it("shows empty message when list is empty", async () => {
    await renderWithProviders(<RecipesList filteredList={[]} />);

    expect(screen.getByText("Ingen oppskrifter funnet.")).toBeDefined();
  });

  it("shows recipe name as heading when list is populated", async () => {
    await renderWithProviders(
      <RecipesList
        filteredList={[
          { id: "1", name: "Pasta Carbonara", description: "A classic dish" },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Pasta Carbonara" }),
    ).toBeDefined();
  });

  it("shows checkbox as checked when recipe is in plan", async () => {
    vi.mocked(usePlan).mockReturnValue({ plan: undefined, isInPlan: (id) => id === "1" });

    await renderWithProviders(
      <RecipesList
        filteredList={[
          { id: "1", name: "Pasta Carbonara", description: "A classic dish" },
        ]}
      />,
    );

    expect((screen.getByRole("checkbox") as HTMLInputElement).checked).toBe(
      true,
    );
  });
});
