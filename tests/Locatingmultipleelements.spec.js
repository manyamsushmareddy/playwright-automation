const {test, expect} = require('@playwright/test');

test('locating multiple elements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    /* const links = await page.$$('a');
    
   for(const link of links)
   {
    const linktest = await link. textContent();
console.log(linktest)
   }
       */

      const products = await page.$$("//div[id="tbodyid"]//div//h4/a");

      for(const product of products)

    {
        const productname = await product.textContent();
        console.log(productname);
        
    }


})
