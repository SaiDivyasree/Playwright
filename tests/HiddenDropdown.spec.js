import {test,expect} from '@playwright/test'

test('Hidden dropdown Test',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(3000);
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.click("[type='submit']")

    await page.click("//span[normalize-space()='PIM']")
    await page.click("(//div[@class='oxd-select-text oxd-select-text--active'])[3]")

    await page.waitForTimeout(3000);
    const options=await page.$$("//div[@role='listbox']//span")

    for(let option of options){
        const jobs=await option.textContent();
        // console.log(jobs);
        if(jobs.includes('QA Engineer'))
        {
            await expect(jobs).toBeTruthy();
            await option.click();
            await page.waitForTimeout(3000);
            break;
        }
    }




})