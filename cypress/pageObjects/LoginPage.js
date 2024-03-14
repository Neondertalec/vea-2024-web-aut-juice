import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get emailInput() {
    return cy.get("input#email");
  }
  static get passwordInput() {
    return cy.get("input#password");
  }
  static get loginButton() {
    return cy.get("#loginButton");
  }
  static get toRegisterLink() {
    return cy.get("#newCustomerLink a");
  }
}
