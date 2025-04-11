import { test, expect } from '@playwright/test';

test.skip('Handle-Frames', async ({ page }) => {
   await page.goto('https://ui.vision/demo/webtest/frames/')
   const allframes=page.frames()
   console.log("Number of frames"+allframes.length)

   //Using Name or url
//    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//    await frame1.fill('//input[@name="mytext1"]','Hello')
   
//    await page.waitForTimeout(3000);

    //using locator
    const fran=await page.frameLocator('//frame[@src="frame_1.html"]').locator("[name='mytext1']")
    await fran.fill('Second Test')
    await page.waitForTimeout(3000);

});

test('Handle-Inner-Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

     //using locator
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const childf=await frame3.childFrames();
    await childf[0].locator('#i6 > div.vd3tt > div').check();
    await page.waitForTimeout(2000);
    await childf[0].click('//div[@id="i21"]/following::div[2]')
    await page.waitForTimeout(2000);

    
 
 });
