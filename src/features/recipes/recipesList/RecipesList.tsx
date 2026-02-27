import { CardBase } from "@sb1/ffe-cards-react";
import { Heading2, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox } from "@sb1/ffe-form-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  addMealToPlan,
  getWeeklyPlan,
  removeMealFromPlan,
} from "../../../api/weeklyPlan.ts";
import { useTranslation } from "../../../i18n/LanguageContext.tsx";

interface Props {
  filteredList: { id: string; name: string; description: string }[] | undefined;
}

const PLAN_ID = "1";

export function RecipesList({ filteredList }: Props) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data: plan } = useQuery({
    queryKey: ["weeklyPlan"],
    queryFn: () => getWeeklyPlan(PLAN_ID),
  });

  const isInPlan = (recipeId: string): boolean =>
    plan?.meals.some((meal) => meal.recipeId === recipeId) ?? false;

  const addMeal = useMutation({
    mutationFn: (recipeId: string) => addMealToPlan(PLAN_ID, recipeId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const removeMeal = useMutation({
    mutationFn: (mealId: string) => removeMealFromPlan(PLAN_ID, mealId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const getMealId = (recipeId: string): string | undefined =>
    plan?.meals.find((meal) => meal.recipeId === recipeId)?.id;

  const toggleMeal = (recipeId: string) => {
    if (isInPlan(recipeId)) {
      const mealId = getMealId(recipeId);
      if (mealId) {
        removeMeal.mutate(mealId);
      }
    } else {
      addMeal.mutate(recipeId);
    }
  };

  if (filteredList?.length === 0) {
    return <Paragraph>{t("noResults")}</Paragraph>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: "800px",
      }}
    >
      {filteredList?.map((recipe) => (
        <CardBase
          key={recipe.id}
          style={{
            background: "#eaeaf6",
            width: "100%",
            border: isInPlan(recipe.id) ? "2px solid #073f83" : undefined,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Link
              to="/recipe/$recipeId"
              params={{ recipeId: recipe.id }}
              style={{
                flex: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Heading2 lookLike={4}>{recipe.name}</Heading2>
              <Paragraph>
                {recipe.description.length > 50
                  ? recipe.description.slice(0, 100) + "..."
                  : recipe.description}
              </Paragraph>
            </Link>
            <Checkbox
              checked={isInPlan(recipe.id)}
              onChange={() => toggleMeal(recipe.id)}
            >
              {t("addToWeeklyPlan")}
            </Checkbox>
          </div>
        </CardBase>
      ))}
    </div>
  );
}
