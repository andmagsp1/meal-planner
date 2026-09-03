import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { SearchRecipes } from "./SearchRecipes.tsx";

describe("SearchRecipes", () => {
  it("renders input with current search value", async () => {
    await renderWithProviders(
      <SearchRecipes search="pasta" setSearch={vi.fn()} />,
    );

    expect(screen.getByDisplayValue("pasta")).toBeDefined();
  });

  it("calls setSearch on input change", async () => {
    const setSearch = vi.fn();
    await renderWithProviders(
      <SearchRecipes search="" setSearch={setSearch} />,
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "taco" } });

    expect(setSearch).toHaveBeenCalledWith("taco");
  });
});
