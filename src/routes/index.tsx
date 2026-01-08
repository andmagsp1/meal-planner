import { createFileRoute } from '@tanstack/react-router';
import {Recipes} from "../features/Recipes.tsx";

export const Route = createFileRoute('/')({
  component: RecipesPage,
});

function RecipesPage() {
  return (
    <div>
      <h1>Recipes</h1>
        <Recipes />
    </div>
  );
}

