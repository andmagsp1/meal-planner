import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/getRecipes.ts";

export function Recipes() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recipes.</div>;
  }

  return (
    <div>
      <h2>Meals</h2>
      <ul>
        {data?.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
