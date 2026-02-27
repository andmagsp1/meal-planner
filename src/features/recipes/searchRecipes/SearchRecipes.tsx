import { Input, InputGroup } from "@sb1/ffe-form-react";
import styles from "./searchRecipes.module.css";
import { useTexts } from "./texts";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchRecipes({ search, setSearch }: Props) {
  const texts = useTexts();

  return (
    <div className={styles.SearchRecipesContainer}>
      <InputGroup label={texts.searchLabel}>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </InputGroup>
    </div>
  );
}
