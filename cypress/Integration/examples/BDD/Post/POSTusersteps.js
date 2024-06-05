import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the API endpoint {string}', (url) => {
  cy.wrap(url).as('url');
});

When('I send a POST request with the following data:', (dataTable) => {
  cy.get('@url').then((url) => {
    const data = dataTable.rowsHash();
    cy.request('POST', url, data).as('response');
  });
});

Then('the response status should be {int}', (status) => {
  cy.get('@response').its('status').should('eq', status);
});

Then('the response body should contain the following data:', (dataTable) => {
  const expectedData = dataTable.rowsHash();
  cy.get('@response').its('body').should((body) => {
    expect(body).to.include(expectedData);
  });
});

Then('the response body should have an id and createdAt field', () => {
  cy.get('@response').its('body').should((body) => {
    expect(body).to.have.property('id').that.is.a('string');
    expect(body).to.have.property('createdAt').that.is.a('string');
  });
});
