// @ts-check
import { test, expect } from '@playwright/test';

test('Verify homepage title', async ({ page }) => {
  await page.goto('https://experience-book.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/L'expérience/);
});

test('À propos du livre button', async ({ page }) => {
  const locator = page.locator('h3');
  await page.goto('https://experience-book.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'À propos du livre' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(locator).toContainText('À propos du livre');
});
