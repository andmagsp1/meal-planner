import { Heading1 } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
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

  return (
    <div>
      <Heading1 lookLike={2}>Grocery List</Heading1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Checkbox checked={item.checked} onChange={() => {}}>
              {item.amount} {item.ingredientName}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}
