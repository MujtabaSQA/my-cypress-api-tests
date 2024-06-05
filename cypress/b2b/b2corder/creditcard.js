/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('b2c user journey from plp' , function()
{
    beforeEach(() => {
        cy.viewport(1200, 1500);
        
        cy.visit('https://staging.aveneusa.com/')
      });
      ///const myGolabalVar = Cypress.env("baseurl")
it('b2b orders cases from plp',function()  
{
    
    cy.contains('Shop Products').click({force: true})
    
    // const normalizedActualText = actualText.trim().replace(/\s+/g, ' ')
     cy.get('.product.name.product-item-name').each(($el,index,$list)  => {
     const productname =$el.text().trim().replace(/\s+/g, ' ')
     if(productname.includes('RetrinAL 0.1 Intensive Cream'))
     {
         cy.wait(5000)
         //cy.get('.action.tocart.tertiary').eq(index).click({force: true})
         //cy.get('.action.tocart.tertiary').eq(index).click({ force: true });
         //cy.get('.action.tocart.tertiary').eq(index).should('be.enabled').click({ force: true });
         //cy.get('.action.tocart.tertiary').eq(index).should('be.visible').click({ force: true });
         cy.get('.product.name.product-item-name').eq(index).trigger('mouseover', { force: true });
         cy.get('.action.tocart.tertiary').should('be.enabled').eq(index).click({ force: true });
         //cy.get('.action.tocart.tertiary').eq(index).should('be.visible').click({ force: true });

         //cy.get('.action.tocart.tertiary').click({ force: true });
         //cy.get('.action.tocart.tertiary').trigger('mouseover').eq(index).should('be.visible').click({ force: true });
         //cy.get('.action.tocart.tertiary').click({ force: true });
         //cy.wrap($el).find('.product-item-inner .product.actions.product-item-actions button').should('be.enabled').click({ force: true });
         //cy.contains('Add to Bag').click({force: true})
 
     }

} )   

}    )
}    )
