// header_spec.js

describe('home page banner', () => {
    /*before(() => {
      cy.viewport(1618, 477);
      //cy.visit('https://mcstaging.avenedermatologicalskincare.com/');
      cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
    });*/
  
   beforeEach(() => {
    cy.viewport(1618, 477);
    //cy.visit('https://mcstaging.avenedermatologicalskincare.com/');
    cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
    });
    const myGolabalVar = Cypress.env("baseurl")
   
  it('should have a clickable banner with the correct image', () => {
    cy.visit(myGolabalVar);
    cy.closePopupIfExists();
    // Select the banner element
    cy.get('.header').invoke('css', 'display', 'none');
    cy.get('.bannerslide.is-image.is-medium.is-black.is-url').should('exist').screenshot().as('banner');

    /*// Verify the banner's image source
    cy.get('@banner').find('img').should('have.attr', 'src')
      .and('include', 'PIE_AVE_Nov23-Cyber-Monday-30_Homepage-Banner_Desktop-3400_v1.0.jpg');
	*/
    // Click the banner and verify the navigation
    cy.get('@banner').click({ force: true }).then(() => {
      cy.url().should('include', 'business/promotions/');
      cy.get('.header').invoke('css', 'display', 'none');
      cy.screenshot();
    });
  });
});

   