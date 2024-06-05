Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('Quicklinks Tests', () => {
  beforeEach(() => {
    cy.viewport(1200, 1500);

    cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
  });
  const myGolabalVar = Cypress.env("baseurl")
  it('should navigate through quicklinks', () => {
    // Visit the page with quicklinks
    
    cy.visit(myGolabalVar);
    cy.get('.header').invoke('css', 'display', 'none');
    // Check if the quicklinks block is visible
    cy.get('.block-quicklinks').should('be.visible');

    // Iterate through each item in the quicklinks
    cy.get('.itemlist-container.itemlist-3 .itemlist').each(($item) => {
      const title = $item.find('.title h3').text().toLowerCase();
      const description = $item.find('.title p').text();

      // Perform assertions based on the quicklink title
      switch (title) {
        case 'my account':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'customer/account/performance-dashboard/');
          break;
        case 'build your business':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'online/p2p/all/');
          break;
        case 'explore products':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'avene');
          break;
        case 'training & education':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'training/seminars/');
          break;
        case 'marketing resources':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'marketing/resources/');
          break;
        case 'support':
          cy.wrap($item).find('.actions a').should('have.attr', 'href', myGolabalVar+'customersupport/');
          break;
        default:
          // Handle other titles as needed
          break;
      }
    });
  });
});


