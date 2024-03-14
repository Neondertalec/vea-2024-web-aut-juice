import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }

  static get emailInput() {
    return cy.get("input#emailControl");
  }
  static get passwordInput() {
    return cy.get("input#passwordControl");
  }
  static get repPasswordInput() {
    return cy.get("input#repeatPasswordControl");
  }
  static get loginButton() {
    return cy.get("#loginButton");
  }
  static get toRegisterLink() {
    return cy.get("#newCustomerLink a");
  }
  static get securityContainer() {
    return cy.get(`.security-container [name="securityQuestion"]`);
  }
  static get petOption() {
    return cy.get("#mat-option-9");
  }
  static get securityAnswer() {
    return cy.get("#securityAnswerControl");
  }
  static get registerButton() {
    return cy.get("#registerButton");
  }
}
