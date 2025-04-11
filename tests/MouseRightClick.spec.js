const{test,expect}=require('@playwright/test')
// test('Mouse Right Click', async({page})=>{
//     await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

//     const button=await page.locator('(//span[@class="context-menu-one btn btn-neutral"])[1]')

//     await button.click({button:'right'})
//     await page.waitForTimeout(5000)
//     await page.locator('li[class="context-menu-item context-menu-icon context-menu-icon-edit"] span').click()
//     await page.waitForTimeout(8000)

//     page.on('dialog', async dialog => {
//     expect(dialog.type()).toContain('alert')
//     expect(dialog.message()).toContain('clicked: edit')
//     await dialog.accept();

//     })
 
//await page.waitForTimeout(5000);

test('Mouse Double Click', async({page})=>{
    //Double click action
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='field1']").fill('First Text')
    const dc=await page.locator("//button[normalize-space()='Copy Text']")
    await dc.dblclick();

    await page.waitForTimeout(3000)

    const checkTxt=await page.locator("//input[@id='field2']")
    const res=await checkTxt.inputValue();
    await expect(res).toEqual('First Text')


})