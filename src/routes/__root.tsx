import { createRootRoute, Outlet, useMatch } from "@tanstack/react-router";
import { TabNavigation } from "../components/tabNavigation/TabNavigation.tsx";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const isRecipeDetail = useMatch({
    from: "/recipe/$recipeId",
    shouldThrow: false,
  });

  return (
    <>
      {!isRecipeDetail && <TabNavigation />}
      <Outlet />
    </>
  );
}
