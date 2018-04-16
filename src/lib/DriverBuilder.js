import webdriver from 'selenium-webdriver';

export default class DriverBuilder {
    driver: WebDriverClass;

    constructor() {
        const builder = new webdriver.Builder().forBrowser('safari');
        this.driver = builder.build();
    }

    async quit(): Promise<void> {
        return this.driver.quit();
    }
}