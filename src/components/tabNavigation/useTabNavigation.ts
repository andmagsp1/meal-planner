import { useLocation, useNavigate } from "@tanstack/react-router";

export function useTabNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isGroceryList = location.pathname === "/grocery-list";

  const handleMealsClick = () => {
    navigate({ to: "/" });
  };

  const handleGroceryListClick = () => {
    navigate({ to: "/grocery-list" });
  };

  return {
    isGroceryList,
    handleMealsClick,
    handleGroceryListClick,
  };
}
