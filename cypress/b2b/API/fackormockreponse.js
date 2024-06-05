describe('Api testing Mock response', () => {
  
   
    it('mock response', () => {


        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
           
        },
          
          // spying and response stubbing
          //mocking response
          {
            statusCode : 200,
            body : [{
                   "book_name": "RestAssured with Java",
                   "isbn": "RSU",
                   "aisle": "2301"    }]
          }).as('bookreterivals')
          cy.get('.btn.btn-primary').click()
          cy.wait('@bookreterivals')
          cy.get('p').should('have.text','Oops only 1 Book available')
          

    })

})