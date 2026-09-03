import { Heading2 } from "@sb1/ffe-core-react";
import type { Ingredient } from "../../../../server/types.ts";
import { useTexts } from "./texts.ts";
import styles from "./ingredients.module.css";

interface Props {
  ingredients: Ingredient[];
}

export function Ingredients({ ingredients }: Props) {
  const texts = useTexts();

  return (
    <div className={styles.IngredientsContainer}>
      <Heading2 lookLike={3}>{texts.ingredients}</Heading2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.amount} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
