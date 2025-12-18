import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ExperienceItem from "../experience/experienceItem";
import type { ExperienceItemProps } from "../experience/experienceItem";
import { experienceList } from "../experience/experienceList";

describe("ExperienceItem", () => {
  const baseProps: ExperienceItemProps = experienceList[0];

  const setup = (props = baseProps) => render(<ExperienceItem {...props} />);

  it("renders the date", () => {
    setup();

    expect(screen.getByText(baseProps.date)).toBeInTheDocument();
  });

  it("renders the position and company", () => {
    setup();

    expect(
      screen.getByText(baseProps.position, { exact: false })
    ).toBeInTheDocument();

    expect(screen.getByText(baseProps.company)).toBeInTheDocument();
  });

  it("renders the company as a link when href is provided and opens in a new tab safely", () => {
    setup();

    const link = screen.getByRole("link", {
      name: baseProps.company,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", baseProps.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the company as plain text when href is empty", () => {
    setup({ ...baseProps, href: undefined });

    expect(
      screen.queryByRole("link", { name: baseProps.company })
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(baseProps.company, { exact: false })
    ).toBeInTheDocument();
  });

  it("renders the '@' symbol before the company name", () => {
    setup();

    expect(screen.getByText(/@/i)).toBeInTheDocument();
  });
});
