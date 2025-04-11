import {test,expect} from '@playwright/test';

test('Locators',async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector("#login2", { state: "visible", timeout: 10000 }); 
    await page.locator("#login2").click();

    await page.fill('#loginusername','pavanol');
    await page.fill("input[id='loginpassword']",'test@123');
    await page.click("//button[normalize-space()='Log in']");
    await page.close();
});