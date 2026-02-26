import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "../i18n/LanguageContext.tsx";

export const Route = createFileRoute("/grocery-list")({
  component: GroceryListPage,
});

function GroceryListPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("groceryList")}</h1>
    </div>
  );
}
