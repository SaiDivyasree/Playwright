import { test, expect } from '@playwright/test';

test('Inputbox-test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();
    await expect(page.locator("//input[@id='name']")).toBeVisible();

    //radio
    await page.locator("//input[@value='male']").isVisible();
    await page.check("//input[@value='male']");
    await expect(page.locator("//input[@value='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy();


})


