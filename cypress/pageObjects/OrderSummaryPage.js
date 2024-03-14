import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/order-summary";
  }

  static get paymentOptions() {
    return cy.get("mat-row");
  }
  
  static get checkoutButton() {
    return cy.get(`button#checkoutButton`);
  }

}
