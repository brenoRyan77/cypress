// cypress/pages/HomePage.js

class HomePage {
    visit() {
        cy.visit('/');
    }

    getMainMenu() {
        return cy.get('.main-menu');
    }

    getSearchInput() {
        return cy.get('#pesquisa');
    }

    performSearch(query) {
        this.getSearchInput().type(query).type('{enter}');
    }

    getSearchResults() {
        return cy.get('.search-results');
    }
}

export default HomePage;
