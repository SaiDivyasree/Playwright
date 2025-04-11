import {test,expect} from '@playwright/test'

test('Web Tables-Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator("#productTable")

    //find rows and columns
    const column=await table.locator('thead tr th')
    console.log('NUmber of column: '+await column.count())
    expect(await column.count()).toBe(4)

    const row=await table.locator('tbody tr')
    console.log('Number of rows: '+await row.count())

    expect(await row.count()).toBe(5)

    // //Select checkbox for product 3
    // await selectProduct(row,page,'3')
    // await selectProduct(row,page,'4')
    // await selectProduct(row,page,'Smartphone')

    await page.waitForTimeout(2000)


//Print all product details using loop
// for(let i=0;i<await row.count();i++){
//     const r=row.nth(i);
//     const rd=row.locator('td')
//     for(let j=0;j<await rd.count()-1;j++){
//         console.log(await rd.nth(j).textContent())
         
//     }
// }

//Read data from all the pages
const pagecount=await page.locator('#pagination li a')
console.log(pagecount.count())
for(let p=0;p<await pagecount.count();p++)
{
    if(p>0){
        await pagecount.nth(p).click();
    }
    const rd=row.locator('td')
    for(let j=0;j<await rd.count()-1;j++){
        console.log(await rd.nth(j).textContent())

    }
    await page.waitForTimeout(2000)

}
await page.waitForTimeout(2000)


})

// async function selectProduct(row,page,name){
//     const matchrow=row.filter({
//         has:page.locator('td'),
//         hasText:name
//     })
//     await matchrow.locator('input').check();

// }

