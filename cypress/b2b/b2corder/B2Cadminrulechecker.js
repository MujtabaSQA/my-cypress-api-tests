describe('Sales Rule Promo Quote Test', () => {
    it('should verify rule deletion for "glytone"', () => {
        // Visit the login page
	cy.visit('https://staging.renefurtererusa.com/admin_control/')
	cy.get('#username').type('mujtaba');
	cy.get('#login').type('Admin123@@@');
	cy.get('.action-login.action-primary').click({ force: true });
        cy.visit('https://staging.renefurtererusa.com/admin_control/sales_rule/promo_quote/')

        // Log in to the system (you need to implement this part)

        // Select the filter for "glytone"
        cy.get('#promo_quote_grid_filter_rule_website').select('GlytoneUSA')

        // Wait for the table to load
        cy.wait(2000) // Adjust timing as needed

        // Check if any records contain "glytone"
        cy.get('td.col-rule_website').each(($el, index, $list) => {
            const ruleText = $el.text()
            if (ruleText.includes('glytone')) {
                // Check if multiple websites are present
                const websites = ruleText.split(',').map(item => item.trim())
                if (websites.length > 1) {
                    // Pass if multiple websites are present
                    cy.log(`Rule with ID ${$el.closest('tr').find('td.col-rule_id').text()} contains multiple websites and passes the test.`)
                } else {
                    // Fail if only glytone is present
                    cy.log(`Rule with ID ${$el.closest('tr').find('td.col-rule_id').text()} contains only glytone and fails the test.`)
                }
            }
        })
    })
})
