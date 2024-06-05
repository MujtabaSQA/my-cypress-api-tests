/// <reference types="Cypress" />

describe('b2b user journey' , function()
{
    beforeEach(() => {
        cy.viewport(1200, 1500);
        
        cy.Login('emperorleisure@gmail.com', 'sasasa@123');
      });
      const myGolabalVar = Cypress.env("baseurl")
it('b2b orders cases',function()  
{
    
cy.visit(myGolabalVar)
//cy.closePopupIfExists();
//cy.wait(5000)

    cy.visit(myGolabalVar+"p0007248-av-cleanance-blemish-control-starter-kit-new")
    cy.contains('Add to Bag').click()
    cy.contains('View and Edit Cart').click()
    cy.get('.cart-summary .checkout-methods-items .action.primary.checkout').should('be.enabled').click({ force: true });
    cy.wait(3000)
    cy.get('.primary button.button.action.continue.primary').should('be.enabled').click({ force: true });
    cy.contains('Place Order').click({force: true})
    cy.wait(5000)
    cy.get('.block-b2b .block-title h2').should('have.text','Confirmation')
    cy.screenshot()

} )   

}    )

