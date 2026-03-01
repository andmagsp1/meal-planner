import { Heading1 } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
import { useGroceryList } from "./hooks/useGroceryList.ts";
import { useTexts } from "./texts.ts";
import styles from "./groceryList.module.css";

export function GroceryList() {
  const { items, isLoading, isError } = useGroceryList();
  const texts = useTexts();

  if (isLoading) {
    return <div>{texts.loading}</div>;
  }

  if (isError) {
    return <div>{texts.errorLoadingGroceryList}</div>;
  }

  if (items.length === 0) {
    return <div>{texts.emptyGroceryList}</div>;
  }

  return (
    <div>
      <Heading1 lookLike={2}>{texts.groceryList}</Heading1>
      <ul className={styles.list}>
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
