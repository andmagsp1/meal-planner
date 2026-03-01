import { useGroceryList } from "./hooks/useGroceryList.ts";

export function GroceryList() {
  const { items, isLoading, isError } = useGroceryList();

  if (isLoading) {
    return <div>Laster...</div>;
  }

  return <div></div>;
}
