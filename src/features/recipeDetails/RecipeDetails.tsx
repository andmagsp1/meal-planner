import { Heading1, Paragraph } from "@sb1/ffe-core-react";
import { BackButtonLink } from "../../components/backButton/BackButtonLink.tsx";
import { useRecipe } from "./hooks/useRecipe.ts";
import { Ingredients } from "./ingredients/Ingredients.tsx";
import styles from "./recipeDetails.module.css";
import { Steps } from "./steps/Steps.tsx";
import { useTexts } from "./texts.ts";
import { WeeklyPlanCheckbox } from "./weeklyPlanCheckbox/WeeklyPlanCheckbox.tsx";

export function RecipeDetails({ recipeId }: { recipeId: string }) {
  const texts = useTexts();

  const { data: recipe, isLoading, isError } = useRecipe(recipeId);

  if (isLoading) {
    return <div>{texts.loading}</div>;
  }

  if (isError || !recipe) {
    return <div>{texts.errorLoadingRecipe}</div>;
  }

  return (
    <div className={styles.RecipeDetailsContainer}>
      <BackButtonLink to="/" />
      <Heading1 lookLike={2}>{recipe.name}</Heading1>
      <Paragraph>{recipe.description}</Paragraph>
      <WeeklyPlanCheckbox recipeId={recipeId} />
      <div className={styles.IngredientsAndImage}>
        <Ingredients ingredients={recipe.ingredients} />
        <img src={recipe.imageUrl} alt={""} className={styles.RecipeImage} />
      </div>
      <Steps steps={recipe.steps} />
    </div>
  );
}
