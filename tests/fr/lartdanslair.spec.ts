import { test, expect } from '@playwright/test';
import { LartDansLairPage } from '../../pages/fr/lartdanslair.page';
import { Homepage } from '../../pages/fr/homepage.page';

const mainTitleText = 'LA FORMATION';
const mainTitleHomepageFr = "l'Expérience";

test.describe('Lart dans lair', () => {
  let lartdanslairPage: LartDansLairPage;
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    lartdanslairPage = new LartDansLairPage(page);
    homepage = new Homepage(page);

    await page.goto('/blog_fr/lart_dans_lair');
  });

  test('TC_01, Verify "Lart dans lair" page is displayed correctly', async () => {
    await lartdanslairPage.verifyMainTitleText(mainTitleText);
  });

  test('TC_02, Verify "Retour à laccueil" button navigates to the homepage', async () => {
    await lartdanslairPage.clickReturnHomeButtonFr();
    await homepage.verifyMainTitle(mainTitleHomepageFr);
  });
});
