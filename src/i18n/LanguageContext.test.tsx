import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage, useTranslation } from "./LanguageContext.tsx";

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("LanguageContext", () => {
  it("useLanguage returns default lang 'no'", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    expect(result.current.lang).toBe("no");
  });

  it("useLanguage throws when used outside provider", () => {
    expect(() => {
      renderHook(() => useLanguage());
    }).toThrow("useLanguage must be used within a LanguageProvider");
  });

  it("useTranslation returns Norwegian text by default", () => {
    const { result } = renderHook(() => useTranslation(), { wrapper });

    expect(result.current.t("loading")).toBe("Laster...");
  });
});
