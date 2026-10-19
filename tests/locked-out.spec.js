import { test, expect } from '@playwright/test';

test('locked out user login error', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('locked_out_user');

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('[data-test="error"]')

  ).toContainText('Epic sadface: Sorry, this user has been locked out.');

});