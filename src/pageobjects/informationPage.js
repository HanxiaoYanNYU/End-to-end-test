import By from 'selenium-webdriver'
import BasePage from './BasePage'

const INFO_TITLE = By.xpath('//*[@id="onboardingCardInfo"]/div[2]/h1');
const FIRSTNAME = By.xpath('//*[@id="firstName"]');
const LASTNAME = By.xpath('//*[@id="lastName"]');
const PHONE = By.xpath('//*[@id="phone"]');
const EMAIL = By.xpath('//*[@id="email"]');
const PASSWORD = By.xpath('//*[@id="password"]');
const CONTINUE_BUTTON = By.xpath('//*[@id="joinForm"]/div[2]/button');

export default class InformationPage extends BasePage {

    async isLoaded () {
        await this.waitForDisplayed(INFO_TITLE);
        await this.waitForDisplayed(FIRSTNAME);
        await this.waitForDisplayed(LASTNAME);
        await this.waitForDisplayed(PHONE);
        await this.waitForDisplayed(EMAIL);
        await this.waitForDisplayed(PASSWORD);
        //await this.waitForDisplayed(CONTINUE_BUTTON);
    }

    async getTitle () {
        return this.getText(INFO_TITLE)
    }

    async fillOutInformation (fname:String, lname:String, phone:String, email:String, password: String) {
        await this.sendKeys(FIRSTNAME, fname);
        await this.sendKeys(LASTNAME, lname);
        await this.sendKeys(PHONE, phone);
        await this.sendKeys(EMAIL, email);
        await this.sendKeys(PASSWORD, password);
    }
    async clickContinue () {
        await this.waitForDisplayed(CONTINUE_BUTTON);
        await this.click(CONTINUE_BUTTON);
    }

}