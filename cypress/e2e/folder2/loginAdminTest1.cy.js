const adminData = require("../../fixtures/adminData");
const selector = require("../../fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin");
});

describe("Login admin", () => {
  it("Check the admin home page", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
    cy.get(selector.pageHeader).should("contain", "Администраторррская");
    cy.get(selector.loginSection).should("contain", "Авторизация");
  });

  it("Positive test - Correct email and password", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.contains("Управление залами").should("be.visible");
  })
});