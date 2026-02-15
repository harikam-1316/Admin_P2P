import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.spec';
import testData from '../testdata/testData.json';   
import { ServiceNowTicketPage } from '../pages/ServiceNowTicket.spec';
import { LogoutPage } from '../pages/Logout.spec';
test('ServiceNow Ticket Test', async ({ page }) => {
  
  const serviceNowTicketPage = new ServiceNowTicketPage(page);

  await serviceNowTicketPage.createServiceNowTicket();

});