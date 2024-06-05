// header_spec.js

describe('Header Tests', () => {
  /*before(() => {
    cy.viewport(1618, 477);
    //cy.visit('https://mcstaging.avenedermatologicalskincare.com/');
    cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
  });*/

 beforeEach(() => {
  cy.viewport(1920,1080);
  //cy.visit('https://mcstaging.avenedermatologicalskincare.com/');
  cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
  });
  const myGolabalVar = Cypress.env("baseurl")
  it('should have a logo', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    cy.get('.branding.primary .logo').should('exist').screenshot();
  });

  it('should have navigation links', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    //cy.wait(6000)
    const expectedTexts = ["Home","Order Products", "LOYALTY PROGRAM", "Pro Affiliate Program", "Marketing & Education Resources"];

    cy.get('.sections.nav-sections .mp-leveltop').should('have.length.greaterThan', 0).each(($element, index) => {
      if (index < expectedTexts.length) {
        expect($element.text().trim()).to.equal(expectedTexts[index]);
      } else {
        cy.log(`Warning: Extra element found at index ${index}. Text: ${$element.text().trim()}`);
      }

      // Take a screenshot for each element
      //cy.wrap($element).screenshot();
    });
  });

  it('should have search functionality', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    cy.wait(6000)
    cy.get('#search2').should('exist').screenshot();
  });

  it('should have user account information', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    cy.wait(6000)
    cy.get('#myaccount2').should('exist').screenshot();
  });

  it('should have a cart icon', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    cy.wait(6000)
    cy.get('#topcart').should('exist').screenshot();
  });

  it('should have support link', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    cy.wait(6000)
    cy.get('#support').should('exist').screenshot();
  });
});