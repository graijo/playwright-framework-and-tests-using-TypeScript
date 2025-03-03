import { test, expect } from '@playwright/test';
// test.use({ launchOptions: { slowMo: 1000 } }); // Adds a 1-second delay between actions
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // await page.pause();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.screenshot({ path: 'example.png' });
  console.log(process.env.NODE_ENV); // Might output "development" or "production"
console.log(process.env.CI);       // Might output "true" if running in a CI environment
console.log(" process.env are        \n ")
console.log(process.env);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
