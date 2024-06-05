describe('contact us', () => {
  const myGolabalVar = Cypress.env("baseurl")
    beforeEach(() => {
      // Visit the page with the form
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      // You might want to add additional setup steps here, such as waiting for elements to load.
    });
  
    it('should fill out and submit the forms', () => {
      
      cy.visit(myGolabalVar)

      //cy.get('li#support.support').should('be.visible').click({ force: true })
      cy.get('li#support.support a').click({ force: true })

      cy.get('#topic').select(1 , { force: true }).should('be.enabled');

      cy.get('#subject').should('be.enabled').type('subject')

      cy.get('#fax').should('be.enabled').type('123-456-7890')
      
      cy.get('#order_number').should('be.enabled').type('789456123')

      
      //cy.get('#comment').should('be.enabled').type('789456123')

      cy.get('#attachment').selectFile('galangal_850x459-video_mask.jpg', {
        action: 'drag-drop'
      })

      cy.get('.button > .action').click()

      cy.get('.page-lead .page.messages [data-bind="scope: \'messages\'"]')
      .should('be.visible')
      .invoke('text')
      .then((actualText) => {
        const expectedText = 'Your message has been sent successfully. Your request will be concerned Shortly!';
    
        // Normalize spaces and compare
        const normalizedActualText = actualText.trim().replace(/\s+/g, ' ');
        const normalizedExpectedText = expectedText.trim().replace(/\s+/g, ' ');
    
        expect(normalizedActualText).to.include(normalizedExpectedText);
        console.log(normalizedActualText)
        console.log(normalizedActualText)
      });
      
      cy.screenshot('contact us');
      
    });
});


