import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../network/getRecipes.ts";

export const useRecipes = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getRecipes,
  });

  return { data, isError, isLoading };
};
