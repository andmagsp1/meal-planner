import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import { useTranslation } from "../../i18n/LanguageContext.tsx";
import styles from "./TabNavigation.module.css";
import { useTabNavigation } from "./useTabNavigation.ts";

export function TabNavigation() {
  const { isGroceryList, handleMealsClick, handleGroceryListClick } =
    useTabNavigation();
  const { t } = useTranslation();

  return (
    <div className={styles.tabNavigation}>
      <TabGroup>
        <Tab
          selected={!isGroceryList}
          onClick={handleMealsClick}
          aria-controls="recipes"
        >
          {t("recipes")}
        </Tab>
        <Tab
          selected={isGroceryList}
          onClick={handleGroceryListClick}
          aria-controls="grocery-list"
        >
          {t("groceryList")}
        </Tab>
      </TabGroup>
    </div>
  );
}
