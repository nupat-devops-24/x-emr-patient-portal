Feature: Edit Phone Number
  As an EMR system user
  I want to edit my phone number
  So that I can be contacted with the correct information

  Background:
    Given I am logged in as a user with edit permissions
    And I am on the "Edit Profile" page

  Scenario: Successfully update phone number
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I enter "+1-555-123-4567" in the phone number field
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed phone number should be "+1-555-123-4567"
    And the changes should be saved in the database

  Scenario: Cancel phone number update
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I enter "+44-7700-900123" in the phone number field
    And I click the "Cancel" button
    Then my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number field validation for required entry
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I enter "" in the phone number field
    And I click the "Save" button
    Then I should see an error message "Phone number is required"
    And my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number field validation for valid format (US format)
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I enter "abcdefghijk" in the phone number field
    And I click the "Save" button
    Then I should see an error message "Please enter a valid phone number"
    And my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number automatic formatting
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I enter "5551234567" in the phone number field
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed phone number should be formatted as "+1-555-123-4567"
    And the changes should be saved in the database

  Scenario: Phone number with country code
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I select "+44" from the country code dropdown
    And I enter "7700900123" in the phone number field
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed phone number should be formatted as "+44-7700-900123"
    And the changes should be saved in the database

  Scenario: Phone number field character limit
    When I click on the edit button next to my phone number
    And I clear the phone number field
    And I try to enter a phone number with more than 20 characters
    Then the field should not accept more than 20 characters