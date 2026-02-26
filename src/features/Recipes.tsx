import { CardBase } from "@sb1/ffe-cards-react";
import { Heading1, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
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
      <Heading1 lookLike={2}>Recipes</Heading1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxWidth: "800px",
        }}
      >
        {data?.map((recipe) => (
          <Link
            key={recipe.id}
            to="/recipe/$recipeId"
            params={{ recipeId: recipe.id }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardBase style={{ background: "#eaeaf6", width: "100%" }}>
              <Heading3>{recipe.name}</Heading3>
              <Paragraph>
                {recipe.description.length > 50
                  ? recipe.description.slice(0, 100) + "..."
                  : recipe.description}
              </Paragraph>
            </CardBase>
          </Link>
        ))}
      </div>
    </div>
  );
}
