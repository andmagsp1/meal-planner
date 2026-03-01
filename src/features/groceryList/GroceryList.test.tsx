import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../test/renderWithProviders.tsx";
import { GroceryList } from "./GroceryList.tsx";

vi.mock("./hooks/useGroceryList.ts", () => ({
  useGroceryList: vi.fn(),
}));

import { useGroceryList } from "./hooks/useGroceryList.ts";

describe("GroceryList", () => {
  it("shows loading message while loading", async () => {
    vi.mocked(useGroceryList).mockReturnValue({
      items: [],
      isLoading: true,
      isError: false,
    });

    await renderWithProviders(<GroceryList />);

    expect(screen.getByText("Laster...")).toBeDefined();
  });

  it("shows error message when loading fails", async () => {
    vi.mocked(useGroceryList).mockReturnValue({
      items: [],
      isLoading: false,
      isError: true,
    });

    await renderWithProviders(<GroceryList />);

    expect(screen.getByText("Feil ved lasting av handleliste.")).toBeDefined();
  });
});
