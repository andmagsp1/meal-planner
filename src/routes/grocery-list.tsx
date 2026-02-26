import { Heading1 } from "@sb1/ffe-core-react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "../i18n/LanguageContext.tsx";

export const Route = createFileRoute("/grocery-list")({
  component: GroceryListPage,
});

function GroceryListPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Heading1 lookLike={2}>{t("groceryList")}</Heading1>
    </div>
  );
}
