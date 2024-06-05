/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
describe('user management', () => {
    beforeEach(() => {
      // Visit the page with the form
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      // You might want to add additional setup steps here, such as waiting for elements to load.
    });
    const myGolabalVar = Cypress.env("baseurl")
    it('add user', () => {
      cy.visit(myGolabalVar);
        cy.get('.links-myaccount > .links > :nth-child(3) > a').click({ force: true });
        cy.get('#click-me').click({ force: true });
        //cy.faker = require('faker');
        //cy.faker = require('faker');

      cy.adduser();

      cy.get('.page-lead .page.messages [data-bind="scope: \'messages\'"]')
      .should('be.visible')
      .invoke('text')
      .then((actualText) => {
        const expectedText = 'Invitation has been sent successfully!';
    
        // Normalize spaces and compare
        const normalizedActualText = actualText.trim().replace(/\s+/g, ' ');
        const normalizedExpectedText = expectedText.trim().replace(/\s+/g, ' ');
    
        expect(normalizedActualText).to.include(normalizedExpectedText);
        console.log(normalizedActualText)
        console.log(normalizedActualText)
      });
      cy.wait(3000)
      cy.screenshot('adduser');
      
    });
});


