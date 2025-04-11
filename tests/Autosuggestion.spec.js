import {test,expect} from '@playwright/test'

test('Autosuggestion-Test',async({page})=>{


    await page.goto('https://www.redbus.in/')
    await page.waitForTimeout(3000);
    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    for(let option of fromCityOptions)
    {
        const val=await option.textContent();
        //console.log(val);
        if(val==='Mayur Vihar'){
            await option.click();
            break;
        }
    }
    const res=await page.locator("//div[contains(@class,'sc-gzVnrw')]/text[1]").textContent();
    console.log(res);
    await expect(res).toEqual('Mayur Vihar')
    await page.waitForTimeout(3000);


})