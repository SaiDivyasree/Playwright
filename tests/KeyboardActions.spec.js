const {test,expect} =require('@playwright/test')
test('Keyboard Actions',async({page})=>{
    
    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('//textarea[@name="text1"]').fill('Welcome to textarea')

    await page.keyboard.press('Control+A')

    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')

    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')

    await page.keyboard.down('Tab')

    await page.keyboard.up('Tab')

    await page.waitForTimeout(5000)
})