import { createFileRoute } from "@tanstack/react-router";
import { Recipes } from "../features/recipes/Recipes.tsx";

export const Route = createFileRoute("/")({
  component: RecipesPage,
});

function RecipesPage() {
  return <Recipes />;
}
