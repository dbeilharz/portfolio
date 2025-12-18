import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "../header";

const authorName = "Daniel Beilharz";
const setup = () => render(<Header />);

describe("Header", () => {
  it("renders inside a header element", () => {
    const { container } = setup();

    const header = container.querySelector("header");
    expect(header).not.toBeNull();
  });

  it("renders the authors name", () => {
    setup();
    expect(screen.getByText(authorName)).toBeInTheDocument();
  });

  it("renders the headshot image with correct alt text", () => {
    setup();

    const image = screen.getByAltText(
      `Headshot of ${authorName}`
    ) as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image.src).toContain("headshot.webp");
  });

  it("renders a link to LinkedIn which opens in a new tab with no referrer", () => {
    setup();

    const link = screen.getByRole("link", {
      name: /get in touch/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/danielbeilharz/"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
