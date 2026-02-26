import { CardBase } from "@sb1/ffe-cards-react";
import { Heading1, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getRecipes } from "../api/getRecipes.ts";
import { useLanguage, useTranslation } from "../i18n/LanguageContext.tsx";

export function Recipes() {
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["recipes", lang],
    queryFn: () => getRecipes(lang),
  });

  if (isLoading) {
    return <div>{t("loading")}</div>;
  }

  if (isError) {
    return <div>{t("errorLoadingRecipes")}</div>;
  }

  return (
    <div>
      <Heading1 lookLike={2}>{t("recipes")}</Heading1>
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
