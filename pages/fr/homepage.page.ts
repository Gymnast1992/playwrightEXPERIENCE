import { Page, Locator, expect } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly mainTitle: Locator;
  readonly buttonHambMenu: Locator;
  readonly buttonEn: Locator;
  readonly buttonFr: Locator;
  readonly listingsHambMenu: Locator;
  readonly liAboutTheBook: Locator;
  readonly liPurchase: Locator;
  readonly liBlog: Locator;
  readonly buttonBuyTheBook: Locator;
  readonly buttonAmazon: Locator;
  readonly buttonReadMyBlog: Locator;
  readonly sectionLifeStyle: Locator;
  readonly linkAmazonFr: Locator;
  readonly linkAmazonDe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTitle = page.locator('h1.t-title');
    this.buttonHambMenu = page.locator('a [type="button"]');
    this.buttonEn = page.locator('[class="t199__lang-item"]').nth(0);
    this.buttonFr = page.locator('[class="t199__lang-item"]').nth(1);
    this.listingsHambMenu = page.locator('li.t199__menu-item-wrap');
    this.liAboutTheBook = page.locator('li.t199__menu-item-wrap').nth(0);
    this.liPurchase = page.locator('li.t199__menu-item-wrap').nth(1);
    this.liBlog = page.locator('li.t199__menu-item-wrap').nth(2);
    this.buttonBuyTheBook = page.locator('.t814__btn').nth(1);
    this.buttonAmazon = page.locator('.t-card__col');
    this.buttonReadMyBlog = page.locator('a.t-btn').nth(0);
    this.sectionLifeStyle = page.getByText('#lifestyle');
    this.linkAmazonFr = page.locator('[href="https://amzn.eu/6BpwhAi"]').nth(1);
    this.linkAmazonDe = page.locator('[href="https://amzn.eu/d/09Xg7SG3"]').nth(0);
  }

  async goto() {
    await this.page.goto('/en');
  }

  async verifyMainTitle(text: string) {
    await expect(this.mainTitle).toHaveText(text);
  }

  async clickHambMenu() {
    await this.buttonHambMenu.click({ force: true });
  }

  async verifyLangButtonEN() {
    await expect(this.buttonEn).toHaveText('EN');
  }

  async verifyLangButtonFR() {
    await expect(this.buttonFr).toHaveText('FR');
  }

  async verifyLengthHambMenuLi(num: number) {
    await expect(this.listingsHambMenu).toHaveCount(num);
  }

  async verifyAboutTheBookLi() {
    await expect(this.liAboutTheBook).toContainText('About the book');
  }

  async verifyPurchaseLi() {
    await expect(this.liPurchase).toContainText('Purchase');
  }

  async verifyBlogLi() {
    await expect(this.liBlog).toContainText('Blog');
  }

  async clickOnAboutTheBookLi() {
    await this.liAboutTheBook.click();
  }

  async verifyBuyTheBookButton() {
    await expect(this.buttonBuyTheBook).toBeVisible();
  }

  async clickOnButtonFr() {
    await this.buttonFr.click();
  }

  async clickPurchaseLi() {
    await this.liPurchase.click();
  }

  async isVisibleButtonAmazon() {
    await expect(this.buttonAmazon.first()).toBeVisible();
  }

  async clickBlogLi() {
    await this.liBlog.click();
  }

  async clickReadMyBlogButton() {
    await this.buttonReadMyBlog.click();
  }

  async isVisibleLifeStyleSection() {
    await expect(this.sectionLifeStyle).toBeVisible();
  }

  async verifyAmazonFrLink(link: string) {
    await expect(this.linkAmazonFr).toHaveAttribute('href', link);
  }

  async verifyAmazonDeLink(link: string) {
    await expect(this.linkAmazonDe).toHaveAttribute('href', link);
  }
}