import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import HomeMyStack from "../my-stack";

// Mock the data source
vi.mock("@/data/my-stack", () => ({
  myStackData: [
    {
      category: "Front-end",
      items: [
        { name: "React", slug: "react" },
        { name: "TypeScript", slug: "typescript" },
      ],
    },
    {
      category: "Back-end",
      items: [{ name: "Node.js", slug: "nodejs" }],
    },
  ],
}));

// Mock layout and heading components
vi.mock("@/layout/layout", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout-wrapper">{children}</div>
  ),
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

vi.mock("@/components/ui/heading", () => ({
  default: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
}));

describe("HomeMyStack Component", () => {
  it("renders the main 'My Stack' heading", () => {
    render(<HomeMyStack />);

    expect(
      screen.getByRole("heading", { name: /my stack/i })
    ).toBeInTheDocument();
  });

  it("renders all categories from the stack data", () => {
    render(<HomeMyStack />);

    expect(screen.getByText(/front-end/i)).toBeInTheDocument();
    expect(screen.getByText(/back-end/i)).toBeInTheDocument();
  });

  it("renders items and their names correctly", () => {
    render(<HomeMyStack />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });
});
