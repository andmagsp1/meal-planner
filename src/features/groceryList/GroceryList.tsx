import { useGroceryList } from "./hooks/useGroceryList.ts";

export function GroceryList() {
  const { items, isLoading, isError } = useGroceryList();

  return <div></div>;
}
