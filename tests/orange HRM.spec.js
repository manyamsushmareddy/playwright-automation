const { test, expect } = require('@playwright/test');

test('Orange HRM Login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill("input[name='username']", 'Admin');
    await page.fill("input[type='password']", 'admin123');

    await page.click("button[type='submit']");

    
});



