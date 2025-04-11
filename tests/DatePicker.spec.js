import {test,expect} from '@playwright/test'

test('Date-Picker-Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.fill('#datepicker','06/09/2023')

    // await page.waitForTimeout(5000)

    const year="2026"
    const month="March"
    const day="14"
    //Using date picker tool
    await page.click('#datepicker')

    while(true){
        const currentYear=await page.locator('.ui-datepicker-year').textContent()
        const currentMonth=await page.locator('.ui-datepicker-month').textContent()
        if(currentYear==year && currentMonth==month)
        {
            break;
        }
        if(year>currentYear)
            await page.click('[title="Next"]')
        else
            await page.click('[title="Prev"]')
        

    }
    //date selection using loop
    // const dates=await page.$$('//a[@class="ui-state-default"]')
    // for(const dt of dates){
    //     if(await dt.textContent()==day){
    //         await dt.click();
    //         break;
    //     }
    // }
    //without loop
    await page.click(`//a[@data-date="${day}"]`)
    await page.waitForTimeout(3000)


    
})