import {test,expect} from '@playwright/test'

test('Bootstrap drodown test',async({page})=>{

    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    // const opt = await page.$$('ul>li label input')
    // await expect(opt.length).toBe(11)
    // Click the multiselect dropdown to open options
    await page.click("button.multiselect");
    // Wait for options to be visible
    await page.waitForSelector("ul.multiselect-container li");
    // Get all options inside the dropdown
    const options = await page.$$("ul.multiselect-container li");
    // Loop through options and select 'Angular' or 'Java'
    for (let option of options) {
        const text = await option.textContent();
        if (text.includes("Angular") || text.includes("Java")) {
            await option.click();
        }
    }

})