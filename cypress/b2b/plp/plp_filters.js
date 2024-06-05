Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
describe('PLP Filters Automation', () => {
    beforeEach(() => {
      cy.viewport(1200, 1500);
      cy.Login('melissa.amerson@adcsclinics.com', 'sasasa@123');
    });
  
    it('should automate PLP filters', () => {
      const myGlobalVar = Cypress.env("baseurl");
  
      cy.visit(myGlobalVar);
      cy.get('#mp_menu_2 a').click({ force: true });
  
      cy.get('.filter-options-item').each(($filterOption) => {
        const filterTitle = $filterOption.find('.filter-options-title');
        const filterContent = $filterOption.find('.filter-options-content');
  
        // Use alias to reference the filter title
        cy.get(filterTitle).as('currentFilterTitle');
  
        if (!filterContent.is(':visible')) {
          // Click on the filter title using the alias
          cy.get('@currentFilterTitle').then($title => {
            cy.wrap($title).click().then(() => {
              // Wait for the click to complete before proceeding
              // Check each checkbox and capture a screenshot
              cy.get($filterOption).find('input[type="checkbox"]').each(($checkbox, index) => {
                cy.screenshot(`filter_${$title.text().trim()}_before_${index + 1}`);
                cy.get($checkbox).check({ force: true });
                cy.screenshot(`filter_${$title.text().trim()}_after_${index + 1}`);
              });
            });
          });
        }
  
        // Perform any additional actions needed after checking checkboxes
        cy.get('.block-content.filter-content .block-actions.filter-actions a').contains('Clear All').click({ force: true });
        cy.wait(5000);
      });
    });
  });
  