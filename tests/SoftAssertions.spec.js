//ts-check
import {test,expect} from '@playwright/test'

test('SoftAssertions-Test',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    //hard 
    await expect(page).toHaveTitle('STORE12')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    //soft
    // await expect.soft(page).toHaveTitle('STORE12')
    // await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')

})