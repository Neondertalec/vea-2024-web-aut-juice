import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addressed() {
    return cy.get(`mat-row`);
  }

  static get addButton() {
    return cy.get(`[aria-label="Add a new address"]`);
  }
}
