import By from 'selenium-webdriver'
import BasePage from './BasePage'

const JOIN_TITLE = By.xpath('//*[@id="onboardingCardVideo"]/div/h1');
const CONTINUE_BUTTON = By.xpath('//*[@id="onboardingCardVideo"]/div/div[2]/button');

export default class JoinResultsPage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(JOIN_TITLE);
        await this.waitForDisplayed(CONTINUE_BUTTON);
    }

    async getTitle () {
        return this.getText(JOIN_TITLE)
    }

    async clickContinue () {
        await this.click(CONTINUE_BUTTON);
    }

}