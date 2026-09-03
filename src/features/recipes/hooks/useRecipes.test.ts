import { act, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Recipe } from "../../../../server/types.ts";
import { renderHookWithProviders } from "../../../test/renderHookWithProviders.tsx";
import { useRecipes } from "./useRecipes.ts";

vi.mock("../../../api/getRecipes.ts");

import { getRecipes } from "../../../api/getRecipes.ts";

const recipes: Recipe[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    imageUrl: "pasta.jpg",
    ingredients: [],
    description: "Classic Italian pasta",
    steps: "",
  },
  {
    id: "2",
    name: "Chicken Tikka Masala",
    imageUrl: "tikka.jpg",
    ingredients: [],
    description: "Indian curry dish",
    steps: "",
  },
  {
    id: "3",
    name: "Pancakes",
    imageUrl: "pancakes.jpg",
    ingredients: [],
    description: "Fluffy pancakes",
    steps: "",
  },
];

describe("useRecipes", () => {
  it("returns all recipes when search is empty", async () => {
    vi.mocked(getRecipes).mockResolvedValue(recipes);

    const { result } = renderHookWithProviders(() => useRecipes());

    await waitFor(() => expect(result.current.recipes).toBeDefined());
    expect(result.current.recipes).toHaveLength(3);
  });

  it("filters recipes by name (case-insensitive)", async () => {
    vi.mocked(getRecipes).mockResolvedValue(recipes);

    const { result } = renderHookWithProviders(() => useRecipes());

    await waitFor(() => expect(result.current.recipes).toBeDefined());

    act(() => {
      result.current.setSearch("pasta");
    });

    expect(result.current.recipes).toHaveLength(1);
    expect(result.current.recipes![0].name).toBe("Pasta Carbonara");
  });

  it("returns empty list when no recipes match search", async () => {
    vi.mocked(getRecipes).mockResolvedValue(recipes);

    const { result } = renderHookWithProviders(() => useRecipes());

    await waitFor(() => expect(result.current.recipes).toBeDefined());

    act(() => {
      result.current.setSearch("sushi");
    });

    expect(result.current.recipes).toHaveLength(0);
  });

  it("returns undefined when API has not yet resolved", () => {
    vi.mocked(getRecipes).mockReturnValue(new Promise(() => {}));

    const { result } = renderHookWithProviders(() => useRecipes());

    expect(result.current.recipes).toBeUndefined();
  });
});
