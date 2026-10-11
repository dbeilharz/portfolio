import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router";
import LatestWorkItem, { type latestWorkItemProps } from "../latest-work-item";

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

describe("LatestWorkItem Component", () => {
  const baseProps: latestWorkItemProps = {
    name: "Stock Locator",
    skills: ["React", "TypeScript", "Tailwind"],
    linkTo: "/projects/stock-locator",
    image: "/images/stock-desktop.png",
    imageMobile: "/images/stock-mobile.png",
    imageDescription: "Stock results dashboard preview",
  };

  it("renders the project name and image alt text correctly", () => {
    render(
      <MemoryRouter>
        <LatestWorkItem {...baseProps} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /stock locator/i })
    ).toBeInTheDocument();

    const image = screen.getByAltText(/stock results dashboard preview/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", baseProps.image);
  });

  it("renders all skill pills", () => {
    render(
      <MemoryRouter>
        <LatestWorkItem {...baseProps} />
      </MemoryRouter>
    );

    baseProps.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders the 'Explore' button when linkTo is provided", () => {
    render(
      <MemoryRouter>
        <LatestWorkItem {...baseProps} />
      </MemoryRouter>
    );

    const exploreLink = screen.getByRole("link", { name: /explore/i });
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute("href", baseProps.linkTo);
  });

  it("does not render the 'Explore' button when linkTo is omitted", () => {
    const propsWithoutLink = { ...baseProps, linkTo: undefined };

    render(
      <MemoryRouter>
        <LatestWorkItem {...propsWithoutLink} />
      </MemoryRouter>
    );

    const exploreLink = screen.queryByRole("link", { name: /explore/i });
    expect(exploreLink).not.toBeInTheDocument();
  });
});
