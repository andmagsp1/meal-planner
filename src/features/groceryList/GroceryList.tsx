import { useGroceryList } from "./hooks/useGroceryList.ts";
import { useTexts } from "./texts.ts";

export function GroceryList() {
  const { items, isLoading, isError } = useGroceryList();
  const texts = useTexts();

  if (isLoading) {
    return <div>{texts.loading}</div>;
  }

  if (isError) {
    return <div>{texts.errorLoadingGroceryList}</div>;
  }

  return <div></div>;
}
