import { CardBase, TextCard } from "@sb1/ffe-cards-react";
import { Heading3, Paragraph } from "@sb1/ffe-core-react";
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {data?.map((recipe) => (
          <CardBase key={recipe.id} style={{ background: "#eaeaf6" }}>
            <Heading3>{recipe.name}</Heading3>
            <Paragraph>
              {recipe.description.length > 50
                ? recipe.description.slice(0, 100) + "..."
                : recipe.description}
            </Paragraph>
          </CardBase>
        ))}
      </div>
    </div>
  );
}
