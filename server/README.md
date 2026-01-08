# Recipe API Documentation

Backend server with in-memory database for the recipe weekly planner application.

## Base URL
`http://localhost:3001`

## Endpoints

### Recipes

#### Get all recipes
```
GET /api/recipes
```
Returns an array of all available recipes.

#### Get a single recipe
```
GET /api/recipes/:id
```
Returns a single recipe by ID.

---

### Weekly Plans

#### Get all weekly plans
```
GET /api/weekly-plans
```
Returns an array of all weekly plans.

#### Get a single weekly plan
```
GET /api/weekly-plans/:id
```
Returns a single weekly plan with all planned meals.

#### Add a meal to weekly plan
```
POST /api/weekly-plans/:id/meals
```
Body:
```json
{
  "recipeId": "1",
  "dayOfWeek": 0,
  "mealType": "dinner"
}
```
- `dayOfWeek`: 0-6 (Monday-Sunday)
- `mealType`: "lunch" | "dinner"

#### Update a meal in weekly plan
```
PUT /api/weekly-plans/:planId/meals/:mealId
```
Body (all fields optional):
```json
{
  "recipeId": "2",
  "dayOfWeek": 3,
  "mealType": "lunch"
}
```

#### Delete a meal from weekly plan
```
DELETE /api/weekly-plans/:planId/meals/:mealId
```
Returns 204 No Content on success.

---

### Shopping Lists

#### Get shopping list for a weekly plan
```
GET /api/shopping-lists/:weeklyPlanId
```
Returns the shopping list for the specified weekly plan.

#### Generate shopping list from weekly plan
```
POST /api/shopping-lists/generate/:weeklyPlanId
```
Generates/regenerates a shopping list based on all meals in the weekly plan.
Aggregates ingredients from all recipes and marks which recipes need each ingredient.

#### Toggle shopping item checked status
```
PATCH /api/shopping-lists/:listId/items/:itemId
```
Body:
```json
{
  "checked": true
}
```
If `checked` is not provided, it will toggle the current status.

---

## Data Models

### Recipe
```typescript
{
  id: string;
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  description: string;
}
```

### Ingredient
```typescript
{
  id: string;
  name: string;
  amount: string;
}
```

### WeeklyPlan
```typescript
{
  id: string;
  meals: PlannedMeal[];
}
```

### PlannedMeal
```typescript
{
  id: string;
  recipeId: string;
  dayOfWeek: number; // 0-6 (Monday-Sunday)
  mealType: "lunch" | "dinner";
}
```

### ShoppingList
```typescript
{
  id: string;
  weeklyPlanId: string;
  items: ShoppingItem[];
}
```

### ShoppingItem
```typescript
{
  id: string;
  ingredientName: string;
  amount: string;
  checked: boolean;
  recipeNames: string[]; // Which recipes need this ingredient
}
```

---

## Available Recipes

1. **Kyllingwok med hoisinsaus** - Chicken stir-fry with hoisin sauce
2. **Kyllingtomatgryte med poteter** - Chicken tomato stew with potatoes
3. **Fiskegrateng med potet** - Fish gratin with potato
4. **Kyllinggryte med asiatiske smaker** - Chicken stew with Asian flavors
5. **Koreansk sesamkylling** - Korean sesame chicken

---

## Running the Server

Development mode (with auto-reload):
```bash
npm run server:dev
```

Production mode:
```bash
npm run server
```

