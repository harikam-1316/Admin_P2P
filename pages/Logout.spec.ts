import { Page } from "@playwright/test";
export class LogoutPage {
  constructor(private page: Page) {}
  async logout() {
    await this.page.locator("//button[@aria-haspopup=true']").click();
    await this.page.locator("//span[contains(text(),'Log Out')]").click();
  }
  }
