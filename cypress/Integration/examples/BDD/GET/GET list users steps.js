import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the API endpoint {string}', (url) => {
  cy.wrap(url).as('url');
});

When('I send a GET request', () => {
  cy.get('@url').then((url) => {
    cy.request('GET', url).as('response');
  });
});

Then('the response status should be {int}', (status) => {
  cy.get('@response').its('status').should('eq', status);
});

Then('the response body should contain a list of users', () => {
  cy.get('@response').its('body.data').should('be.an', 'array');
});

Then('the list should have {int} users', (count) => {
  cy.get('@response').its('body.data').should('have.length', count);
});

Then('each user should have id, email, first_name, last_name, and avatar', () => {
  cy.get('@response').its('body.data').each((user) => {
    expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
  });
});

Then('the support information should be present', () => {
  cy.get('@response').its('body.support').should((support) => {
    expect(support).to.have.property('url');
    expect(support).to.have.property('text');
  });
});
