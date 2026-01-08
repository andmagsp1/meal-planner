import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TabNavigation } from "../components/tabNavigation/TabNavigation.tsx";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <TabNavigation />
      <Outlet />
    </>
  );
}
