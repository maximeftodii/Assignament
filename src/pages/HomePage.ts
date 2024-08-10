import { Page } from '@playwright/test';
import * as crypto from "node:crypto";
import { expect } from '@playwright/test';

export default class HomePage {
    private readonly JourneysTab = "//p[@class='intempt-text--p2-font intempt-text--white ma-0'][normalize-space()='Journeys']";
    private readonly CreateJourneyBtn = "//p[@class='intempt-color-white intempt-font-b1']";
    private readonly CreateJourneyScratchBtn = "//button[span/p[text()=' Create a journey ']]";
    private readonly JourneyNameField = "//input[@placeholder='Enter journey name']";
    private readonly CreateBtn = "//button[span/p[text()=' Create ']]";


    constructor(private page: Page) { }

    async createJourney() {
        await this.createNewJourney();
    }

    async createNewJourney() {
        const journeyName = Math.random().toString(36).substring(2,7);
        await this.page.locator(this.JourneysTab).click();
        await this.page.locator(this.CreateJourneyBtn).click();
        await this.page.locator(this.CreateJourneyScratchBtn).click();
        await this.page.locator(this.JourneyNameField).fill(journeyName);
        await this.page.locator(this.CreateBtn).click();
        await expect(this.page.getByText(journeyName)).toBeVisible();
    }
}
