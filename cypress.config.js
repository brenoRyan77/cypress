// cypress.config.js

const { defineConfig } = require('cypress');
const createEsbuildPlugin = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createEsbuildPlugin(config));
      return config;
    },
  },
});
