const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "./cypress/e2e/integration/**/*.feature",
    step_definitions:
      "./cypress/e2e/integration/step_definitions/login/login.js",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
});
