import By from 'selenium-webdriver'
import BasePage from './BasePage'

const FILE_TITLE = By.xpath('//*[@id="onboardingCardFiles"]/div[2]/h1');
const NOTHANKS_BUTTON = By.xpath('//*[@id="onboardingCardFiles"]/div[2]/div[2]/button[2]');

export default class ConnectFilePage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(FILE_TITLE);
        await this.waitForDisplayed(NOTHANKS_BUTTON);
    }

    async getTitle () {
        return this.getText(FILE_TITLE);
    }

    async clickButton () {
        await this.click(NOTHANKS_BUTTON);
    }

}