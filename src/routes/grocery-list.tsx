import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grocery-list")({
  component: GroceryListPage,
});

function GroceryListPage() {
  return (
    <div>
      <h1>Grocery list</h1>
    </div>
  );
}
