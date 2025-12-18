import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Heading from "../heading";
import type { HeadingProps } from "../heading";

const sampleText = "Heading";

const setup = (props: Partial<HeadingProps> = {}) =>
  render(<Heading {...props}>{sampleText}</Heading>);

describe("Heading", () => {
  it("renders children", () => {
    setup();

    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  it("renders an h1 by default", () => {
    setup();

    const heading = screen.getByText(sampleText);
    expect(heading.tagName).toBe("H1");
  });

  it("renders the correct heading level when `as` is provided", () => {
    setup({ as: "h2" });

    const heading = screen.getByText(sampleText);
    expect(heading.tagName).toBe("H2");
  });

  it("applies custom class names", () => {
    setup({ className: "text-red-500" });

    const heading = screen.getByText(sampleText);
    expect(heading).toHaveClass("text-red-500");
  });

  it("always includes base heading styles", () => {
    setup();

    const heading = screen.getByText(sampleText);

    expect(heading).toHaveClass("font-poppins");
    expect(heading).toHaveClass("text-heading");
    expect(heading).toHaveClass("text-2xl");
  });

  it("merges class names correctly", () => {
    setup({ className: "font-bold" });

    const heading = screen.getByText(sampleText);
    expect(heading).toHaveClass("font-bold");
  });
});
