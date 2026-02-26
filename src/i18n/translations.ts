type TranslationMap = Record<string, { no: string; en: string }>;

export const translations: TranslationMap = {
  recipes: { no: "Oppskrifter", en: "Recipes" },
  groceryList: { no: "Handleliste", en: "Grocery list" },
  loading: { no: "Laster...", en: "Loading..." },
  errorLoadingRecipes: {
    no: "Feil ved lasting av oppskrifter.",
    en: "Error loading recipes.",
  },
  errorLoadingRecipe: {
    no: "Feil ved lasting av oppskrift.",
    en: "Error loading recipe.",
  },
  back: { no: "Tilbake", en: "Back" },
  ingredients: { no: "Ingredienser", en: "Ingredients" },
  steps: { no: "Fremgangsmåte", en: "Steps" },
  mealPlanner: { no: "Meal Planner", en: "Meal Planner" },
  copyright: { no: "© 2026 Meal Planner", en: "© 2026 Meal Planner" },
  searchRecipes: { no: "Søk etter oppskrifter", en: "Search recipes" },
  noResults: { no: "Ingen oppskrifter funnet.", en: "No recipes found." },
  addToWeeklyPlan: { no: "Legg til i ukesplan", en: "Add to weekly plan" },
};
