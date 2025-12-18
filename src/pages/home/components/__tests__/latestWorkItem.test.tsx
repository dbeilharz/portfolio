import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router";
import LatestWorkItem from "../latestWork/latestWorkItem";
import type { latestWorkItemProps } from "../latestWork/latestWorkItem";
import { latestWorkList } from "../latestWork/latestWorkList";

const baseProps: latestWorkItemProps = {
  ...latestWorkList[0],
  index: 0,
};

const setup = (props = baseProps) =>
  render(
    <MemoryRouter>
      <LatestWorkItem {...props} />
    </MemoryRouter>
  );

describe("LateskWorkItem", () => {
  it("renders the project name", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: baseProps.name })
    ).toBeInTheDocument();
  });

  it("renders the skills", () => {
    setup();

    baseProps.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders view project link when it exists", () => {
    const sampleLink = "/latest-work";
    setup({ ...baseProps, linkTo: sampleLink });

    const link = screen.getByRole("link", { name: /view project/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", sampleLink);
  });

  it("does not render a link when linkTo is not provided", () => {
    setup({ ...baseProps, linkTo: undefined });

    expect(
      screen.queryByRole("link", { name: /view project/i })
    ).not.toBeInTheDocument();
  });

  it("renders the image with correct alt text", () => {
    setup();

    const image = screen.getByAltText(baseProps.imageDescription);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", baseProps.image);
  });

  it("sets the CSS --index custom property correctly", () => {
    const { container } = setup();

    const root = container.firstChild as HTMLElement;

    expect(root.style.getPropertyValue("--index")).toBe("1");
  });
});
