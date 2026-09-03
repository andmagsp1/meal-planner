import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Recipe } from "../../../../server/types.ts";
import { renderHookWithProviders } from "../../../test/renderHookWithProviders.tsx";
import { useRecipe } from "./useRecipe.ts";

vi.mock("../../../api/getRecipe.ts");

import { getRecipe } from "../../../api/getRecipe.ts";

const recipe: Recipe = {
  id: "1",
  name: "Pasta Carbonara",
  imageUrl: "pasta.jpg",
  ingredients: [],
  description: "Classic Italian pasta",
  steps: "Boil water",
};

describe("useRecipe", () => {
  it("returns recipe data when API resolves", async () => {
    vi.mocked(getRecipe).mockResolvedValue(recipe);

    const { result } = renderHookWithProviders(() => useRecipe("1"));

    await waitFor(() => expect(result.current.data).toBeDefined());
    expect(result.current.data).toEqual(recipe);
    expect(result.current.isLoading).toBe(false);
  });

  it("returns loading state initially", () => {
    vi.mocked(getRecipe).mockReturnValue(new Promise(() => {}));

    const { result } = renderHookWithProviders(() => useRecipe("1"));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it("returns error state when API rejects", async () => {
    vi.mocked(getRecipe).mockRejectedValue(new Error("Not found"));

    const { result } = renderHookWithProviders(() => useRecipe("1"));

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
