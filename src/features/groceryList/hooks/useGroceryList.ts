import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../../api/shoppingList.ts";
import type { ShoppingItem } from "../../../../server/types.ts";

const PLAN_ID = "1";

function parseAmount(amount: string): { value: number; unit: string } {
  const value = parseFloat(amount);
  const unit = amount.replace(/[\d.]+\s*/, "");
  return { value, unit };
}

function formatAmount(value: number, unit: string): string {
  return `${value} ${unit}`;
}

function sumAmount(amount: string): string {
  const parts = amount.split(", ").map(parseAmount);
  const total = parts.reduce((sum, p) => sum + p.value, 0);
  return formatAmount(total, parts[0].unit);
}

function combineItems(items: ShoppingItem[]): ShoppingItem[] {
  const map = new Map<string, ShoppingItem>();
  for (const item of items) {
    const existing = map.get(item.ingredientName);
    if (existing) {
      const existingAmt = parseAmount(existing.amount);
      const newAmt = parseAmount(item.amount);
      existing.amount = formatAmount(existingAmt.value + newAmt.value, existingAmt.unit);
      existing.recipeNames = [...existing.recipeNames, ...item.recipeNames];
    } else {
      map.set(item.ingredientName, { ...item });
    }
  }
  return [...map.values()];
}

export function useGroceryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shoppingList"],
    queryFn: () => getShoppingList(PLAN_ID),
  });

  const items = (data?.items ?? []).map((item) => ({
    ...item,
    amount: sumAmount(item.amount),
  }));
  const combinedItems = combineItems(items);

  return {
    listId: data?.id,
    items: combinedItems,
    isLoading,
    isError,
  };
}
