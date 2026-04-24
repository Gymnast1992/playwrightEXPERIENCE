import { test, expect } from '@playwright/test';
import { Homepage } from '../../pages/fr/homepage.page';

test.describe('Homepage', () => {
  test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('https://experience-book.com/');
  });

  test('TC_01, Verify homepage page title is displayed correctly', async ({
    page,
  }) => {
    const homepage = new Homepage(page);
    // Expect a title "to contain" a substring.
    await homepage.verifyMainTitle("l'Expérience");
  });

  test('TC_02, Verify EN and FR language buttons are visible in the header', async ({
    page,
  }) => {
    const buttonEn = page.locator('a.t199__lang-item', { hasText: 'EN' });
    const buttonFr = page.locator('a.t199__lang-item', { hasText: 'FR' });

    await expect(buttonEn).toBeVisible();
    await expect(buttonFr).toBeVisible();
  });

  test('TC_03, Verify user can switch language from French to English', async ({
    page,
  }) => {
    await page.locator('a.t199__lang-item', { hasText: 'EN' }).click();

    // Verify English page loaded (URL + title)
    await expect(page).toHaveURL(/\/en/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'The Experience',
    );
  });

  test('TC_04, Verify 3 header buttons are displayed in the hamburger menu', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.locator('.t-menuburger.t-menuburger_first').click();

    const menuItems = page.locator('nav li');

    await expect(menuItems).toHaveCount(3);
    await expect(menuItems.nth(0)).toContainText('À propos du livre');
    await expect(menuItems.nth(1)).toContainText('Achat');
    await expect(menuItems.nth(2)).toContainText('Blog');
  });

  test('TC_05, Verify "À propos du livre" button', async ({ page }) => {
    const button = page.locator('h3');

    await page.getByRole('link', { name: 'À propos du livre' }).click();
    await expect(button).toContainText('À propos du livre');
  });

  test('TC_06, Verify "Achat" button is clickable and navigates to the correct section', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.locator('.t-menuburger.t-menuburger_first').click();
    await page.getByRole('link', { name: 'Achat' }).click();

    await expect(page).toHaveURL(/#rec/);
    await expect(
      page.getByRole('link', { name: /Amazon/i }).first(),
    ).toBeVisible();
  });

  test('TC_07, Verify "Blog" button is clickable and navigates to the correct page', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Blog' }).click();

    await expect(page).toHaveURL(/\/blog_fr/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('TC_08, Verify "En savoir plus" button is clickable and navigates to the correct section', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'En savoir plus' }).click();

    await expect(page).toHaveURL(/page68596067|#rec/);
    await expect(page.getByText('Maksym Semiankiv')).toBeVisible();
  });

  test('TC_09, Verify #Styledevie section on the page', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: '#Styledevie' }),
    ).toBeVisible();
  });

  test('TC_10, Verify US Amazon link', async ({ page }) => {
    const amazonUS = page.getByRole('link', { name: /Amazon\.com/i });

    await expect(amazonUS).toBeVisible();
    await expect(amazonUS).toHaveAttribute(
      'href',
      'https://amazon.com/dp/1779418388',
    );
  });

  test('TC_11, Verify French Amazon link', async ({ page }) => {
    const amazonFR = page.getByRole('link', { name: /Amazon\.fr/i }).nth(1);

    await expect(amazonFR).toBeVisible();
    await expect(amazonFR).toHaveAttribute('href', 'https://amzn.eu/6BpwhAi');
  });
});
