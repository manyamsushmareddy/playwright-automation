/*const {test, expect}= require('@playwright/test')
test('my first test',async({page})=> {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})  */

    // FLIPKART
const {test, expect} = require ('@playwright/test')

test('my second test', async({page})=>{
    await page .goto('https://www.flipkart.com')

}) 

/*
//AMAZON
    const {test, expect} = require('@playwright/test')
    test('my thrid test', async({page})=>{
        await page .goto ('https://www.amazon.in')

    })  
        // NYKA --- not working due to no automation for this site


   const{test, expect} = require('@playwright/test');

   test('my fourth test', async({page})=> {
      await page.goto('https://www.nykaa.com');
})

//TIRA BEAUTY --- not working due to no automation for this site

const { test, expect } = require('@playwright/test');

test('my first test', async ({ page }) => {
  await page.goto('https://www.tirabeauty.com');
});


const{test , except } = require('@playwright/test');
test('my test', async({page})=> {
    await page .goto('https://the-internet.herokuapp.com/login');

}) 

const{test , except } = require('@playwright/test');
    test('Open OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
}) 

  const { test } = require('@playwright/test');

test('Headed mode example', async ({ page }) => {
  await page.goto('https://example.com');
});

*/
