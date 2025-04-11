const{test,expect}=require('@playwright/test')
test('Mouse hover', async({page})=>{
    await page.goto('https://www.spicejet.com/')

    page.getByText('Add-ons').first().hover();

    //mouse hover
    await page.getByText('Taxi').first().click();
    await page.waitForTimeout(5000)
})