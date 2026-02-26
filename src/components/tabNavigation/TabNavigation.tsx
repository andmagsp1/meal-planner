import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import styles from "./TabNavigation.module.css";
import { useTabNavigation } from "./useTabNavigation.ts";

export function TabNavigation() {
  const { isGroceryList, handleMealsClick, handleGroceryListClick } =
    useTabNavigation();

  return (
    <div className={styles.tabNavigation}>
      <TabGroup>
        <Tab
          selected={!isGroceryList}
          onClick={handleMealsClick}
          aria-controls="recipes"
        >
          Recipes
        </Tab>
        <Tab
          selected={isGroceryList}
          onClick={handleGroceryListClick}
          aria-controls="grocery-list"
        >
          Grocery list
        </Tab>
      </TabGroup>
    </div>
  );
}
