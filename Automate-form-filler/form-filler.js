const { chromium } = require('playwright');
const faker = require('@faker-js/faker').faker;
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the form page
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit');

  // Switch to the iframe containing the form
  const frame = page.frame({ name: 'iframeResult' });

  // Generate random data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // Fill in the form
  await frame.fill('input[name="fname"]', firstName);
  await frame.fill('input[name="lname"]', lastName);

  // Click submit
  await frame.click('input[type="submit"]');

  // Wait for 2 seconds to let result load
  await page.waitForTimeout(2000);

  // Take screenshot
  const screenshotPath = `report-${Date.now()}.png`;
  await page.screenshot({ path: screenshotPath });

  // Log report
  console.log(`Form submitted with: ${firstName} ${lastName}`);
  console.log(`Screenshot saved: ${screenshotPath}`);

  await browser.close();
})();
