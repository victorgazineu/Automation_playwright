// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach('Access webpage', async ({ page }) =>{
  await page.goto('https://www.automationpratice.com.br/');
});

test('Success login', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('email@teste.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
});

test('Search produto', async ({ page }) => {
 
    await page.getByRole('banner').getByRole('link', { name: 'img' }).click();
    await page.getByPlaceholder('type keyword(s) here').click();
    await page.getByPlaceholder('type keyword(s) here').fill('produto');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
   
});