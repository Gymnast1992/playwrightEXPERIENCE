import { Page, Locator, expect } from '@playwright/test';

export class LartDansLairPage {
  readonly page: Page;
  readonly textTitle: Locator;
  readonly mainTitleText: Locator;
  readonly buttonReturnHomeFr: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textTitle = page.getByText('LA FORMATION');
    this.mainTitleText = page.locator('.t001__title');
    this.buttonReturnHomeFr = page.locator('.t-menu-base__logo');
  }

  async isVisibleTitle() {
    await expect(this.textTitle).toBeVisible();
  }

  async verifyMainTitleText(title: string) {
    await expect(this.mainTitleText).toContainText(title);
  }

  async clickReturnHomeButtonFr() {
    await this.buttonReturnHomeFr.click();
  }
}