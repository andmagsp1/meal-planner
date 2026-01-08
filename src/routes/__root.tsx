import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import {
  createRootRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isGroceryList = location.pathname === "/grocery-list";

  return (
    <>
      <TabGroup>
        <Tab
          selected={!isGroceryList}
          onClick={() => navigate({ to: "/" })}
          aria-controls="meals"
        >
          Meals
        </Tab>
        <Tab
          selected={isGroceryList}
          onClick={() => navigate({ to: "/grocery-list" })}
          aria-controls="grocery-list"
        >
          Grocery list
        </Tab>
      </TabGroup>
      <Outlet />
    </>
  );
}
