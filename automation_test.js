import * as assert from "assert";
import DriverBuilder from "../src/lib/DriverBuilder";
import driverutils from "../src/lib/driver-utils";
import HomePage from "../src/pageobjects/homePage";
import JoinResultsPage from "../src/pageobjects/joinResultPage";
import InformationPage from "../src/pageobjects/informationPage";
import WorkspacePage from "../src/pageobjects/workspacePage";
import NeedToDoPage from "../src/pageobjects/needtodoPage";
import InviteFriendPage from "../src/pageobjects/inviteFriendPage";
import ConnectFilePage from "../src/pageobjects/connectFilePage";
import WelcomePage from "../src/pageobjects/welcomePage";

describe ('Begin Tests', function () {
    let driverBuilder;
    let driver;

    beforeEach(async function() {
        driverBuilder = new DriverBuilder();
        driver = driverBuilder.driver;
        await driverutils.goToPage(driver, 'https://app.hive.com/signin');
    });

    it('Loads the home page', async function () {
        const homePage = new HomePage(driver);
        await homePage.isLoaded();
        const title = await homePage.getTitle();
        assert.strictEqual(title,"Hive: Home for busy teams");
    });

    it('Join as a new user', async function () {
        const homePage = new HomePage(driver);
        await homePage.isLoaded();
        await homePage.join();

        const joinResultPage = new JoinResultsPage(driver);
        await joinResultPage.isLoaded();
        const title = await joinResultPage.getTitle();
        assert.strictEqual(title, 'Welcome to Hive');
    });

    it('Click continue', async function () {
        const joinResultPage = new JoinResultsPage(driver);
        await joinResultPage.isLoaded();
        await joinResultPage.clickContinue();

        const informationPage = new InformationPage(driver);
        await informationPage.isLoaded();
        const title = await informationPage.getTitle();
        assert.strictEqual(title, 'Tell us about yourself');
    });

    it('Fill out information', async function () {
        const informationPage = new InformationPage(driver);
        await informationPage.isLoaded();
        await informationPage.fillOutInformation('firstname','lastname','1234567890','TESTtest@gmail.com','1111111');
        await informationPage.clickContinue();

        const workspacePage = new WorkspacePage(driver);
        await workspacePage.isLoaded();
        const title =  workspacePage.getTitle();
        assert.strictEqual(title, 'Create a workspace');
    });

    it('Create a workspace', async function () {
        const workspacePage = new WorkspacePage(driver);
        await workspacePage.isLoaded();
        await workspacePage.nameOrganization('test organization');
        await workspacePage.clickContinue();

        const needToDo = new NeedToDoPage(driver);
        await needToDo.isLoaded();
        const title = needToDo.getTitle();
        assert.strictEqual(title, 'What do you need to do today?');
    });

    it('Need to do', async function () {
        const needToDo = new NeedToDoPage(driver);
        await needToDo.isLoaded();
        await needToDo.createToDo('watch a movie', 'have a nap', 'just have fun today');
        await needToDo.clickContinue();

        const inviteFriendPage = new InviteFriendPage(driver);
        await inviteFriendPage.isLoaded();
        const title = inviteFriendPage.getTitle();
        assert.strictEqual(title, 'Hive is better with coworkers');
    });

    it('Invite friends', async function () {
        const inviteFriendPage = new InviteFriendPage(driver);
        await inviteFriendPage.isLoaded();
        await inviteFriendPage.friendEmail('friend1@gmail.com','friend2@gmail.com','friend3@gmail.com');
        await inviteFriendPage.clickContinue();

        const connectFilePage = new ConnectFilePage(driver);
        await connectFilePage.isLoaded();
        const title = connectFilePage.getTitle();
        assert.strictEqual(title, "Connect your file storage");
    });

    it('Welcome page shows', async function () {
        const welcomePage = new WelcomePage(driver);
        await welcomePage.isLoaded();
        const title = welcomePage.getTitle();
        assert.strictEqual(title, 'Here’s a few tips to get you started!');
    });

    afterEach(async function () {
       await driverBuilder.quit();
    });

});
