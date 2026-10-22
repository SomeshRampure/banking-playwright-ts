import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { invalidLoginTestData   } from '../test-data/loginTestData';


test.describe('Banking Portal : Login Scenarios', () => {
    test.describe
    test('should show an error when login is submitted empty', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto();
        await loginPage.submitEmptyForm();

        await expect(loginPage.errorHeading).toBeVisible();
        await expect(loginPage.emptyLoginError).toBeVisible();
    });

    for (const loginCase of invalidLoginTestData){

    test(`should reject invalid login : ${loginCase.caseName}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(
            loginCase.username,
            loginCase.password
        );

        console.log(await page.locator('body').textContent());
        await expect(loginPage.errorHeading).toBeVisible();
        await expect(loginPage.invalidCredentialsError).toBeVisible();
    });
 }
});