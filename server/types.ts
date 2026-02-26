export interface Ingredient {
  id: string;
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  description: string;
  steps: string;
}

export interface PlannedMeal {
  id: string;
  recipeId: string;
}

export interface WeeklyPlan {
  id: string;
  meals: PlannedMeal[];
}

export interface ShoppingItem {
  id: string;
  ingredientName: string;
  amount: string;
  checked: boolean;
  recipeNames: string[];
}

export interface ShoppingList {
  id: string;
  weeklyPlanId: string;
  items: ShoppingItem[];
}
