import { useGroceryList } from "./hooks/useGroceryList.ts";
import { useTexts } from "./texts.ts";

export function GroceryList() {
  const { items, isLoading, isError } = useGroceryList();
  const texts = useTexts();

  if (isLoading) {
    return <div>{texts.loading}</div>;
  }

  return <div></div>;
}
