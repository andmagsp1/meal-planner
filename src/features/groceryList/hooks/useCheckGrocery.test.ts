import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderHookWithProviders } from "../../../test/renderHookWithProviders.tsx";
import { useGroceryList } from "./useGroceryList.ts";
import { useCheckGrocery } from "./useCheckGrocery.ts";

vi.mock("../../../api/shoppingList.ts");

import {
  checkGroceryItem,
  getShoppingList,
} from "../../../api/shoppingList.ts";

describe("useCheckGrocery", () => {
  it("calls checkGroceryItem with correct arguments", async () => {
    vi.mocked(checkGroceryItem).mockResolvedValue({
      id: "item-1",
      ingredientName: "Pasta",
      amount: "200g",
      checked: true,
      recipeNames: ["Carbonara"],
    });

    const { result } = renderHookWithProviders(() => useCheckGrocery());

    result.current.checkGrocery("item-1", true);

    await waitFor(() =>
      expect(checkGroceryItem).toHaveBeenCalledWith("1", "item-1", true),
    );
  });

  it("invalidates shoppingList query on success", async () => {
    vi.mocked(getShoppingList).mockResolvedValue({
      id: "1",
      weeklyPlanId: "1",
      items: [
        {
          id: "item-1",
          ingredientName: "Pasta",
          amount: "200g",
          checked: false,
          recipeNames: ["Carbonara"],
        },
      ],
    });
    vi.mocked(checkGroceryItem).mockResolvedValue({
      id: "item-1",
      ingredientName: "Pasta",
      amount: "200g",
      checked: true,
      recipeNames: ["Carbonara"],
    });

    const { result } = renderHookWithProviders(() => ({
      checkGrocery: useCheckGrocery(),
      groceryList: useGroceryList(),
    }));

    // Wait for the shopping list query to resolve
    await waitFor(() =>
      expect(result.current.groceryList.items).toBeDefined(),
    );

    // Clear the call count so we can detect the refetch
    vi.mocked(getShoppingList).mockClear();
    vi.mocked(getShoppingList).mockResolvedValue({
      id: "1",
      weeklyPlanId: "1",
      items: [
        {
          id: "item-1",
          ingredientName: "Pasta",
          amount: "200g",
          checked: true,
          recipeNames: ["Carbonara"],
        },
      ],
    });

    result.current.checkGrocery.checkGrocery("item-1", true);

    // After successful mutation, the shoppingList query should be refetched
    await waitFor(() => expect(getShoppingList).toHaveBeenCalled());
  });
});
