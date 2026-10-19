
import { test, expect } from '@playwright/test';

test('Q2 - Standard user purchase', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#reset_sidebar_link').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.inventory_item_name')).toHaveText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
  ]);

  await page.locator('#checkout').click();
  await page.locator('#first-name').fill('Toufik');
  await page.locator('#last-name').fill('Vubon');
  await page.locator('#postal-code').fill('1216');
  await page.locator('#continue').click();

  await expect(page.locator('.summary_subtotal_label'))
    .toHaveText('Item total: $55.97');

  await expect(page.locator('.summary_tax_label'))
    .toHaveText('Tax: $4.48');

  await expect(page.locator('.summary_total_label'))
    .toHaveText('Total: $60.45');

  await page.locator('#finish').click();
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#reset_sidebar_link').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page.locator('#login-button')).toBeVisible();

});
