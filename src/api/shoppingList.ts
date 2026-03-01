import type { ShoppingItem, ShoppingList } from "../../server/types.ts";

const BASE_URL = "http://localhost:3001/api/shopping-lists";

export async function getShoppingList(weeklyPlanId: string): Promise<ShoppingList> {
  const response = await fetch(`${BASE_URL}/${weeklyPlanId}`);
  return await response.json();
}

export async function generateShoppingList(weeklyPlanId: string): Promise<ShoppingList> {
  const response = await fetch(`${BASE_URL}/generate/${weeklyPlanId}`, {
    method: "POST",
  });
  return await response.json();
}

export async function checkGroceryItem(listId: string, itemId: string, checked: boolean): Promise<ShoppingItem> {
  const response = await fetch(`${BASE_URL}/${listId}/items/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ checked }),
  });
  return await response.json();
}
