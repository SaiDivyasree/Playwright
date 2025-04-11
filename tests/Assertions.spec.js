const {test,except, expect} = require('@playwright/test')

test('AssertionsTest',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    const check= page.locator("//input[@type='checkbox']")
    await expect(check).toBeEnabled();

})