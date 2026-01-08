import { useRecipes } from "./hooks/useRecipes.ts";

export function Recipes() {
  const { data, isError, isLoading } = useRecipes();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recipes.</div>;
  }

  return (
    <div>
      <ul>
        {data?.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
