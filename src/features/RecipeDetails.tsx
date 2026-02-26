import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "../../server/types.ts";

export function RecipeDetails({ recipeId }: { recipeId: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: async (): Promise<Recipe> => {
      const response = await fetch(
        `http://localhost:3001/api/recipes/${recipeId}`,
      );
      return await response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading recipe.</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Heading2>{data.name}</Heading2>

      <img
        src={data.imageUrl}
        alt={data.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
      />

      <CardBase style={{ background: "#eaeaf6", marginBottom: "16px" }}>
        <Heading3>Ingredients</Heading3>
        <ul>
          {data.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.amount} {ingredient.name}
            </li>
          ))}
        </ul>
      </CardBase>

      <Heading3>Steps</Heading3>
      <Paragraph>{data.description}</Paragraph>
    </div>
  );
}
