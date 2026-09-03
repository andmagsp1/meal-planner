import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { LanguageProvider } from "../i18n/LanguageContext.tsx";

export async function renderWithProviders(ui: ReactNode) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  const rootRoute = createRootRoute({
    component: () => ui,
  });

  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });

  await router.load();

  return render(
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/* @ts-expect-error -- router type mismatch due to minimal route tree */}
        <RouterProvider router={router} />
      </LanguageProvider>
    </QueryClientProvider>,
  );
}
