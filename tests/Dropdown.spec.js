const { test, expect } = require('@playwright/test');

test('Handle select dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

  await page.locator('[placeholder="Enter Name"]').fill('Sushma');
  await page.fill('#email','sushma@gmail.com');
  await page.locator('[placeholder="Enter Phone"]').fill('1234567890');
  await page.locator('[id="textarea"]').fill('Hitech city hyderabad');
  await page.locator('[id="female"]').click('female');
  await page.locator('[id="sunday"]').click('sunday','monday');
  await page.locator('[id="country"]').selectOption('India');
  await page.locator('[id="colors"]').selectOption('yellow');
  await page.locator('[id="animals"]').selectOption('Cat');

  page.locator('[placeholder="Date Picker 1 (mm/dd/yyyy)"]','01/01/2025');
  await page.locator('[placeholder="Date Picker 2 (mm/dd/yyyy)"]','01/01/2026');
  

  await page.locator('[placeholder="Start Date"]','01/01/2025');
  await page.locator('[placeholder="End Date"]','01/01/2027');
  await page.locator('[id="submit"]').click();
  await page.locator('[placeholder="Start Date"]','01/01/2025');

  await page.waitForTimeout(5000);




  
}); 

