const{test,expect} = require('@playwright/test')

test('SIngle File',async({page})=>{
   
    await page.goto('https://www.careerbuilder.com/')

    await page.locator('//span[normalize-space()="Upload/Build Resume"]').click()
   
})