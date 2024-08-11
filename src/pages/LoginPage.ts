import { expect, Page } from '@playwright/test';

export default class LoginPage {
    private readonly usernameField = "//input[@id='email1']"
    private readonly passwordField = "//input[@id='password']"
    private readonly loginButton = "//button[@id='login']"

    constructor(private page: Page) { }

    async login(username: string, password: string) {
        await this.navigateToLoginPage();
        await this.fillUsername(username);
        await this.fillPassword(password);
        return await this.clickLoginButton();
    }

    async navigateToLoginPage() {
        await this.page.goto("https://app.intempt.com/");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameField).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordField).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButton).click()
        console.log("Logged in successfully");
    }
}

