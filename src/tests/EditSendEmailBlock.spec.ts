import { test } from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import { decrypt,  } from "../utils/CryptojsUtils";
import HomePage from '../pages/HomePage';
import JourneyDashboard from '../pages/JourneyDashBoard';

test("Edit Send Email block", async ({page}) => {
    page.setViewportSize({width: 2560, height: 1300});
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const dashboardPage = new JourneyDashboard(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    await loginPage.clickLoginButton();
    await homePage.createJourney();
    await dashboardPage.AddAndEditEmailBlock();
})

// test("encrypt test", async ({ page }) => {
//     // const plaintext = 'Hello, Mars!';
//     // const encryptedText = encrypt(plaintext);
//     // console.log('SALT:', process.env.SALT);
//     // console.log('Encrypted:', encryptedText);
//     // const decryptedText = decrypt(encryptedText);
//     // console.log('Decrypted:', decryptedText);
//     //encryptEnvFile();
//     //decryptEnvFile();
// })
