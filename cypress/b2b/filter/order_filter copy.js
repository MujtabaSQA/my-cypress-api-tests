describe('Overdue', () => {
    
      
    it('sort by invoiceStatus Blocked', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      cy.get('#myaccount2').click({ force: true });
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
  
      // Select 'Pending' from the dropdown
      cy.get('#invoiceStatus').select('Blocked', { force: true }).should('be.enabled').should('have.value', 'Blocked');
      cy.url().should('include', '&invoice_status=Blocked')
      // Wait for the filter to take effect (adjust timing as needed)
      cy.wait(15000);
      //const message = $el.find('.message.info.empty')
      //cy.get('.loader').should('not.exist')
      // Verify that the invoices with 'Pending' status are displayed
      cy.get('.message.info.empty').then(($message) => {
        if ($message.length === 0 || $message.css('visibility') === 'hidden' || $message.css('display') === 'none') {
            // Message is not visible, proceed with your current verification
            cy.get('.loading-mask').should('not.be.visible');
            cy.get('td.col.status[data-th="Invoice Status"]').each(($status) => {
                cy.wrap($status).should('have.text', 'Blocked');
            });
    
            // Optional: Take a screenshot for reference
            cy.screenshot('Blocked');
        } else {
            // Message is visible, handle the case where no data is available
            cy.log('No data available message is visible');
    
            // Optional: Take a screenshot for reference
            cy.screenshot('NoDataAvailable');
        }
    });
      

    })
  })


