import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("button#navbarAccount");
  }

  static get loginButton(){
    return cy.get("button#navbarLoginButton");
  }

  static get logoutButton(){
    return cy.get(`button#navbarLogoutButton`);
  }
  
  static get accountName(){
    return cy.get(`button[aria-label="Go to user profile"] span`);
  }
  
  static get searchQuery(){
    return cy.get(`#searchQuery`);
  }
  static get searchQueryText(){
    return cy.get(`#mat-input-0`);
  }
  
  static get selectCards(){
    return cy.get(`mat-card`);
  }
  static get dialogContainer(){
    return cy.get(`mat-dialog-container`);
  }
  static get reviews(){
    return cy.get(`[aria-label="Expand for Reviews"] > mat-expansion-panel-header`);
  }
  static get comments(){
    return cy.get(`.comment`);
  }
  static get reviewInput(){
    return cy.get(`textarea#mat-input-1`);
  }
  static get submitReviewInput(){
    return cy.get(`#submitButton`);
  }
  static get overlay(){
    return cy.get(`.cdk-overlay-container .cdk-overlay-backdrop`);
  }
  static get itemsperPage(){
    return cy.get(`mat-select[aria-label="Items per page:"]`);
  }
  static get itemsperPageOption(){
    return cy.get(`#mat-select-0-panel mat-option`);
  }
  static get addToBasket(){
    return cy.get(`[aria-label="Add to Basket"]`);
  }
  static get basketButton(){
    return cy.get(`button[aria-label="Show the shopping cart"]`);
  }

}
