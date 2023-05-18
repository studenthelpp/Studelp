const {
  Before,
  Given,
  When,
  Then,
  After,
} = require("cypress-cucumber-preprocessor/steps");

Given("I am on the login page", async () => {
  await cy.visit("http://localhost:3000/login");
});

When(
  "I enter my valid credentials {string} and {string}",
  async (username, password) => {
    await cy.get("#email").type(username);
    await cy.get("#password").type(username);
  }
);

When("I click the login button", async () => {
  await cy.get("#submit").click();
});
