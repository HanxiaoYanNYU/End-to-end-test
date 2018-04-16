import By from 'selenium-webdriver'
import BasePage from './BasePage'

const TODO_TITLE = By.xpath('//*[@id="onboardingCardActions"]/div[2]/h1');
const TODO1 = By.xpath('//*[@id="onboardingCardActionsForm"]/div[1]/label[1]/input');
const TODO2 = By.xpath('//*[@id="onboardingCardActionsForm"]/div[1]/label[2]/input');
const TODO3 = By.xpath('//*[@id="onboardingCardActionsForm"]/div[1]/label[3]/input');
const CONTINUE_BUTTON = By.xpath('//*[@id="onboardingCardActionsForm"]/div[2]/button');

export default class NeedToDoPage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(TODO_TITLE);
        await this.waitForDisplayed(CONTINUE_BUTTON);
    }

    async getTitle () {
        return this.getText(TODO_TITLE);
    }

    async createToDo (todo1: String, todo2: String, todo3: String) {
        await this.sendKeys(TODO1, todo1);
        await this.sendKeys(TODO2, todo2);
        await this.sendKeys(TODO3, todo3);
    }
    async clickContinue () {
        await this.click(CONTINUE_BUTTON);
    }

}