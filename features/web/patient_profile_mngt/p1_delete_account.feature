Feature: Delete Account
  As a patient
  I want to delete my account
  So that my personal data is removed from the system

  Background:
    Given I am logged in as a "Jona Mar"
    And I am on the "Account Settings" page

  Scenario: Successfully delete account
    When I click the "Delete Account" button
    Then I should see a password confirmation prompt to confirm my account deletion
    When I enter my password correctly
    And I click "Confirm Deletion"
    Then I should see a success message "Account successfully deleted"
    And my account should be temporarily deleted from the database for 30 days (permanently after)
    And I should be redirected to the signup page

  Scenario: Cancel account deletion
    When I click the "Delete Account" button
    Then I should see a password confirmation prompt to confirm my account deletion
    When I cancel the account deletion
    Then I should remain logged in
    And I should remain on the "Account Settings" page
    And my account should not be deleted

  Scenario: Account deletion with wrong password
    When I click the "Delete Account" button
    Then I should see a password confirmation prompt to confirm my account deletion
    When I enter my password incorrectly
    And I click "Confirm Deletion"
    Then I should see an error message "Incorrect password"
    And my account should not be deleted

  # Reactivation Consideration
  Scenario: Reactivation timeframe after account deletion
    Given I successfully deleted my account
    When I attempt to create a new account with the same email address within 30 days
    Then I should be given the option to reactivate my account
    When I choose to reactivate
    Then my account should be restored to its previous state

  Scenario: Permanent deletion after reactivation timeframe
    Given I successfully deleted my account
    When 30 days have passed
    And I attempt to create a new account with the same email address
    Then I should be able to create a completely new account
    And my old account should be permanently unrecoverable