import {test,expect} from '@playwright/test'

test('Locators Built-in',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const text=page.getByAltText('company-branding');
    await expect(text).toBeVisible();
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole("button",{type:"submit"}).click();

})