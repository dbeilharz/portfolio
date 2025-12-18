import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Pill from "../pill";
import type { PillProps } from "../pill";

const sampleText = "Sample Content";

const setup = (props: Partial<PillProps> = {}) =>
  render(<Pill {...props}>{sampleText}</Pill>);

describe("Pill", () => {
  it("renders the provided text", () => {
    setup();

    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  it("applies base pill styles", () => {
    setup();

    const pill = screen.getByText(sampleText);

    expect(pill).toHaveClass("btn");
    expect(pill).toHaveClass("border");
    expect(pill).toHaveClass("text-primary");
    expect(pill).toHaveClass("text-xs");
  });

  it("applies custom class names", () => {
    setup({ className: "bg-red-500" });

    const pill = screen.getByText(sampleText);
    expect(pill).toHaveClass("bg-red-500");
  });

  it("merges class names correctly", () => {
    setup({ className: "text-lg" });

    const pill = screen.getByText(sampleText);
    expect(pill).toHaveClass("text-lg");
  });
});
