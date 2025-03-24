Feature: Edit Phone Number
  As a patient
  I want to edit my phone number
  So that I can be contacted via my preferred mobile phone number

  Background:
    Given I am logged in as a user with edit permissions
    And I am on the "Edit Profile" page
    And my displayed phone number is "+44-0232-569102"

  Scenario: Successfully update phone number with country code
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I select "+44" from the country code dropdown
    And I enter "7700900123" in the phone number field
    And I click the "Save" button
    Then I should see the message "Please enter the verification code sent to +447700900123"
    And the verification code should be sent to "+44-7700-900123"
    When I enter the correct verification code
    And I click on "Verify" button
    Then I should see a message "Phone number verified successfully"
    And my displayed phone number should be formatted as "+44-7700-900123"
    And the changes should be saved in the database

  Scenario: Update phone number but verification fails
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I select "+44" from the country code dropdown
    And I enter "7700900123" in the phone number field
    And I click the "Save" button
    Then I should see the message "Please enter the verification code sent to +447700900123"
    And the verification code should be sent to "+44-7700-900123"
    When I enter an incorrect verification code
    And I click on "Verify" button
    Then I should see an error message "Incorrect verification code"
    And no changes should be saved in the database

  Scenario: Cancel phone number update
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I enter "+44-7700-900123" in the phone number field
    And I click the "Cancel" button
    Then my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number field validation for required entry
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I enter "" in the phone number field
    And I click the "Save" button
    Then I should see an error message "Phone number is required"
    And my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number field validation for valid format (US format)
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I enter "abcdefghijk" in the phone number field
    And I click the "Save" button
    Then I should see an error message "Please enter a valid phone number"
    And my phone number should remain unchanged
    And no changes should be saved to the database

  Scenario: Phone number field character limit
    When I click on the form field showing my phone number
    And I clear the phone number field
    And I try to enter a phone number with more than 10 characters
    Then the field should not accept more than 10 characters