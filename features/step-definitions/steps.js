const { Given, When, Then } = require('@cucumber/cucumber')
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import HomePage from "../pageobjects/home.page";

const pages = {
  login: LoginPage,
  home: HomePage
};

Given(/^I am on the (\w+) page$/,  (page) => {
   pages[page].open();
});

When(/^I login with (\w+) and (.+)$/,  (username, password) => {
   LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/,  (message) => {
   expect(SecurePage.flashAlert).toBeExisting();
   expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I check the title and links$/, () => {
  HomePage.checkTitle();
  HomePage.checkSubtitle();
  HomePage.checkLinkedInIcon();
});

When(/^peform a fullscreen image check with tag (.*)$/, (tag) => {
  expect(browser.checkFullPageScreen('tag', { /* some options */ })).toEqual(0);
});
