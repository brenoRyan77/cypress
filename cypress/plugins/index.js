// cypress/plugins/index.js

const createEsbuildPlugin = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = (on, config) => {
  on('file:preprocessor', createEsbuildPlugin(config));
  
  return config;
};
