import { test, expect } from '@playwright/test';
import { MagieDuChapiteauPage } from '../../pages/fr/magieduchapiteau.page';

const mainTitleBlogTextFr = 'La Magie du Chapiteau';

test.describe('MagieduChapiteau', () => {
  let magieduchapiteauPage: MagieDuChapiteauPage;

  test.beforeEach(async ({ page }) => {
    magieduchapiteauPage = new MagieDuChapiteauPage(page);
    await page.goto('/blog_fr/magie_du_chapiteau');
  });

  test('TC_01, Verify the main title on the page', async () => {
    await magieduchapiteauPage.verifyMainTitleText(mainTitleBlogTextFr);
  });

  test('TC_02, Verify the length of pictures listing', async () => {
    await magieduchapiteauPage.verifyLengthOfTheLi(13);
  });
});
