import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../test/renderWithProviders.tsx";
import { Recipes } from "./Recipes.tsx";

vi.mock("./hooks/useRecipes.ts", () => ({
  useRecipes: vi.fn(),
}));

import { useRecipes } from "./hooks/useRecipes.ts";

describe("Recipes", () => {
  it("shows error message when loading fails", async () => {
    vi.mocked(useRecipes).mockReturnValue({
      recipes: undefined,
      isLoading: false,
      isError: true,
      search: "",
      setSearch: vi.fn(),
    });

    await renderWithProviders(<Recipes />);

    expect(screen.getByText("Feil ved lasting av oppskrifter.")).toBeDefined();
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

    expect(screen.getByText("Laster...")).toBeDefined();
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
      screen.getByRole("heading", { name: "Oppskrifter" }),
    ).toBeDefined();
  });
});
