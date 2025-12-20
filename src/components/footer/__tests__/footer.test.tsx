import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "../footer";

const setup = () => render(<Footer />);

describe("Footer", () => {
  it("renders inside a <footer> element", () => {
    const { container } = setup();

    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
  });

  it("renders the footer with copyright text", () => {
    setup();

    const text = screen.getByText(/daniel beilharz/i);
    expect(text).toBeInTheDocument();
  });

  it("renders a link to GitHub which opens in a new tab with no referrer", () => {
    setup();

    const link = screen.getByRole("link", {
      name: /github/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/dbeilharz/portfolio"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
