# cypress/integration/ibge/homePage.feature

Feature: IBGE Home Page

  Scenario: Load the main menu
    Given I open the home page
    Then the main menu should be visible

  Scenario: Perform a search
    Given I open the home page
    When I search for "população"
    Then I should see results containing "população"

  Scenario: Verify the visibility of the search input
    Given I open the home page
    Then the search input should be visible

  Scenario: Check the link to "Institucional"
    Given I open the home page
    When I click on "Institucional" in the main menu
    Then I should be redirected to the "Institucional" page

  Scenario: Verify the footer section
    Given I open the home page
    Then the footer should be visible
