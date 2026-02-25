const { test, expect } = require('@playwright/test');

test('Handle select dropdown', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.pause();  

  // Select by visible text
await page.click('#multiselect-dropdown');   // open dropdown
await page.click('text=Red');  
         // select option

  
}); 
/*
const { test, expect } = require('@playwright/test');

test('Handle radio button', async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');

  await page.locator('#yesRadio').check();

  await expect(page.locator('.text-success')).toHaveText('Yes');
});
*/
