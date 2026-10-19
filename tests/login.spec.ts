import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.describe('Banking Portal : Login Scenarios', () => {
    test('should show an error when login is submitted empty', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto();
        await loginPage.submitEmptyForm();

        await expect(loginPage.errorHeading).toBeVisible();
        await expect(loginPage.emptyLoginError).toBeVisible();
    });

    test('should reject invalid login credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(
            'invalid_user_48291',
            'WrongPassword_2026!');
        
        console.log(await page.locator('body').textContent());    
        await expect(loginPage.errorHeading).toBeVisible();
        await expect(loginPage.invalidCredentialsError).toBeVisible();
    });
});