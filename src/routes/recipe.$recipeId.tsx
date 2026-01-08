import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipe/$recipeId')({
  component: RecipePage,
});

function RecipePage() {
  return (
    <div>
      <h1>Recipe</h1>
    </div>
  );
}

