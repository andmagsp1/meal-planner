import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../../test/renderWithProviders.tsx";
import { ResetPlanButton } from "./ResetPlanButton.tsx";

vi.mock("./hooks/useClearPlan.ts", () => ({
  useClearPlan: vi.fn(() => ({ clearPlan: vi.fn() })),
}));

const makeRecipe = (id: string, name: string) => ({
  id,
  name,
  imageUrl: "",
  ingredients: [],
  description: "",
  steps: "",
});

describe("ResetPlanButton", () => {
  it("renders nothing when prop is undefined", async () => {
    const { container } = await renderWithProviders(
      <ResetPlanButton plannedRecipes={undefined} />,
    );

    expect(container.innerHTML).toBe("");
  });

  it("renders nothing when list is empty", async () => {
    const { container } = await renderWithProviders(
      <ResetPlanButton plannedRecipes={[]} />,
    );

    expect(container.innerHTML).toBe("");
  });

  it("renders button when there are planned recipes", async () => {
    await renderWithProviders(
      <ResetPlanButton plannedRecipes={[makeRecipe("1", "Pasta")]} />,
    );

    expect(
      screen.getByRole("button", { name: "Tøm ukesplan" }),
    ).toBeDefined();
  });
});
