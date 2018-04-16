import By from 'selenium-webdriver'
import BasePage from './BasePage'

const INVITE_TITLE = By.xpath('//*[@id="onboardingCardTeammates"]/div[2]/h1');
const EMAIL1 = By.xpath('//*[@id="onboardingCardTeammatesForm"]/div[1]/input');
const EMAIL2 = By.xpath('//*[@id="onboardingCardTeammatesForm"]/div[2]/input');
const EMAIL3 = By.xpath('//*[@id="onboardingCardTeammatesForm"]/div[2]/input');
const CONTINUE_BUTTON = By.xpath('//*[@id="onboardingCardTeammatesForm"]/div[4]/button[1]');

export default class InviteFriendPage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(INVITE_TITLE);
        await this.waitForDisplayed(EMAIL1);
    }

    async getTitle () {
        return this.getText(INVITE_TITLE);
    }

    async friendEmail (email1: String, email2: String, email3: String) {
        await this.sendKeys(EMAIL1, email1);
        await this.sendKeys(EMAIL2, email2);
        await this.sendKeys(EMAIL3, email3);
    }
    async clickContinue () {
        await this.waitForDisplayed(CONTINUE_BUTTON);
        await this.click(CONTINUE_BUTTON);
    }

}