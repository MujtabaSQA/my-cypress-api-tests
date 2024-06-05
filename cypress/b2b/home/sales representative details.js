describe('Sales Representative Section Tests', () => {
    beforeEach(() => {
      cy.viewport(1618, 477);
      //cy.visit('https://mcstaging.avenedermatologicalskincare.com/');
      cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
    });
    const myGolabalVar = Cypress.env("baseurl")
    it('should verify sales representative details and helpful documents', () => {
      // Verify the sales representative details
      //cy.get('.box-content.itemlist-container.itemlist-1').should('be.visible').screenshot();
      cy.visit(myGolabalVar);
      cy.closePopupIfExists();
      cy.wait(5000)
      cy.get('.header').invoke('css', 'display', 'none');
      cy.get('.box-content.itemlist-container.itemlist-1').should('exist').screenshot();
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title h2 span').should('be.visible');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title .image img').should('be.visible');
      //cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a[href="tel:+1 (720) 340-6907"]').should('have.text', '+1 (720) 340-6907');
      //cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a[href="mailto:heidi.duchnowski@pierre-fabre.com"]').should('have.text', 'heidi.duchnowski@pierre-fabre.com');
     // cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a.action-link3').should('have.text', 'New');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a.action-link1').should('have.text', 'Schedule a virtual visit');
  
      // Verify the helpful documents
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title h2 span:contains("Helpful Documents")').should('exist');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title h3:contains("Order Forms")').should('exist');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a.action-link2[href*="authorized-img23"]').should('exist');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title h3:contains("Price Lists")').should('exist');
      cy.get('.box-content.itemlist-container.itemlist-1 .itemlist .detail .title p a.action-link2[href*="authorized-img23"]').should('exist');
    });
  });
  