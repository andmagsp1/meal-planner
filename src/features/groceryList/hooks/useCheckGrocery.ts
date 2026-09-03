import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkGroceryItem } from "../../../api/shoppingList.ts";

const PLAN_ID = "1";

export function useCheckGrocery() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ itemId, checked }: { itemId: string; checked: boolean }) =>
      checkGroceryItem(PLAN_ID, itemId, checked),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["shoppingList"] }),
  });

  return {
    checkGrocery: (itemId: string, checked: boolean) =>
      mutation.mutate({ itemId, checked }),
  };
}
