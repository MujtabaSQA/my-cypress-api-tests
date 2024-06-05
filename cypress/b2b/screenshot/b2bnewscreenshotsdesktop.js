/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const path = require('path');

describe('Screenshots from CSV', () => {
  it('Should take screenshots from URLs in CSV', () => {
   
    const csvPath = 'C:/Users/Crescentic Digital/CypressAutomation/cypress/fixtures/b2bnewsiteurls.csv';

    cy.readFile(csvPath, 'utf-8').then((csvContent) => {
      const rows = csvContent.trim().split('\n');

      rows.forEach(async (row, index) => {
        try {
          const [url, newColumn] = row.split(','); // Split the row into columns
          
          if (url) {
            const absoluteUrl = url.trim();
            
            // Intercept all network requests and wait for them to complete
            // cy.intercept('GET', '**/*', '**/*.{jpg,jpeg,png,gif,svg}').as('networkRequests');
            cy.viewport(1366,768)
            cy.visit({ url: absoluteUrl, failOnStatusCode: false });
            
            // cy.wait('@networkRequests');
            // cy.get('img').should('be.visible');
            cy.wait(9000)
            // cy.wait('@imageRequests');
             // Hide the popup before taking the screenshot
             //cy.get('._94ve').invoke('css', 'display', 'none');
             //cy.get('div[style="cursor: pointer;"]').should(be.visible).invoke('css', 'display', 'none');
            // Save the screenshot with the name from the new column
            //cy.get('img').should(.should('.be.visible');
            const screenshotName = `./screenshotsb2burls/${newColumn}-${index + 1}`;
            cy.screenshot(screenshotName);
          } else {
            cy.log(`Empty URL at index ${index + 1}. Skipping.`);
          }
        } catch (error) {
          cy.log(`Error taking screenshot for URL at index ${index + 1}: ${error.message}`);
        }
      });
    });
  });
})

