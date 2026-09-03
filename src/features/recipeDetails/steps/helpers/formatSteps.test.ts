import { describe, expect, it } from "vitest";
import { formatSteps } from "./formatSteps";

describe("formatSteps", () => {
  it("splits standard numbered steps", () => {
    expect(formatSteps("1. First 2. Second")).toEqual(["First", "Second"]);
  });

  it("trims extra whitespace from steps", () => {
    expect(formatSteps("1.   Lots of space   2.  Here too  ")).toEqual([
      "Lots of space",
      "Here too",
    ]);
  });

  it("handles a single step", () => {
    expect(formatSteps("1. Only step")).toEqual(["Only step"]);
  });

  it("returns an empty array for an empty string", () => {
    expect(formatSteps("")).toEqual([]);
  });

  it("handles steps without space after the dot", () => {
    expect(formatSteps("1.First 2.Second")).toEqual(["First", "Second"]);
  });
});
