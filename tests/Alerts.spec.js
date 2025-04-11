import {test,expect} from '@playwright/test'

test.skip('Alerts-Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //Simple ALert
    // page.on('dialog', async dialog => {
    //     expect(dialog.type()).toContain('alert')
    //     expect(dialog.message()).toContain('I am an alert box!')
    //     await dialog.accept();

    // })

    // await page.click('//button[normalize-space()="Simple Alert"]');
    // await page.waitForTimeout(5000);

    //Confirmation Alert
//     page.on('dialog',async dialog =>{
//         expect(dialog.type()).toContain('confirm')
//         expect(dialog.message()).toContain('Press a button!')
//         await page.waitForTimeout(3000)
//         await dialog.dismiss();

//     })
//     await page.click('#confirmBtn')
//     await page.waitForTimeout(3000);
//     await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
})

test('Prompt Alert Test',async({page})=>{

    const val='Mary';
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        await dialog.accept(val)

    })
    await page.click('#promptBtn')
    await expect(page.locator('#demo')).toContainText('Hello '+val+'! How are you today?')
    // await page.waitForTimeout(2000)

})