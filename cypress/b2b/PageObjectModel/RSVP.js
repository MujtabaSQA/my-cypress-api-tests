class RSVP{

    rsvppopupbutton()
    {
        return cy.get('.action.action-link4.rsvp-popup').eq(0)
    }

    rsvppracticenamefield()
    {
        return cy.get('#practice_name')
    }

    rsvpformsubmitbutton()
    {
        return cy.get('.modal-footer button')
    }

}

export default RSVP;