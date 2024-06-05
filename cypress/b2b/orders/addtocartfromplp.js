/// <reference types="Cypress" />



describe('b2b user journey from plp' , function()
{
    beforeEach(() => {
        cy.viewport(1200, 1500);
        
        cy.Login('emperorleisure@gmail.com', 'sasasa@123');
      });
      const myGolabalVar = Cypress.env("baseurl")
it('b2b orders cases from plp',function()  
{
    
    cy.visit(myGolabalVar)
    //cy.closePopupIfExists();
    //cy.wait(5000)
    cy.addtocartfromplp('Hydrance RICH Hydrating Cream Sample')
    //cy.visit(myGolabalVar+"p0005952-av-cicalfate-absorbing-soothing-spray-100ml")
    //cy.wait(5000)
    cy.visit(myGolabalVar + 'checkout/cart/')

} )   

}    )

