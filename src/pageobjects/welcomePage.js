import By from 'selenium-webdriver'
import BasePage from './BasePage'

const TIP_TITLE = By.xpath('//*[@id="welcomeModal"]/div/div/div[2]');

export default class WelcomePage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(TIP_TITLE);
    }

    async getTitle () {
        return this.getText(TIP_TITLE);
    }

}