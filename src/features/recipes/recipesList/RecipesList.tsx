import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
import { Link } from "@tanstack/react-router";
import { formatDescription } from "./helpers/formatDescription.ts";
import { useHandleMeal } from "../../hooks/useHandleMeal.ts";
import { usePlan } from "../../hooks/usePlan.ts";
import styles from "./recipesList.module.css";
import { useTexts } from "./texts";

interface Props {
  filteredList: { id: string; name: string; description: string }[] | undefined;
}

export function RecipesList({ filteredList }: Props) {
  const texts = useTexts();
  const { isInPlan } = usePlan();
  const { toggleMeal } = useHandleMeal();

  if (filteredList?.length === 0) {
    return <Paragraph>{texts.noResults}</Paragraph>;
  }

  return (
    <div className={styles.RecipesListContainer}>
      {filteredList?.map((recipe) => (
        <CardBase
          key={recipe.id}
          className={
            isInPlan(recipe.id) ? styles.RecipeCardBordered : styles.RecipeCard
          }
        >
          <div className={styles.RecipeCardContent}>
            <Link
              to="/recipe/$recipeId"
              params={{ recipeId: recipe.id }}
              className={styles.RecipeLink}
            >
              <Heading2 lookLike={4}>{recipe.name}</Heading2>
              <Paragraph>{formatDescription(recipe.description)}</Paragraph>
            </Link>
            <Checkbox
              checked={isInPlan(recipe.id)}
              onChange={() => toggleMeal(recipe.id)}
            >
              {texts.addToWeeklyPlan}
            </Checkbox>
          </div>
        </CardBase>
      ))}
    </div>
  );
}
