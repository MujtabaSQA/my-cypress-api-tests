describe('api call directly without interacting browser', () => {
  
   it('api call directly without interacting browse testcase', () => {

    cy.request("POST", "http://216.10.245.166/Library/Addbook.php",{
        "book_name": "RestAssured with Java",
        "isbn": "RSU",
        "aisle": "23015",
         "author":"john foe"  }).then(function(response)
         {
          expect(response.body).to.have.property('Msg','successfully added')
      })


   })
})