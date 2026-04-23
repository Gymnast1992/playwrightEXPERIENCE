import { Page, Locator, expect } from '@playwright/test';

export class MagieDuChapiteauPage {
  readonly page: Page;
  readonly mainTitleText: Locator;
  readonly picturesLi: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTitleText = page.locator('.t-uptitle_sm');
    this.picturesLi = page.locator('ul li');
  }

  async verifyMainTitleText(text: string) {
    await expect(this.mainTitleText).toContainText(text);
  }

  async verifyLengthOfTheLi(length: number) {
    await expect(this.picturesLi).toHaveCount(length);
  }
}
