/// <reference types="Cypress" />
import RSVP from '../PageObjectModel/RSVP'
//const { data } = require("cypress/types/jquery");

describe('RSVP Form', function ()  {
  //const { data } = require("cypress/types/jquery");
  before(function () {
    // runs once before all tests in the block
    cy.Login('melissa.amerson@adcsclinics.com','sasasa@123');
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })
    
    const myGolabalVar = Cypress.env("baseurl")
    it('RSVP', function ()  {
    
    const rsvp = new RSVP()
    cy.visit(myGolabalVar + 'online/p2p/conventions')
    rsvp.rsvppopupbutton().click()
    cy.wait(6000)
    rsvp.rsvppracticenamefield().type(this.data.name)
    cy.wait(3000)
    rsvp.rsvpformsubmitbutton().click({force: true})
    //cy.get('.modal-footer button.action.tertiary').click({ force: true })
   
    

    });

});

