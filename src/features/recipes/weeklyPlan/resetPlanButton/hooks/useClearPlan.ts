import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearAllMeals } from "../../../../../api/weeklyPlan.ts";

const PLAN_ID = "1";

export function useClearPlan() {
  const queryClient = useQueryClient();

  const clearPlanMutation = useMutation({
    mutationFn: () => clearAllMeals(PLAN_ID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  return { clearPlan: () => clearPlanMutation.mutate() };
}
