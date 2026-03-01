import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../../api/shoppingList.ts";

const PLAN_ID = "1";

function sumAmount(amount: string): string {
  const parts = amount.split(", ");
  if (parts.length <= 1) return amount;
  const unit = parts[0].replace(/[\d.]+\s*/, "");
  const total = parts.reduce((sum, part) => sum + parseFloat(part), 0);
  return `${total} ${unit}`;
}

export function useGroceryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shoppingList"],
    queryFn: () => getShoppingList(PLAN_ID),
  });

  const summedItems = (data?.items ?? []).map((item) => ({
    ...item,
    amount: sumAmount(item.amount),
  }));

  const combinedItems = summedItems.reduce<NonNullable<typeof data>["items"]>(
    (acc, item) => {
      const existing = acc.find(
        (i) => i.ingredientName === item.ingredientName,
      );
      if (existing) {
        const existingNum = parseFloat(existing.amount);
        const itemNum = parseFloat(item.amount);
        const unit = existing.amount.replace(/[\d.]+\s*/, "");
        existing.amount = `${existingNum + itemNum} ${unit}`;
        existing.recipeNames = [...existing.recipeNames, ...item.recipeNames];
      } else {
        acc.push({ ...item });
      }
      return acc;
    },
    [],
  );

  return {
    items: combinedItems,
    isLoading,
    isError,
  };
}
