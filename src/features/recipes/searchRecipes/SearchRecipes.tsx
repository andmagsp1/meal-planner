import { Input, InputGroup } from "@sb1/ffe-form-react";
import { useTranslation } from "../../../i18n/LanguageContext.tsx";
import styles from "./searchRecipes.module.css";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchRecipes({ search, setSearch }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.SearchRecipesContainer}>
      <InputGroup label={t("searchRecipes")}>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </InputGroup>
    </div>
  );
}
