const { test, expect } = require('@playwright/test');

test('Home Page Test', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);
    await expect(pageTitle).toContain('Amazon.com');
    
    const pageUrl = page.url();
    console.log('Page URL:', pageUrl);
    await expect(page).toHaveURL('https://www.amazon.com/');
    
    await page.close();
})