 
describe('loginapi testsuite', function() 
{
 
it('create the token to local storage',function() {

    cy.loginAPI().then(function()
{
    cy.visit('https://rahulshettyacademy.com/client',
        {
            onBeforeLoad: function(window)
            {
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        }
    )
})
 
})
})
 
 
 
 
 
 