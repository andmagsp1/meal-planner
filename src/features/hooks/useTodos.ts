import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../network/getTodos.ts";

export const useTodos = () => {
  const { data, isError, isLoading } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return { data, isError, isLoading };
};
