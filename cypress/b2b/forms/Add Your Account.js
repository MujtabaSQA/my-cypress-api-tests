describe('Add Your Account', () => {
  const myGolabalVar = Cypress.env("baseurl")
    /*beforeEach(() => {
      // Visit the page with the form
      
  
      // You might want to add additional setup steps here, such as waiting for elements to load.
    });*/
  
    it('should fill out and submit the form', () => {
      // Fill out the form fields
      cy.visit(myGolabalVar+'customersupport/customer/');
      
      cy.get('#first_name').type('John');
      cy.get('#last_name').type('Doe');
      cy.get('#business_name').type('ABC Company');
      cy.get('#email').type('john.doe@example.com');
      cy.get('#phone').type('1234567890');
      cy.get('#zip_code').type('12345');
      cy.clickRecaptcha();
    
      cy.wait(3000)
      // Assuming you are not testing the reCAPTCHA, you can bypass it by directly clicking the submit button
      cy.get('.send-this-form').click();
  
      // You might want to add assertions here to check for success messages or other elements on the page.
              //cy.Your Dispensing Physician Request has been Submitted. Your request will be concerned Shortly!
      cy.get('.page-lead .page.messages [data-bind="scope: \'messages\'"]')
      .should('be.visible')
      .invoke('text')
      .then((actualText) => {
        const expectedText = 'Your New Customer Request has been Submitted. Your request will be concerned shortly!';
    
        // Normalize spaces and compare
        const normalizedActualText = actualText.trim().replace(/\s+/g, ' ');
        const normalizedExpectedText = expectedText.trim().replace(/\s+/g, ' ');
    
        expect(normalizedActualText).to.include(normalizedExpectedText);
        console.log(normalizedActualText)
        console.log(normalizedActualText)
      });
    
      // Optionally, you can take a screenshot for debugging purposes
      cy.screenshot('Add Your Account');
    });
  });
  