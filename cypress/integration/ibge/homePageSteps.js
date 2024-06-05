// cypress/support/step_definitions/homePageSteps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

Given('I open the home page', () => {
  homePage.visit();
});

Then('the main menu should be visible', () => {
  homePage.getMainMenu().should('be.visible');
});

When('I search for {string}', (query) => {
  homePage.performSearch(query);
});

Then('I should see results containing {string}', (query) => {
  homePage.getSearchResults().should('contain', query);
});

Then('the search input should be visible', () => {
  homePage.getSearchInput().should('be.visible');
});

When('I click on {string} in the main menu', (menuItem) => {
  homePage.getMainMenu().contains(menuItem).click();
});

Then('I should be redirected to the {string} page', (pageTitle) => {
  cy.contains(pageTitle).should('be.visible');
});

Then('the footer should be visible', () => {
  cy.get('footer').should('be.visible');
});
