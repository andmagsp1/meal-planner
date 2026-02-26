import { CardBase } from "@sb1/ffe-cards-react";
import { Heading1, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox, Input, InputGroup } from "@sb1/ffe-form-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getRecipes } from "../api/getRecipes.ts";
import { useWeeklyPlan } from "../hooks/useWeeklyPlan.ts";
import { useLanguage, useTranslation } from "../i18n/LanguageContext.tsx";

export function Recipes() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const { isInPlan, toggleMeal } = useWeeklyPlan();
  const [search, setSearch] = useState("");

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

  const filtered = data?.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Heading1 lookLike={2}>{t("recipes")}</Heading1>
      <div style={{ maxWidth: "800px", marginBottom: "16px" }}>
        <InputGroup label={t("searchRecipes")}>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        </InputGroup>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          maxWidth: "800px",
        }}
      >
        {filtered?.length === 0 && <Paragraph>{t("noResults")}</Paragraph>}
        {filtered?.map((recipe) => (
          <Link
            key={recipe.id}
            to="/recipe/$recipeId"
            params={{ recipeId: recipe.id }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardBase style={{ background: "#eaeaf6", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <Heading3 lookLike={4}>{recipe.name}</Heading3>
                  <Paragraph>
                    {recipe.description.length > 50
                      ? recipe.description.slice(0, 100) + "..."
                      : recipe.description}
                  </Paragraph>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Checkbox
                    checked={isInPlan(recipe.id)}
                    onChange={() => toggleMeal(recipe.id)}
                  >
                    {t("addToWeeklyPlan")}
                  </Checkbox>
                </div>
              </div>
            </CardBase>
          </Link>
        ))}
      </div>
    </div>
  );
}
