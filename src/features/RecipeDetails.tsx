import { BackButton } from "@sb1/ffe-buttons-react";
import { Heading2, Heading3, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import type { Recipe } from "../../server/types.ts";
import {
  addMealToPlan,
  getWeeklyPlan,
  removeMealFromPlan,
} from "../api/weeklyPlan.ts";
import { useLanguage, useTranslation } from "../i18n/LanguageContext.tsx";

const PLAN_ID = "1";

export function RecipeDetails({ recipeId }: { recipeId: string }) {
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { data: plan } = useQuery({
    queryKey: ["weeklyPlan"],
    queryFn: () => getWeeklyPlan(PLAN_ID),
  });

  const addMeal = useMutation({
    mutationFn: (id: string) => addMealToPlan(PLAN_ID, id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const removeMeal = useMutation({
    mutationFn: (mealId: string) => removeMealFromPlan(PLAN_ID, mealId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const isInPlan = (id: string): boolean =>
    plan?.meals.some((meal) => meal.recipeId === id) ?? false;

  const getMealId = (id: string): string | undefined =>
    plan?.meals.find((meal) => meal.recipeId === id)?.id;

  const toggleMeal = (id: string) => {
    if (isInPlan(id)) {
      const mealId = getMealId(id);
      if (mealId) {
        removeMeal.mutate(mealId);
      }
    } else {
      addMeal.mutate(id);
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", recipeId, lang],
    queryFn: async (): Promise<Recipe> => {
      const response = await fetch(
        `http://localhost:3001/api/recipes/${recipeId}?lang=${lang}`,
      );
      return await response.json();
    },
  });

  if (isLoading) {
    return <div>{t("loading")}</div>;
  }

  if (isError || !data) {
    return <div>{t("errorLoadingRecipe")}</div>;
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
          {t("back")}
        </BackButton>
      </div>
      <Heading2>{data.name}</Heading2>
      <Paragraph>{data.description}</Paragraph>
      <div style={{ marginTop: "16px" }}>
        <Checkbox
          checked={isInPlan(recipeId)}
          onChange={() => toggleMeal(recipeId)}
        >
          {t("addToWeeklyPlan")}
        </Checkbox>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "32px",
          marginTop: "32px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Heading3>{t("ingredients")}</Heading3>
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

      <Heading3>{t("steps")}</Heading3>
      <ol>
        {data.steps
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
