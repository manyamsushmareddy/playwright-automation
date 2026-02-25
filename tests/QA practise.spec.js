const{test, expect} = require('@playwright/test');

test('QA practise flatform', async ({ page }) => {

     await page.goto('https://www.learnaqa.info/register/');
    await page.locator('[placeholder="Enter your full name"]').fill('sushma');
    await page.locator('[placeholder="Enter your email"]').fill('manyamsushmareddy@gmail.com');
await page.locator('[placeholder="Create a strong password"]').fill('Sushma@12345');
await page.getByRole('button', { name: /Create/i }).click();



   

})