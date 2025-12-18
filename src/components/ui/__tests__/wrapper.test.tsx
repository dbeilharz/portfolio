import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Wrapper from "../wrapper";
import type { WrapperProps } from "../wrapper";

const sampleText = "Sample Content";

const setup = (props: Partial<WrapperProps> = {}) =>
  render(
    <Wrapper {...props}>
      <p>{sampleText}</p>
    </Wrapper>
  );

describe("Wrapper", () => {
  it("renders children", () => {
    setup();

    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  it("renders a section by default", () => {
    setup();

    const section = screen.getByText(sampleText).closest("section");
    expect(section).toBeInTheDocument();
  });

  it("renders the correct HTML tag when `as` is provided", () => {
    setup({ as: "header" });

    const header = screen.getByText(sampleText).closest("header");
    expect(header).toBeInTheDocument();
  });

  it("applies background class names to the outer wrapper", () => {
    setup({ bgClassName: "bg-red-500" });

    const outer = screen.getByText(sampleText).closest("section");
    expect(outer).toHaveClass("bg-red-500");
  });

  it("applies custom class names to the inner container", () => {
    setup({ className: "items-center text-center" });

    const inner = screen.getByText(sampleText).parentElement;
    expect(inner).toHaveClass("items-center");
    expect(inner).toHaveClass("text-center");
  });

  it("always includes base layout classes", () => {
    setup();

    const outer = screen.getByText(sampleText).closest("section");
    const inner = screen.getByText(sampleText).parentElement;

    expect(outer).toHaveClass("flex");
    expect(outer).toHaveClass("justify-center");

    expect(inner).toHaveClass("flex");
    expect(inner).toHaveClass("max-w-360");
  });

  it("merges class names correctly without duplication conflicts", () => {
    setup({ className: "flex-row" });

    const inner = screen.getByText(sampleText).parentElement;
    expect(inner).toHaveClass("flex-row");
  });
});
