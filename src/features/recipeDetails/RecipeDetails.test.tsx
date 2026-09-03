import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderHookWithProviders } from "../../test/renderHookWithProviders.tsx";
import { renderWithProviders } from "../../test/renderWithProviders.tsx";
import { RecipeDetails } from "./RecipeDetails.tsx";
import { useTexts } from "./texts.ts";

vi.mock("./hooks/useRecipe.ts", () => ({
  useRecipe: vi.fn(),
}));

import { useRecipe } from "./hooks/useRecipe.ts";

describe("RecipeDetails", () => {
  const { result } = renderHookWithProviders(() => useTexts());
  const texts = result.current;

  it("shows error message when loading fails", async () => {
    vi.mocked(useRecipe).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });

    await renderWithProviders(<RecipeDetails recipeId="1" />);

    expect(screen.getByText(texts.errorLoadingRecipe)).toBeDefined();
  });

  it("shows loading message while loading", async () => {
    vi.mocked(useRecipe).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    await renderWithProviders(<RecipeDetails recipeId="1" />);

    expect(screen.getByText(texts.loading)).toBeDefined();
  });

  it("shows recipe name when loaded successfully", async () => {
    vi.mocked(useRecipe).mockReturnValue({
      data: {
        id: "1",
        name: "Pasta Carbonara",
        imageUrl: "https://example.com/pasta.jpg",
        ingredients: [{ id: "1", name: "Pasta", amount: "500g" }],
        description: "A classic Italian dish",
        steps: "1. Boil pasta\n2. Make sauce",
      },
      isLoading: false,
      isError: false,
    });

    await renderWithProviders(<RecipeDetails recipeId="1" />);

    expect(
      screen.getByRole("heading", { name: "Pasta Carbonara" }),
    ).toBeDefined();
  });
});
