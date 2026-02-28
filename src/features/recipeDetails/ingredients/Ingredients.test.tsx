import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { Ingredients } from "./Ingredients.tsx";

describe("Ingredients", () => {
  it("renders heading 'Ingredienser'", async () => {
    await renderWithProviders(<Ingredients ingredients={[]} />);

    expect(
      screen.getByRole("heading", { name: "Ingredienser" }),
    ).toBeDefined();
  });

  it("renders each ingredient with amount and name", async () => {
    await renderWithProviders(
      <Ingredients
        ingredients={[
          { id: "1", amount: "200g", name: "Pasta" },
          { id: "2", amount: "100g", name: "Bacon" },
        ]}
      />,
    );

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe("200g Pasta");
    expect(items[1].textContent).toBe("100g Bacon");
  });

  it("renders empty list when no ingredients", async () => {
    await renderWithProviders(<Ingredients ingredients={[]} />);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
