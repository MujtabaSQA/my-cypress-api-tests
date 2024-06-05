/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const path = require('path');

describe('Screenshots from CSV', () => {
  it('Should take screenshots from URLs in CSV', () => {
   
    const csvPath = 'C:/Users/Crescentic Digital/CypressAutomation/cypress/fixtures/rene.csv';

    cy.readFile(csvPath, 'utf-8').then((csvContent) => {
      const rows = csvContent.trim().split('\n');

      rows.forEach((row, index) => {
        const [url, newColumn] = row.split(','); // Split the row into columns
        
        if (url) {
          const absoluteUrl = url.trim();

          // Define an array of device names
          const devices = ['iphone-6', 'ipad-2', [1024, 768]];

          devices.forEach(device => {
            if (Array.isArray(device)) {
              cy.viewport(device[0], device[1]);
            } else {
              cy.viewport(device);
            }
            cy.visit({ url: absoluteUrl, failOnStatusCode: false });
            
            // Wait for the page to load and stabilize
            cy.wait(9000); // Adjust wait time as needed
            
            // Hide the header element
            cy.get('.header').invoke('css', 'display', 'none');

            
            // Add another wait to ensure the CSS change takes effect
            cy.wait(4000);
            cy.wait(4000);
            cy.wait(4000);

            const deviceName = Array.isArray(device) ? `${device[0]}x${device[1]}` : device;
            const screenshotName = `./screenshotsb2burls/${newColumn}-${index + 1}-${deviceName}`;
            cy.screenshot(screenshotName);
          });
        } else {
          cy.log(`Empty URL at index ${index + 1}. Skipping.`);
        }
      });
    });
  });
});
