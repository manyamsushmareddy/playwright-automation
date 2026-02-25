/* const {test, expect} = require ('@playwright/test')

test('demoappli.tools', async ({ page }) => {
    await page .goto('https://demo.applitools.com/');
    await page.fill('#username', 'sushma');
    await page.type ('[placeholder="Enter your password"]','sush@123');
    await page.click('#log-in');

    */

 const { test, expect } = require('@playwright/test');

test('Hover and click submenu', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  // Close login popup if appears
  await page.keyboard.press('Escape');

  // Hover over Fashion menu
  await page.hover('text=Fashion');

  // Click on Men T-Shirts
  await page.click('text=Men T-Shirts');
});

    
    


    
