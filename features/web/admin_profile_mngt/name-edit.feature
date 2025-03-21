Feature: Edit First and Last Name
  As a medical officer
  I want to edit my first and last name
  So that my profile displays my correct name information

  Background:
    Given I am logged in as a user (Medical officer)
    And I am on the "Edit Profile" page

  Scenario: Successfully update first and last name
    When I click on the edit button next to my name
    And I clear the first name field
    And I enter "John" in the first name field
    And I clear the last name field
    And I enter "Smith" in the last name field
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed name should be "John Smith"
    And the changes should be saved in the database

  Scenario: Cancel name update
    When I click on the edit button next to my name
    And I clear the first name field
    And I enter "Jane" in the first name field
    And I clear the last name field
    And I enter "Doe" in the last name field
    And I click the "Cancel" button
    Then my name should remain unchanged
    And no changes should be saved to the database

  Scenario: Attempt to save with empty first name
    When I click on the edit button next to my name
    And I clear the first name field
    And I enter "" in the first name field
    And I click the "Save" button
    Then I should see an error message "First name is required"
    And my name should remain unchanged
    And no changes should be saved to the database

  Scenario: Attempt to save with empty last name
    When I click on the edit button next to my name
    And I clear the last name field
    And I enter "" in the last name field
    And I click the "Save" button
    Then I should see an error message "Last name is required"
    And my name should remain unchanged
    And no changes should be saved to the database

  Scenario: Attempt to save with invalid characters in name fields
    When I click on the edit button next to my name
    And I clear the first name field
    And I enter "John123" in the first name field
    And I click the "Save" button
    Then I should see an error message "Name can only contain letters, spaces, and hyphens"
    And my name should remain unchanged
    And no changes should be saved to the database

  Scenario: Character limit validation for name fields
    When I click on the edit button next to my name
    And I clear the first name field
    And I enter a first name with 51 characters
    And I click the "Save" button
    Then I should see an error message "First name cannot exceed 50 characters"
    And my name should remain unchanged
    And no changes should be saved to the database