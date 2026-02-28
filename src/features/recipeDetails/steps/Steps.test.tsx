import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "../../../test/renderWithProviders.tsx";
import { Steps } from "./Steps.tsx";

describe("Steps", () => {
  it("renders heading 'Fremgangsmåte'", async () => {
    await renderWithProviders(<Steps steps="Step one" />);

    expect(
      screen.getByRole("heading", { name: "Fremgangsmåte" }),
    ).toBeDefined();
  });

  it("renders each step as a list item", async () => {
    await renderWithProviders(<Steps steps="1. Boil pasta 2. Make sauce" />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe("Boil pasta");
    expect(items[1].textContent).toBe("Make sauce");
  });
});
