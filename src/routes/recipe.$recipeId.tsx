import { createFileRoute } from "@tanstack/react-router";
import { RecipeDetails } from "../features/RecipeDetails.tsx";

export const Route = createFileRoute("/recipe/$recipeId")({
  component: RecipePage,
});

function RecipePage() {
  const { recipeId } = Route.useParams();
  return <RecipeDetails recipeId={recipeId} />;
}
