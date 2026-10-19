
import { test, expect } from '@playwright/test';

test('Q3 - Performance glitch user purchase', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('performance_glitch_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory.html/);

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#reset_sidebar_link').click();

  await page.locator('[data-test="product-sort-container"]').selectOption('za');

  const product = page.locator('.inventory_item').first();
  const name = await product.locator('.inventory_item_name').innerText();
  const price = await product.locator('.inventory_item_price').innerText();

  await product.locator('button').click();
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.inventory_item_name')).toHaveText([name]);

  await page.locator('#checkout').click();
  await page.locator('#first-name').fill('Toufik');
  await page.locator('#last-name').fill('Vubon');
  await page.locator('#postal-code').fill('1216');
  await page.locator('#continue').click();

  await expect(page.locator('.inventory_item_name')).toHaveText([name]);

  const subtotal = Number(price.replace('$', ''));
  const total = (subtotal + Math.round(subtotal * 0.08 * 100) / 100).toFixed(2);

  await expect(page.locator('.summary_subtotal_label'))
    .toHaveText(`Item total: $${subtotal.toFixed(2)}`);

  await expect(page.locator('.summary_total_label'))
    .toHaveText(`Total: $${total}`);

  await page.locator('#finish').click();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#reset_sidebar_link').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page.locator('#login-button')).toBeVisible();

});
