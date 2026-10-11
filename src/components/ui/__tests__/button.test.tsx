import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router";
import Button from "../button";

describe("Button Component", () => {
  it("renders a standard button by default with primary styling", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary text-white");
  });

  it("renders an outline variant correctly", () => {
    render(<Button variant="outline">Outline</Button>);

    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("border border-primary text-primary");
  });

  it("handles click events on a standard button", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as an anchor tag when href is provided", () => {
    render(<Button href="https://github.com">GitHub</Button>);

    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com");
  });

  it("renders as a React Router Link when 'to' is provided", () => {
    render(
      <MemoryRouter>
        <Button to="/projects">Explore Projects</Button>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /explore projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button", { name: /small/i })).toHaveClass(
      "text-sm"
    );

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button", { name: /large/i })).toHaveClass(
      "text-lg"
    );
  });
});
