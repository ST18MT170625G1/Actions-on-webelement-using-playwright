import { test, expect, Locator } from '@playwright/test';

test('Verify Playwright Locators', async ({ page }) => {

  // 1. Navigate to nopCommerce
  await page.goto('https://demo.nopcommerce.com/');

  // 1. getByAltText()
  const logo: Locator = page.getByAltText('nopCommerce demo store');
  await expect(logo).toBeVisible();

  // 2. getByText()
  await expect(page.getByText('Welcome to our store')).toBeVisible();

  // 3. getByRole()
  await page.getByRole('link', { name: 'Register' }).click();
 // await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

});
test("verify the locators using labels",async({page})=>{

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

})
