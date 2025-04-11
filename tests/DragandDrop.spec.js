const{test,expect}=require('@playwright/test')
test('Drag and Drop',async({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const cap=await page.locator('//div[@id="box6"]')
    const target=await page.locator('//div[@id="box106"]')

    //Method1
    // await cap.hover()
    // await page.mouse.down()
    // await target.hover()
    // await page.mouse.up()

    // await page.waitForTimeout(5000)

    //Method2 
    await cap.dragTo(target)
    await page.waitForTimeout(5000)



})