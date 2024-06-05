describe('homepage welcome message and loyalty details Loyalty Section Tests', () => {
    beforeEach(() => {
      cy.viewport(1920,1080);
      
      cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
    });
    const myGolabalVar = Cypress.env("baseurl")
    it('should verify the welcome message and loyalty details', () => {
        cy.visit(myGolabalVar);
        cy.closePopupIfExists();
      // Verify the welcome message
      cy.wait(5000)
      cy.get('.header').invoke('css', 'display', 'none');
      cy.get('.box.box-ps.box-psb2b').screenshot();
      cy.get('.box-title.bs2 h1').should('have.text', 'Welcome Melissa');
      //cy.get('.box-title.bs2 p').should('have.text', 'Advanced Dermatology Clinic - Leavitt - FCS - Loveland - 287');
      //cy.get('.box-title.bs2 .sub span').should('have.text', 'Valued Partner Since 2021');
  
      // Verify the loyalty details
      cy.get('.pp-title h2').should('have.text', 'Your Pierre Fabre Loyalty Summary');
      //cy.get('.pp-content .figure img').should('have.attr', 'alt', 'diamond');
      //cy.get('.pp-content .figure img').screenshot();
      //cy.get('.pp-content .info .title h3').should('have.text', 'Diamond');
      //cy.get('.pp-content .info .title h3').screenshot();
      cy.get('.box-psb2b .box-content .loyalty').screenshot();
      // You can add more assertions based on your specific requirements
  
      // Click the "View Benefits" link and verify the navigation
      //cy.get('.pp-content .actions a').should('include', 'href', '/loyalty-program/');
        //.click()
      //cy.url().should('include', '/loyalty-program/');
      //cy.captureScreenshotWithoutHeader();
      cy.screenshot();
    });
  });
  