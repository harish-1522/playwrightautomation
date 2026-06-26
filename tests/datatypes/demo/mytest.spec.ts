import {test, expect} from '@playwright/test';

test("Load and Launch HomePage", async ({page}) => {
  // Test implementation

    // Navigate to the homepage
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    //assert the page title if title is correct
    await expect(page).toHaveTitle('CURA Healthcare Service');
    //asert header text is correct
    const headerText = await page.textContent('h1');
    await page.screenshot({ path: 'homepage.png' });

    //take screenshot of the homepage
    await page.screenshot({ path: 'homepage.png' });
    fullPage: true

    await page.locator('h1').screenshot({
   path: 'screenshots/header.png'
});

});
