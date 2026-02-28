import { describe, expect, it } from "vitest";
import { formatDescription } from "./formatDescription";

describe("formatDescription", () => {
  it("returns an empty string as-is", () => {
    expect(formatDescription("")).toBe("");
  });

  it("returns a short string (≤ 50 chars) as-is", () => {
    expect(formatDescription("Short description")).toBe("Short description");
  });

  it("returns a string of exactly 50 chars as-is", () => {
    const input = "a".repeat(50);
    expect(formatDescription(input)).toBe(input);
  });

  it("truncates a 51-char string to 100 chars + '...'", () => {
    const input = "a".repeat(51);
    expect(formatDescription(input)).toBe(`${"a".repeat(51)}...`);
  });

  it("truncates a long string (> 100 chars) to first 100 chars + '...'", () => {
    const input = "a".repeat(200);
    expect(formatDescription(input)).toBe(`${"a".repeat(100)}...`);
  });
});
