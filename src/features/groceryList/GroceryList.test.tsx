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

  it("renders each item with amount, name, and a checkbox", async () => {
    vi.mocked(useGroceryList).mockReturnValue({
      items: [
        {
          id: "1",
          ingredientName: "Pasta",
          amount: "200g",
          checked: false,
          recipeNames: ["Carbonara"],
        },
        {
          id: "2",
          ingredientName: "Ost",
          amount: "100g",
          checked: true,
          recipeNames: ["Carbonara"],
        },
      ],
      isLoading: false,
      isError: false,
    });

    await renderWithProviders(<GroceryList />);

    expect(screen.getByText("200g Pasta")).toBeDefined();
    expect(screen.getByText("100g Ost")).toBeDefined();

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes[0].getAttribute("checked")).toBeNull();
    expect(checkboxes[1].getAttribute("checked")).not.toBeNull();
  });
});
