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
});
