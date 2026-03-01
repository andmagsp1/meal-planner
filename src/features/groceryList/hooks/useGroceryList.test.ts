import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ShoppingList } from "../../../../server/types.ts";
import { renderHookWithProviders } from "../../../test/renderHookWithProviders.tsx";
import { useGroceryList } from "./useGroceryList.ts";

vi.mock("../../../api/shoppingList.ts");

import { getShoppingList } from "../../../api/shoppingList.ts";

const PLAN_ID = "1";

const shoppingList: ShoppingList = {
  id: "1",
  weeklyPlanId: PLAN_ID,
  items: [
    {
      id: "1",
      ingredientName: "Pasta",
      amount: "500 g",
      checked: false,
      recipeNames: ["Pasta Carbonara"],
    },
    {
      id: "2",
      ingredientName: "Chicken",
      amount: "400 g",
      checked: false,
      recipeNames: ["Chicken Tikka Masala"],
    },
  ],
};

describe("useGroceryList", () => {
  it("returns shopping items on successful fetch", async () => {
    vi.mocked(getShoppingList).mockResolvedValue(shoppingList);

    const { result } = renderHookWithProviders(() => useGroceryList());

    await waitFor(() => expect(result.current.items).toHaveLength(2));
  });
});
