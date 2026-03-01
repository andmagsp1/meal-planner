import { createFileRoute } from "@tanstack/react-router";
import { GroceryList } from "../features/groceryList/GroceryList.tsx";

export const Route = createFileRoute("/grocery-list")({
  component: GroceryListPage,
});

function GroceryListPage() {
  return (
    <div>
      <GroceryList />
    </div>
  );
}
