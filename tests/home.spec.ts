import { test, expect } from "@playwright/test";

const { describe } = test;

describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("Daniel Beilharz - Portfolio");
  });

  test("should display all page elements", async ({ page }) => {
    await expect(
      page.getByText("Daniel Beilharz", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Hello, my name is Daniel" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Professional Experience" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Latest Work" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Get in touch >" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Get in touch", exact: true })
    ).toBeVisible();
    await expect(page.getByText("© Copyright 2025 Daniel")).toBeVisible();
  });
});
