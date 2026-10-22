import { type Locator, type Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page ;
    readonly usernameInput: Locator ;
    readonly passwrodInput: Locator ;
    readonly loginButton: Locator;
    readonly errorHeading: Locator;
    readonly emptyLoginError: Locator;
    readonly invalidCredentialsError: Locator ;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwrodInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.errorHeading = page.getByText('Error!', { exact: true });
        this.emptyLoginError = page.getByText('Please enter a username and password');
        this.invalidCredentialsError = page.getByText('The username and password could not be verified');
    }

    async goto(): Promise<void> {
        await this.page.goto('index.htm');
    }

    async submitEmptyForm(): Promise<void> {
    await this.loginButton.click();
}

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwrodInput.fill(password);
        await this.loginButton.click();
}
}

