describe('order filter', () => {
    it('sort by Ax Order Type', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');

      cy.get('#myaccount2').click({ force: true });
      // Rest of your test logic
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
      cy.get('#eventAxOrderType').select('Sales Order', { force: true }).should('be.enabled').should('have.value','Sales Order');
      cy.url().should('include', 'ax_order=Sales%20Order')
      cy.wait(6000)
      cy.get('.loading-mask').should('not.be.visible');
      cy.screenshot('Sales Order') 
      

    });

    it('sort by Returned Order', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');

      cy.get('#myaccount2').click({ force: true });
      // Rest of your test logic
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
      cy.get('#eventAxOrderType').select('Returned Order', { force: true }).should('be.enabled').should('have.value','Returned Order');
      cy.url().should('include', 'ax_order=Returned%20Order')
      cy.wait(6000)
      cy.get('.loading-mask').should('not.be.visible');
      cy.screenshot('Returned Order') 
      

    })
    it('sort by Financial Order', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');

      cy.get('#myaccount2').click({ force: true });
      // Rest of your test logic
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
      cy.get('#eventAxOrderType').select('Financial Order', { force: true }).should('be.enabled').should('have.value','Financial Order');
      cy.url().should('include', '&ax_order=Financial%20Order')
      cy.wait(6000)
      cy.get('.loading-mask').should('not.be.visible');
      cy.screenshot('Financial Order') 

    })
      
    it('sort by invoiceStatus Pending', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      cy.get('#myaccount2').click({ force: true });
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
  
      // Select 'Pending' from the dropdown
      cy.get('#invoiceStatus').select('Pending', { force: true }).should('be.enabled').should('have.value', 'Pending');
      cy.url().should('include', '&invoice_status=Pending')
      // Wait for the filter to take effect (adjust timing as needed)
      cy.wait(1500);
      cy.get('.loading-mask').should('not.be.visible');
      // Verify that the invoices with 'Pending' status are displayed
      cy.get('td.col.status[data-th="Invoice Status"]').each(($status) => {
          cy.wrap($status).should('have.text', 'Pending');
      });
  
      // Optional: Take a screenshot for reference
      cy.screenshot('Pending');
  
  

    })
    it('sort by invoiceStatus Paid', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      cy.get('#myaccount2').click({ force: true });
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
  
      // Select 'Pending' from the dropdown
      cy.get('#invoiceStatus').select('Paid', { force: true }).should('be.enabled').should('have.value', 'Paid');
      cy.url().should('include', '&invoice_status=Paid')
      // Wait for the filter to take effect (adjust timing as needed)
      cy.wait(15000);
      cy.get('.loading-mask').should('not.be.visible');
      //cy.get('.loader').should('not.exist')
      // Verify that the invoices with 'Pending' status are displayed
      cy.get('td.col.status[data-th="Invoice Status"]').each(($status) => {
          cy.wrap($status).should('have.text', 'Paid');
      });
  
      // Optional: Take a screenshot for reference
      cy.screenshot('Paid');
  
  

    })
    it('sort by invoiceStatus Overdue', () => {
      cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
  
      cy.get('#myaccount2').click({ force: true });
      cy.get('.links-myaccount > .links > :nth-child(4) > a').click({ force: true });
      cy.get('a.action.action-filter').click({ force: true });
  
      // Select 'Pending' from the dropdown
      cy.get('#invoiceStatus').select('Overdue', { force: true }).should('be.enabled').should('have.value', 'Overdue');
      cy.url().should('include', '&invoice_status=Overdue')
      // Wait for the filter to take effect (adjust timing as needed)
      cy.wait(15000);
      cy.get('.loading-mask').should('not.be.visible');
      //cy.get('.loader').should('not.exist')
      // Verify that the invoices with 'Pending' status are displayed
      cy.get('td.col.status[data-th="Invoice Status"]').each(($status) => {
          cy.wrap($status).should('have.text', 'Overdue');
      });
  
      // Optional: Take a screenshot for reference
      cy.screenshot('Overdue');
  
  

    })
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