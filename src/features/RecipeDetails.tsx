import { BackButton } from "@sb1/ffe-buttons-react";
import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
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
    <div
      style={{
        position: "relative",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "40px",
      }}
    >
      <div style={{ position: "absolute", left: "-120px", top: "-40px" }}>
        <BackButton as={Link} to="/">
          Back
        </BackButton>
      </div>
      <Heading2>{data.name}</Heading2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "32px",
          marginTop: "32px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Heading3>Ingredients</Heading3>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.amount} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={data.imageUrl}
          alt={data.name}
          style={{ width: "60%", borderRadius: "8px", objectFit: "cover" }}
        />
      </div>

      <Heading3>Steps</Heading3>
      <ol>
        {data.description
          .split(/\d+\.\s*/)
          .filter((step) => step.trim() !== "")
          .map((step, index) => (
            <li key={index + step}>
              <Paragraph>{step.trim()}</Paragraph>
            </li>
          ))}
      </ol>
    </div>
  );
}
