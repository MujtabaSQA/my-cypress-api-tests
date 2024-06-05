/// <reference types="Cypress" />
//import AVGUESTCHECKOUT from '../PageObjectModel/AVGUESTCHECKOUT';
//import AVGUESTCHECKOUT from '../PageObjectModel/AVGUESTCHECKOUT';
import 'cypress-iframe';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  describe('b2c user journey from PDP', function ()  {
  
   
    it('b2b orders cases from pdp', function ()  {
 
        cy.viewport(1200, 1500);
        
        cy.visit('https://staging.aveneusa.com/retrinal-intensive-cream')
        cy.wait(9000);
        cy.get('#product-addtocart-button').click()
        cy.get('.action.primary.viewcart').click({force: true})
        cy.wait(3000);
        //cy.get('.action.primary.checkout').click()
        cy.contains('Proceed to Checkout').click()
        cy.Guestcheckoutwithcreditcard();
        cy.get('.action.primary.checkout.amasty').click({ force: true })
          cy.wait(9000);
          cy.wait(9000);
          cy.url().should('include', '/checkout/onepage/success/')
          cy.wait(9000);
          cy.screenshot('credit card')
        /*const checkout = new AVGUESTCHECKOUT()
          cy.wait(9000);
          cy.wait(9000);
          cy.wait(9000);
          //cy.get('.loading-mask', { timeout: 20000 }).should('not.exist');
          cy.get('#customer-email', { timeout: 20000 }).should('be.visible').then(() => {
            checkout.AVGUESTCHECKOUTEmail().type('crescentic.qa@gmail.com');
        });
          checkout.AVGUESTCHECKOUTFirstName().eq(0).type('Automation')
          checkout.AVGUESTCHECKOUTLastName().eq(0).type('testing')
          checkout.AVGUESTCHECKOUTphonenumber().eq(0).type('0315789456')
          checkout.AVGUESTCHECKOUTaddress1().eq(0).type('address1')
          checkout.AVGUESTCHECKOUTaddress2().eq(0).type('address2')
          checkout.AVGUESTCHECKOUTcity().eq(0).type('city')
          checkout.AVGUESTCHECKOUTstate().select('12')
          checkout.AVGUESTCHECKOUTzipcode().eq(0).type('07054')
          cy.get('#checkout-shipping-method-load', { timeout: 20000 }).should('be.visible').then(() => {
            checkout.AVGUESTCHECKOUTshipping();
        });
        //checkout.AVGUESTCHECKOUTcreditcardnumber().click({force: true})
        cy.get('#origin_address').check()
        cy.xpath("//span[normalize-space()='Continue']").click()
          //checkout.AVGUESTCHECKOUTcreditcardnumber().type('4111 1111 1111 1111')
          //checkout.AVGUESTCHECKOUTexpiredate().type('02 / 2025')
          //checkout.AVGUESTCHECKOUTcvv().type('852')
          // Switch to the iframe and interact with the input fields
       cy.getIframeBody('#braintree-hosted-field-number').within(() => {
         cy.get('input[data-braintree-name="number"]').type('4111 1111 1111 1111');
       });

       cy.getIframeBody('#braintree-hosted-field-expirationDate').within(() => {
         cy.get('input[data-braintree-name="expirationDate"]').type('02 / 2025');
       });

       cy.getIframeBody('#braintree-hosted-field-cvv').within(() => {
         cy.get('input[data-braintree-name="cvv"]').type('852');
       });
          checkout.AVGUESTCHECKOUTtermsandcondition()
*/
    })

})

