/// <reference types="Cypress" />



describe('verifying total on cart page' , function()
{
    beforeEach(() => {
        cy.viewport(1200, 1500);
        
        cy.Login('emperorleisure@gmail.com', 'sasasa@123');
      });
      const myGolabalVar = Cypress.env("baseurl")
it('verifying subtotal on cart page',function()  
{
    
    cy.visit(myGolabalVar)
    //cy.closePopupIfExists();
    //cy.wait(5000)
    cy.addtocartfromplp('Hydrance RICH Hydrating Cream Sample')
    //cy.visit(myGolabalVar+"p0005952-av-cicalfate-absorbing-soothing-spray-100ml")
    //cy.wait(5000)
    cy.visit(myGolabalVar + 'checkout/cart/')

    var actualtotal=0;
    cy.get('tr td:nth-child(6) span.price').each(($el,index,$list)  => {
        var priceText = $el.text().replace(/[$,]/g, '');
        var price = parseFloat(priceText);
        cy.log(price);
        actualtotal = actualtotal + price;
        cy.log(actualtotal);
        //var expected = cy.get('tr td.amount span.price[data-th="Subtotal"]').text()
        //var expectedtotal = parseFloat(expected) 
        //cy.log(expectedtotal)
        //cy.log($el.text())
} ) 
cy.get('tr td.amount span.price[data-th="Subtotal"]').then(function(element)
{
        var expected = element.text()
        var expected = element.text().replace(/[$,]/g, '');
        var expectedtotal = parseFloat(expected) 
        cy.log(expectedtotal)
        //expectedtotal.to.equalto
        expect(expectedtotal).to.equal(actualtotal)
} )   
} )

}    )

