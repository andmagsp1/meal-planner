import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../../api/shoppingList.ts";

const PLAN_ID = "1";

export function useGroceryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shoppingList"],
    queryFn: () => getShoppingList(PLAN_ID),
  });

  return {
    items: data?.items ?? [],
    isLoading,
    isError,
  };
}
