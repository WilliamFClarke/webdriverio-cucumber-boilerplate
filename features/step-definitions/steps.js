const { Given, When, Then } = require('@cucumber/cucumber')
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import HomePage from "../pageobjects/home.page";

const pages = {
  login: LoginPage,
  home: HomePage
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I check the title$/, () => {
  HomePage.checkTitle();
});

