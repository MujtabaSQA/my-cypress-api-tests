Feature: API testing GET

  Get API testing
  @Smoke
  Scenario: Verify GET list users endpoint
    Given the API endpoint "https://reqres.in/api/users?page=2"
    When I send a GET request
    Then the response status should be 200
    And the response body should contain a list of users
    And the list should have 6 users
    And each user should have id, email, first_name, last_name, and avatar
    And the support information should be present
