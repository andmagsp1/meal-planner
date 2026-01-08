import cors from "cors";
import express from "express";
import { recipes, shoppingLists, weeklyPlans } from "./data.js";
import type { PlannedMeal, ShoppingItem } from "./types.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ============================================
// RECIPES ENDPOINTS
// ============================================

// Get all recipes
app.get("/api/recipes", (_req, res) => {
  res.json(recipes);
});

// Get a single recipe
app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === req.params.id);
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.json(recipe);
});

// ============================================
// WEEKLY PLAN ENDPOINTS
// ============================================

// Get all weekly plans
app.get("/api/weekly-plans", (_req, res) => {
  res.json(weeklyPlans);
});

// Get a single weekly plan
app.get("/api/weekly-plans/:id", (req, res) => {
  const plan = weeklyPlans.find((p) => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ message: "Weekly plan not found" });
  }
  res.json(plan);
});

// Add a meal to weekly plan
app.post("/api/weekly-plans/:id/meals", (req, res) => {
  const plan = weeklyPlans.find((p) => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ message: "Weekly plan not found" });
  }

  const newMeal: PlannedMeal = {
    id: `meal-${Date.now()}`,
    recipeId: req.body.recipeId,
  };

  plan.meals.push(newMeal);
  res.status(201).json(newMeal);
});

// Update a meal in weekly plan
app.put("/api/weekly-plans/:planId/meals/:mealId", (req, res) => {
  const plan = weeklyPlans.find((p) => p.id === req.params.planId);
  if (!plan) {
    return res.status(404).json({ message: "Weekly plan not found" });
  }

  const meal = plan.meals.find((m) => m.id === req.params.mealId);
  if (!meal) {
    return res.status(404).json({ message: "Meal not found" });
  }

  meal.recipeId = req.body.recipeId ?? meal.recipeId;

  res.json(meal);
});

// Delete a meal from weekly plan
app.delete("/api/weekly-plans/:planId/meals/:mealId", (req, res) => {
  const plan = weeklyPlans.find((p) => p.id === req.params.planId);
  if (!plan) {
    return res.status(404).json({ message: "Weekly plan not found" });
  }

  const index = plan.meals.findIndex((m) => m.id === req.params.mealId);
  if (index === -1) {
    return res.status(404).json({ message: "Meal not found" });
  }

  plan.meals.splice(index, 1);
  res.status(204).send();
});

// ============================================
// SHOPPING LIST ENDPOINTS
// ============================================

// Get shopping list for a weekly plan
app.get("/api/shopping-lists/:weeklyPlanId", (req, res) => {
  const list = shoppingLists.find(
    (l) => l.weeklyPlanId === req.params.weeklyPlanId,
  );
  if (!list) {
    return res.status(404).json({ message: "Shopping list not found" });
  }
  res.json(list);
});

// Generate shopping list from weekly plan
app.post("/api/shopping-lists/generate/:weeklyPlanId", (req, res) => {
  const plan = weeklyPlans.find((p) => p.id === req.params.weeklyPlanId);
  if (!plan) {
    return res.status(404).json({ message: "Weekly plan not found" });
  }

  // Find or create shopping list
  let list = shoppingLists.find(
    (l) => l.weeklyPlanId === req.params.weeklyPlanId,
  );
  if (!list) {
    list = {
      id: `list-${Date.now()}`,
      weeklyPlanId: req.params.weeklyPlanId,
      items: [],
    };
    shoppingLists.push(list);
  }

  // Clear existing items
  list.items = [];

  // Aggregate ingredients from all meals
  const ingredientMap = new Map<
    string,
    { amounts: string[]; recipeNames: string[] }
  >();

  plan.meals.forEach((meal) => {
    const recipe = recipes.find((r) => r.id === meal.recipeId);
    if (recipe) {
      recipe.ingredients.forEach((ingredient) => {
        const key = ingredient.name.toLowerCase();
        if (!ingredientMap.has(key)) {
          ingredientMap.set(key, { amounts: [], recipeNames: [] });
        }
        const entry = ingredientMap.get(key);
        if (entry) {
          entry.amounts.push(ingredient.amount);
          if (!entry.recipeNames.includes(recipe.name)) {
            entry.recipeNames.push(recipe.name);
          }
        }
      });
    }
  });

  // Create shopping items
  ingredientMap.forEach((value, key) => {
    const item: ShoppingItem = {
      id: `item-${Date.now()}-${Math.random()}`,
      ingredientName: key,
      amount: value.amounts.join(", "),
      checked: false,
      recipeNames: value.recipeNames,
    };
    list.items.push(item);
  });

  res.json(list);
});

// Toggle shopping item checked status
app.patch("/api/shopping-lists/:listId/items/:itemId", (req, res) => {
  const list = shoppingLists.find((l) => l.id === req.params.listId);
  if (!list) {
    return res.status(404).json({ message: "Shopping list not found" });
  }

  const item = list.items.find((i) => i.id === req.params.itemId);
  if (!item) {
    return res.status(404).json({ message: "Shopping item not found" });
  }

  item.checked = req.body.checked ?? !item.checked;
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
