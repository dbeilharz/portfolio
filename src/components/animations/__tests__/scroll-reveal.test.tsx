import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ScrollReveal } from "../scroll-reveal";

// Mock IntersectionObserver
let observerCallback: IntersectionObserverCallback;

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

describe("ScrollReveal Component", () => {
  it("renders children correctly", () => {
    render(
      <ScrollReveal>
        <p>Test Content</p>
      </ScrollReveal>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies initial hidden state classes", () => {
    const { container } = render(
      <ScrollReveal>
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("opacity-0");
    expect(wrapper).toHaveClass("-translate-x-16");
  });

  it("applies the correct transition delay inline style", () => {
    const { container } = render(
      <ScrollReveal delay={300}>
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ transitionDelay: "300ms" });
  });

  it("changes to visible state when intersection occurs", () => {
    const { container } = render(
      <ScrollReveal>
        <div>Content</div>
      </ScrollReveal>
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass("opacity-0");

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: true,
            target: wrapper,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(wrapper).toHaveClass("opacity-100");
    expect(wrapper).toHaveClass("translate-x-0");
  });
});
