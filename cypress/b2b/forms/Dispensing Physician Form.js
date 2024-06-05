describe('Dispensing Physician Form Automation', () => {
    /*beforeEach(() => {
      // Replace with the actual URL
    });*/
    const myGolabalVar = Cypress.env("baseurl")
    it('should fill out and submit the form with reCAPTCHA handling', () => {
      // Fill out the form fields
      cy.clearAllSessionStorage();
      //cy.visit('https://mcstaging.avenedermatologicalskincare.com/'); // Replace with the actual URL
      cy.visit(myGolabalVar+'customersupport/physician/');
      cy.get('#contact_name').type('John');
      cy.get('.control input[name="last_name"]').type('Doee')
      cy.get('#business_name').type('Medical Clinic');
      cy.get('#street_address').type('123 Main St');
      cy.get('#city').type('Cityville');
      cy.get('#state').type('CAM');
      cy.get('#zip_code').type('12345');
      cy.get('#phone').type('1234567890');
      cy.get('#alternate_number').type('1234567890');
      cy.get('#fax').type('123-456-7890');
      cy.get('#email').type('john.doe@example.com');
      cy.get('#business_website').type('https://www.aveneusa.com');
      cy.get('select[name="practice_type"]').select('Dermatology', { force: true });
      cy.get('#office_count').type('3');
      cy.get('#other_lines_carried').type('Product A, Product B');
      cy.wait(3000)
    //cy.solveGoogleReCAPTCHA();
        // Assuming the checkbox is within an element with class 'rc-anchor-center-item'
//cy.get('#recaptcha-anchor').click();
    //cy.solveGoogleReCAPTCHA();
    //cy.clickRecaptcha();
    /*cy.get('iframe[src*=recaptcha]')
    .its('0.contentDocument')
    .should(d => d.getElementById('recaptcha-token').click())*/
  cy.clickRecaptcha();
    
cy.wait(3000)
      // Trigger reCAPTCHA (if applicable) by clicking a button with an id like "submit-button"
      cy.get('.singleform-container .block .block-content .actions-toolbar .action.primary').click();

      //cy.Your Dispensing Physician Request has been Submitted. Your request will be concerned Shortly!
      cy.get('.page-lead .page.messages [data-bind="scope: \'messages\'"]')
      .should('be.visible')
      .invoke('text')
      .then((actualText) => {
        const expectedText = 'Your Dispensing Physician Request has been Submitted. Your request will be concerned Shortly!';
    
        // Normalize spaces and compare
        const normalizedActualText = actualText.trim().replace(/\s+/g, ' ');
        const normalizedExpectedText = expectedText.trim().replace(/\s+/g, ' ');
    
        expect(normalizedActualText).to.include(normalizedExpectedText);
        console.log(normalizedActualText)
        console.log(normalizedActualText)
      });
    
      cy.screenshot('Dispensing Physician Form');


    });
});
