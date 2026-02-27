import { Heading1 } from "@sb1/ffe-core-react";
import { useRecipes } from "./hooks/useRecipes.ts";
import styles from "./recipes.module.css";
import { RecipesList } from "./recipesList/RecipesList.tsx";
import { SearchRecipes } from "./searchRecipes/SearchRecipes.tsx";
import { useTexts } from "./texts.ts";
import { WeeklyPlan } from "./weeklyPlan/WeeklyPlan.tsx";

export function Recipes() {
  const texts = useTexts();
  const { recipes, search, setSearch, isLoading, isError } = useRecipes();

  if (isLoading) {
    return <div>{texts.loading}</div>;
  }

  if (isError) {
    return <div>{texts.errorLoadingRecipes}</div>;
  }

  return (
    <div className={styles.RecipesContainer}>
      <div className={styles.RecipesListContainer}>
        <Heading1 lookLike={2}>{texts.recipes}</Heading1>
        <SearchRecipes search={search} setSearch={setSearch} />
        <RecipesList filteredList={recipes} />
      </div>
      <WeeklyPlan />
    </div>
  );
}
