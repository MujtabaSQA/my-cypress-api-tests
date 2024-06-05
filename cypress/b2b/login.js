describe('login automation', () => {
    it('test login', () => {

      cy.Login('','');

      cy.screenshot('login');
    })
})