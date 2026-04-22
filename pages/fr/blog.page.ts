import { Page, Locator, expect } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly mainBlogTitle: Locator;
  readonly imageLartDansLair: Locator;
  readonly imageMagieDuChapiteau: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainBlogTitle = page.locator('h1[field="title"]');
    this.imageLartDansLair = page.locator('.t-bgimg').nth(0);
    this.imageMagieDuChapiteau = page.locator('.t-bgimg').nth(1);
  }

  async goto() {
    await this.page.goto('/blog');
  }

  async verifyMainTitleBlogText(text: string) {
    await expect(this.mainBlogTitle).toHaveText(text);
  }

  async verifyMainBlogTitleText() {
    await expect(this.mainBlogTitle).toBeVisible();
  }

  async clickLartDansLairImage() {
    await this.imageLartDansLair.click();
  }

  async clickMagieDuChapiteauImage() {
    await this.imageMagieDuChapiteau.click();
  }
}