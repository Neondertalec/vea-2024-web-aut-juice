import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/address/saved-payment-methods";
  }

  static get cards() {
    return cy.get(`mat-row`);
  }

  static get addDrop() {
    return cy.get(`#mat-expansion-panel-header-0`);
  }
  
  static get addName() {
    return cy.get(`#mat-input-1`);
  }
  static get addCardNumber() {
    return cy.get(`#mat-input-2`);
  }
  static get addExpireMonth() {
    return cy.get(`#mat-input-3`);
  }
  static get addExpireYear() {
    return cy.get(`#mat-input-4`);
  }
  
  static get submitButton() {
    return cy.get(`#submitButton`);
  }

}
