// @ts-check
import { test, expect } from '@playwright/test';
import { Homepage } from '../../pages/fr/homepage.page';

test.beforeEach('Open start URL', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://experience-book.com/');
});

test('Verify homepage title', async ({ page }) => {
  const homepage = new Homepage(page);
  // Expect a title "to contain" a substring.
  await homepage.verifyMainTitle("l'Expérience");
});

test('À propos du livre button', async ({ page }) => {
  const locator = page.locator('h3');

  // Click the get started link.
  await page.getByRole('link', { name: 'À propos du livre' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(locator).toContainText('À propos du livre');
});
