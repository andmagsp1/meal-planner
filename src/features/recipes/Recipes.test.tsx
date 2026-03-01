import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderHookWithProviders } from "../../test/renderHookWithProviders.tsx";
import { renderWithProviders } from "../../test/renderWithProviders.tsx";
import { Recipes } from "./Recipes.tsx";
import { useTexts } from "./texts.ts";

vi.mock("./hooks/useRecipes.ts", () => ({
  useRecipes: vi.fn(),
}));

import { useRecipes } from "./hooks/useRecipes.ts";

describe("Recipes", () => {
  const { result } = renderHookWithProviders(() => useTexts());
  const texts = result.current;

  it("shows error message when loading fails", async () => {
    vi.mocked(useRecipes).mockReturnValue({
      recipes: undefined,
      isLoading: false,
      isError: true,
      search: "",
      setSearch: vi.fn(),
    });

    await renderWithProviders(<Recipes />);

    expect(screen.getByText(texts.errorLoadingRecipes)).toBeDefined();
  });

  it("shows loading message while loading", async () => {
    vi.mocked(useRecipes).mockReturnValue({
      recipes: undefined,
      isLoading: true,
      isError: false,
      search: "",
      setSearch: vi.fn(),
    });

    await renderWithProviders(<Recipes />);

    expect(screen.getByText(texts.loading)).toBeDefined();
  });

  it("shows recipes heading when loaded successfully", async () => {
    vi.mocked(useRecipes).mockReturnValue({
      recipes: [
        {
          id: "1",
          name: "Pasta Carbonara",
          imageUrl: "https://example.com/pasta.jpg",
          ingredients: [{ id: "1", name: "Pasta", amount: "500g" }],
          description: "A classic Italian dish",
          steps: "1. Boil pasta\n2. Make sauce",
        },
      ],
      isLoading: false,
      isError: false,
      search: "",
      setSearch: vi.fn(),
    });

    await renderWithProviders(<Recipes />);

    expect(
      screen.getByRole("heading", { name: texts.recipes }),
    ).toBeDefined();
  });
});
