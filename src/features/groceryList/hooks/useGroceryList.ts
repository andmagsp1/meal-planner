import type { ShoppingItem } from "../../../../server/types.ts";

export function useGroceryList() {
  return {
    items: [] as ShoppingItem[],
    isLoading: false,
    isError: false,
  };
}
