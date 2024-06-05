Feature: API testing GET POST PUT DELETE

    API testing
   @Smoke
  Scenario: Verify POST create user endpoint
    Given the API endpoint "https://reqres.in/api/users"
    When I send a POST request with the following data:
      | name | Mujtaba |
      | job  | SQA   |
    Then the response status should be 201
    Then the response body should contain the following data:
      | name | Mujtaba |
      | job  | SQA  |
    Then the response body should have an id and createdAt field



  
