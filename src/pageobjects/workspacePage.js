import By from 'selenium-webdriver'
import BasePage from './BasePage'

const WORK_TITLE = By.xpath('//*[@id="onboardingCardCreateWorkspace"]/div[2]/h1');
const ORGANIZATION = By.xpath('//*[@id="onboardingCardCreateWorkspaceForm"]/div[1]/label/input');
const CONTINUE_BUTTON = By.xpath('//*[@id="onboardingCardCreateWorkspaceForm"]/div[3]/button');

export default class WorkspacePage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(WORK_TITLE);
    }

    async getTitle () {
        return this.getText(WORK_TITLE)
    }

    async nameOrganization (organization: String) {
        await this.sendKeys(ORGANIZATION, organization);
    }
    async clickContinue () {
        await this.waitForDisplayed(CONTINUE_BUTTON);
        await this.click(CONTINUE_BUTTON);
    }

}