import { test, expect } from '@playwright/test';

test('Fill WebHR Demo Form', async ({ page }) => {

  await page.goto('https://web.hr/demo');

  // Your Name
  await page.getByPlaceholder('Full Name').fill('manyam sushma');

  // Email
  await page.getByPlaceholder('Email Address').fill('manyamsushma346@gmail.com');

  // Company Name
  await page.locator('[placeholder="i.e: Apple"]'). type('XYZ')

  // No of Employees
  await page.locator('input[name="ne"]').fill('25');


 

  // State
  await page.getByPlaceholder('Select State').fill('Andhra Pradesh');

  // Phone Number
  await page.locator('input[type="tel"]').fill('+91 7981791020');

  // Submit
  await page.getByRole('button', { name: 'Schedule Free Demo' }).click();

});


    