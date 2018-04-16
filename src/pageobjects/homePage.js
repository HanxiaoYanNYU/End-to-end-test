import By from 'selenium-webdriver';
import BasePage from './BasePage';

const JOIN_BUTTON = By.xpath('//*[@id="join-hive"]');
const TITLE = By.xpath('/html/head/title');

export default class HomePage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(JOIN_BUTTON);
    }

    async getTitle () {
        return this.getText(TITLE);
    }

    async join () {
        await this.click(JOIN_BUTTON);
    }

}
