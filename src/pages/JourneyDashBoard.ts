import { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { ECDH } from 'crypto';

export default class JourneyDashboard {
    private readonly SendEmailBlockToDrag = "//img[@src='/icons/email_comminucation/email_Type=Fill.svg']";
    private readonly SendEmailBlock = "(//p[contains(text(), 'Need setup')])[1]";
    private readonly SelectEmailDropdown = "//i[contains(@class, 'mdi-chevron-down')]"
    private readonly EmailDestination = "Max Test";
    private readonly SenderEmail = "gerberalann@gmail.com";
    private readonly NewThreadRadioBtn = "//input[@role='radio' and @type='radio' and @value='new-thread']";
    private readonly SaveButton = "//button[contains(@class, 'v-btn') and .//p[contains(text(), 'Save')]]";


    constructor(private page: Page) { }

    async AddAndEditEmailBlock() {
      await this.DragSendEmail();
      await this.EditSendEmailBlock();
      await this.VerifySendEmailChanges();
    }

    async DragSendEmail() {
        await this.page.locator(this.SendEmailBlockToDrag).hover();
        await this.page.mouse.down();
        await this.page.mouse.move(200, 200);
        await this.page.mouse.up();
    }
    
    async EditSendEmailBlock() {
        await this.page.locator(this.SendEmailBlock).dblclick();
        await this.page.getByText(this.EmailDestination).click();
        await this.page.waitForTimeout(10000);
        await this.page.locator(this.SelectEmailDropdown).click();
        await this.page.getByText(this.SenderEmail).click();
        await this.page.locator(this.NewThreadRadioBtn).click();
        await this.page.locator(this.SaveButton).click();
        
    }

    async VerifySendEmailChanges() {
        await this.page.locator(this.SendEmailBlock).dblclick();
        await expect(this.page.getByText(this.EmailDestination)).toBeVisible();
        await expect(this.page.getByText(this.SenderEmail)).toBeVisible();
    }
}