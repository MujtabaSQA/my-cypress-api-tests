// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />
const myGolabalVar = Cypress.env("baseurl")
Cypress.Commands.add('Login', (email , password) => {
    // Your custom function logic here
    cy.session([email, password], () => {
    cy.visit(myGolabalVar);
    cy.get('#myaccount2').click();
    cy.wait(3000);
    cy.get('#email').should('be.visible').type('');
   
    cy.get('#pass').should('be.visible').type('');
    cy.get('#send2').contains('Sign In').click({ force: true });
    cy.wait(5000);
    //cy.sitmappopup();
    // Close popups if they appear
   
  })
  });

  import 'cypress-iframe';
  Cypress.Commands.add("clickRecaptcha", () => {
    cy.get('iframe[src*=recaptcha]').then(($iframe) => {
      const iframeDocument = $iframe.contents();
      const recaptchaToken = iframeDocument.find('#recaptcha-token');
      recaptchaToken.click();
  });
  });
  //import 'faker';
  import {faker} from '@faker-js/faker';
  
  //const email = `crescentic.qa+${counter}@gmail.com`;
  Cypress.Commands.add("adduser", () => {
       cy.wait(3000)
       cy.get('.form-add-user #firstname:eq(1)').type(faker.name.firstName());
         cy.get('.form-add-user #lastname:eq(1)').type(faker.name.lastName());
         cy.get('.form-add-user #role:eq(1)').select('Trainee');
         //cy.get('.form-add-user #email:eq(1)').type(email);
         const timestamp = new Date().getTime(); //1642080371822
         cy.get('.form-add-user #email:eq(1)').type(`crescentic.qa+${timestamp}@gmail.com`)
         cy.get('.form-add-user #invoice_contact:eq(1)').select('Yes');
         //cy.get('.form-add-user #pos_id').type('C002275');
         //cy.get('.form-add-user #customer_pos_type').select('multi_pos');
       
         // Submit the form
         cy.get('.form-add-user #send2').click();
         
       });

       Cypress.Commands.add('closePopupIfExists', () => {
        
        cy.get('.introjs-tooltip', { failOnStatusCode: false }).then(($popup) => {
          if ($popup.length > 0) {
            cy.get('.introjs-skipbutton').click({ force: true });
          }
        });
        // Check and close the "Invoice Contact Information" popup
        cy.wait(15000)
        cy.get('.modal-popup._inner-scroll .modal-inner-wrap #modal-title-0', { failOnStatusCode: false }).then(($popup) => {
          if ($popup.length > 0) {
            cy.get('.modal-popup._inner-scroll._show .modal-inner-wrap .modal-header .action-close').click({ force: true });
          }
        });
        
      });
      
      Cypress.Commands.add('captureScreenshotWithoutHeader', () => {
        // Hide the header element
        cy.get('.header').invoke('css', 'display', 'none');
      
        // Capture the screenshot
       // Generate a unique timestamp
      const timestamp = new Date().getTime();

       // Capture the screenshot with a dynamic filename
      const screenshotFilename = `screenshot_without_header_${timestamp}`;
      cy.screenshot(screenshotFilename);
      
        // Restore the visibility of the header element
        cy.get('.header').invoke('css', 'display', 'block');
      });


      Cypress.Commands.add('sitmappopup', () => {
        // Check and close the "Offers" popup
        cy.get('.introjs-tooltip', { failOnStatusCode: false }).then(($popup) => {
          if ($popup.length > 0) {
            cy.get('.introjs-skipbutton').click({ force: true });
          }
        });
      });  

      Cypress.Commands.add("addtocartfromplp", (PoductName) => {
        
        cy.contains('Order Products').click({force: true})
    
        // const normalizedActualText = actualText.trim().replace(/\s+/g, ' ')
         cy.get('.product.name.product-item-name').each(($el,index,$list)  => {
         const productname =$el.text().trim().replace(/\s+/g, ' ')
         if(productname.includes(PoductName))
         {
            //console.log("index:"+index);
             cy.wait(5000)
             cy.get('.action.tocart.tertiary').click({ force: true })
             //cy.get('.action.tocart.tertiary').invoke('show').eq(index).click({ force: true })
             //cy.wrap($el).find('.product-item-inner .product.actions.product-item-actions button').should('be.enabled').click({ force: true });
             //cy.contains('Add to Bag').click({force: true})
     
         }
     } )  
        });


        //import AVGUESTCHECKOUT from '../PageObjectModel/AVGUESTCHECKOUT';
       // import AVGUESTCHECKOUT from './PageObjectModel/AVGUESTCHECKOUT';
       //import AVGUESTCHECKOUT from '../PageObjectModel/AVGUESTCHECKOUT';
       import AVGUESTCHECKOUT from '../b2b/PageObjectModel/AVGUESTCHECKOUT';
//import cypress from 'cypress';
        Cypress.Commands.add('Guestcheckoutwithcreditcard', () => {
          
          const checkout = new AVGUESTCHECKOUT()
          cy.wait(9000);
          cy.wait(9000);
          cy.wait(9000);
          //cy.get('.loading-mask', { timeout: 20000 }).should('not.exist');
          cy.get('#customer-email', { timeout: 20000 }).should('be.visible').then(() => {
            checkout.AVGUESTCHECKOUTEmail().type('crescentic.qa@gmail.com', { force: true });
          });
          
          checkout.AVGUESTCHECKOUTFirstName().eq(0).type('Automation', { force: true })
          checkout.AVGUESTCHECKOUTLastName().eq(0).type('testing', { force: true })
          checkout.AVGUESTCHECKOUTphonenumber().eq(0).type('0315789456', { force: true })
          checkout.AVGUESTCHECKOUTaddress1().eq(0).type('address1', { force: true })
          checkout.AVGUESTCHECKOUTaddress2().eq(0).type('address2', { force: true })
          checkout.AVGUESTCHECKOUTcity().eq(0).type('city', { force: true })
          checkout.AVGUESTCHECKOUTstate().select('12', { force: true })
          checkout.AVGUESTCHECKOUTzipcode().eq(0).type('07054', { force: true })
          cy.get('#checkout-shipping-method-load', { timeout: 20000 }).should('be.visible').then(() => {
            checkout.AVGUESTCHECKOUTshipping();
        });
        //checkout.AVGUESTCHECKOUTcreditcardnumber().click({force: true})
        //cy.get('#origin_address').check()
        //cy.xpath("//span[normalize-space()='Continue']").click()
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
          //cy.wait(9000);
          /*cy.get('.action.primary.checkout.amasty').click({ force: true })
          cy.wait(9000);
          cy.wait(9000);
          cy.url().should('include', '/checkout/onepage/success/')
          cy.screenshot('credit card')*/
          /*cy.get('.orderno').invoke('text').then((orderno) => {
            // Remove any whitespace or formatting from the order number
            orderno = orderno.trim();
          
            // Log the order number to the console
            cy.log('Order Number:', orderno);
          
            // Take a screenshot with the order number
            cy.screenshot('Order_' + orderno);*/
          
          });
        

        
   Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    // Get the iframe > document > body
    return cy
      .get(iframeSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap);
  });
        
  Cypress.Commands.add('PRODGuestcheckoutwithcreditcard', () => {
          
    const checkout = new AVGUESTCHECKOUT()
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
    });
  
    Cypress.Commands.add('loginAPI', () => {
      cy.request({
        method: 'POST',
        url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
        body: {
          userEmail: 'mujtabask248@gmail.com',
          userPassword: 'LMessi10'
        }
      }).then(function(response) {
        expect(response.status).to.eq(200);
        Cypress.env('token', response.body.token);
      });
    });
    