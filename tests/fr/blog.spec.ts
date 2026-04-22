import { test } from '@playwright/test';
import { BlogPage } from '../../pages/fr/blog.page';
import { LartDansLairPage } from '../../pages/fr/lartdanslair.page';
import { MagieDuChapiteauPage } from '../../pages/fr/magieduchapiteau.page';

const mainTitleBlogText = `"Ma vie est un livre que j'écris en ce moment même, et j'aimerais la vivre de façon magnifique." Maksym Semiankiv `;

const mainTitleBlogTextFr = 'La Magie du Chapiteau';

test.describe('Blog_fr', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://experience-book.com/blog_fr');
  });

  test('TC_01, Verify the main text is displayed in the page heading', async ({
    page,
  }) => {
    const blogPage = new BlogPage(page);

    await blogPage.verifyMainTitleBlogText(mainTitleBlogText);
  });

  test('TC_02, Verify image "Lart dans lair" is clickable and redirects to the correct page', async ({
    page,
  }) => {
    const blogPage = new BlogPage(page);
    const lartdanslairPage = new LartDansLairPage(page);

    await blogPage.clickLartDansLairImage();
    await lartdanslairPage.isVisibleTitle();
  });

  test('TC_03, Verify image "La Magie du Chapiteau" is clickable and navigates to the correct page', async ({
    page,
  }) => {
    const blogPage = new BlogPage(page);
    const magieduchapiteauPage = new MagieDuChapiteauPage(page);

    await blogPage.clickMagieDuChapiteauImage();
    await magieduchapiteauPage.verifyMainTitleText(mainTitleBlogTextFr);
  });
});
