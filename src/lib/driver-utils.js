export default {
    async goToPage (driver: WebDriverClass, url: String): Promise<void> {
        return driver.get(url);
    }
}