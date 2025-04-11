import {test,expect} from '@playwright/test'

test('Dropdown-Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#country').selectOption('United Kingdom');
    // await expect(page.locator('#country')).toBeVisible();

    // await page.selectOption('#country','India');
    await page.waitForTimeout(5000);

    //case: check count of dropdown options
    // const options=await page.$$('#country option')
    // console.log('Number of options: ',options.length);
    // await expect(options.length).toBe(10);

    // const content=await page.locator('#country').textContent();
    // await expect(content.includes('United Kingdom')).toBeTruthy();

    //colors select option
    // const list=await page.locator('#colors option').allTextContents();
    // if(await list.includes('Green')){
    //     console.log('list has Green')
    // }
    // console.log('Test case completed')

    //Select multiple values from multi select dropdown
    await page.selectOption('#colors',['Blue','Green','Yellow'])
    await page.selectOption('#animals',['Cat','Deer','Giraffe'])

    await page.waitForTimeout(6000);   

    


})