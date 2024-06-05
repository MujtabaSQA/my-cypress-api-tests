/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
describe('add user from enrollment key', () => {
  const myGolabalVar = Cypress.env("baseurl")
    beforeEach(() => {
      // Visit the page with the form
      //cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
      cy.clearAllSessionStorage();
      cy.visit(myGolabalVar);
      cy.get('#myaccount2').click();
      cy.wait(3000);
      cy.get('.control #enrollmentkey').type('yZiha-dmSY7r5oanw6SS');
      cy.get('button#send2')
      .contains('Begin Enrollment').click();
      // You might want to add additional setup steps here, such as waiting for elements to load.
    });
   
    it('add user', () => {
    //cy.get('.ms-parent .ms-drop ul li label').children(selector, 'NP')
    //const optionText = 'NP';
    //const dynamicSelector = `li.hide-radio label:contains('${optionText}') input:radio`;
    cy.get('.ms-parent .ms-drop ul li label').contains('NP').click({ force: true });
    cy.get('#firstname').type('automation');
    cy.get('#lastname').type('Testing');
    // If 'role' is hidden, you may skip interacting with it as it's set to a default value
    const timestamp = new Date().getTime(); //1642080371822
         cy.get('#email').type(`crescentic.qa+${timestamp}@gmail.com`)
    //const email = `john.doe${Cypress._.random(1000, 9999)}@example.com`;
    //cy.get('#email').type(email);

    // You may fill out additional fields as needed

    cy.get('#password').type('YourPassword123');
    cy.get('#confirmation').type('YourPassword123');

    // Assuming there is a checkbox for the reCAPTCHA, you might need to interact with it
    //cy.get('.required-captcha').check();

   
    cy.clickRecaptcha();
    
    cy.wait(3000)
    cy.get('#send2').click();
      cy.get('.page-lead .page.messages [data-bind="scope: \'messages\'"]')
      .should('be.visible')
      .invoke('text')
      .then((actualText) => {
        const expectedText = 'Customer has been created. Please verify your email to login!';
    
        // Normalize spaces and compare
        const normalizedActualText = actualText.trim().replace(/\s+/g, ' ');
        const normalizedExpectedText = expectedText.trim().replace(/\s+/g, ' ');
    
        expect(normalizedActualText).to.include(normalizedExpectedText);
        console.log(normalizedActualText)
        console.log(normalizedActualText)
      });
      cy.wait(3000)
      cy.screenshot('adduser from enrollment key');
      
    });
});


