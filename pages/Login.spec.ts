import { Page } from "@playwright/test";
export class LoginPage {
constructor(private page: Page) {}
async login(username: string, password: string) {
    await this.page.goto("https://enterprisep2p_admin_test.cormsquare.com/login/forget-pasword");
    await this.page.locator("//input[@formcontrolname='email']").fill(username);
    await this.page.locator("//input[@formcontrolname='password']").fill(password);
    await this.page.locator("//button[contains(text(),'Login')]").click();

  const proceedButton = this.page.locator("//span[contains(text(),'Proceed')]");

try {
  await proceedButton.waitFor({ state: 'visible', timeout: 3000 });
  await proceedButton.click();
} catch {
  console.log("No proceed popup displayed");
}

}
}