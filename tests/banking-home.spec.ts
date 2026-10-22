import { test, expect } from '@playwright/test';

test.describe('Banking Portal - Parabank', () => {
  test('should display the customer login form', async ({ page }) => {
    await page.goto('index.htm');
  });

  test('should display expected elements', async ({ page }) => {
    await page.goto('index.htm');
    await expect(page).toHaveTitle(/Online Banking/);
    await expect(page.getByText('Customer Login', { exact: true })).toBeVisible();
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  });
});
