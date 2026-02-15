import { Page } from '@playwright/test';
import { LoginPage } from './Login.spec';
import testData from '../testdata/testData.json';
import { LogoutPage } from './Logout.spec';

export class ServiceNowTicketPage {
  constructor(private page: Page) {}  
    async createServiceNowTicket() {
        const loginPage = new LoginPage(this.page);
        const logoutPage = new LogoutPage(this.page);
        await loginPage.login(testData.username, testData.password);
        await this.page.locator("//span[contains(text(),'ServiceNow Tickets')]").click();
        await this.page.locator("//h2[contains(text(),'Open Tickets')]").click();
        await this.page.locator("//tr[td[contains(text(),'" + testData.ticketNumber + "')]]//button[.//span[contains(.,'Invite')]]").click();
        
        await this.page.locator("//mat-select[@formcontrolname='skills']").click();
        await this.page.locator("//mat-option//span[contains(text(),'Select All')]").click();
        await this.page.mouse.click(10, 10);
        await this.page.waitForTimeout(500);
        
        await this.page.locator("input[formcontrolname='vendors']").click();
        await this.page.fill("input[formcontrolname='vendors']", testData.vendorName);
        await this. page.locator("mat-option:has-text('" + testData.vendorName + "')").first().click();
        
        await this.page.locator("input[formcontrolname='vendorLocation']").click();
        await this.page.locator("//mat-radio-button[.//span[@class='mat-radio-inner-circle']]").click();
        await this.page.locator("//span[contains(text(),'Save')]").click();
       
        await this.page.locator("mat-datepicker-toggle button").click(); 
        await this.page.waitForSelector("//div[@class='mat-calendar-header']"); 
        await this.page.locator('//button[@aria-current="date"]').click(); 
        
        await this.page.locator("//span[contains(text(),'Add Self')]").click();
        await this.page.locator("//span[contains(text(),' Submit')]").click();
        await logoutPage.logout();
        await this.page.pause();

       

}
 }

