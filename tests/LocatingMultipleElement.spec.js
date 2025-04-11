const{test,expect}=require('@playwright/test');
test('LocatingMultipleElement',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    // const links=await page.$$('a');
    // console.log("Number of links in the page: "+links.length);
    // for(let i=0;i<links.length;i++){
    //     const linkstext=await links[i].textContent();
    //     console.log(linkstext);
    // }
    const products=await page.$$("//div[@id='tbodyid']//h4/a")
    for(const prod of products){
        const prodname=await prod.textContent();
        console.log(prodname);
    }
    await page.close();
});