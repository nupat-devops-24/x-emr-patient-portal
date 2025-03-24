Feature: Edit Position
  As an EMR system user
  I want to edit my position
  So that my profile displays my correct role in the organization

  Background:
    Given I am logged in as a user with edit permissions
    And I am on the "Edit Profile" page

  Scenario: Successfully update position to Medical Officer
    When I click on the edit button next to my position
    And I select "Medical Officer" from the position dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed position should be "Medical Officer"
    And the changes should be saved in the database

  Scenario: Successfully update position to Clerk
    When I click on the edit button next to my position
    And I select "Clerk" from the position dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed position should be "Clerk"
    And the changes should be saved in the database

  Scenario: Successfully update position to Record Management Officer
    When I click on the edit button next to my position
    And I select "Record Management Officer" from the position dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed position should be "Record Management Officer"
    And the changes should be saved in the database

  Scenario: Successfully update position to Lab Scientist
    When I click on the edit button next to my position
    And I select "Lab Scientist" from the position dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed position should be "Lab Scientist"
    And the changes should be saved in the database

  Scenario: Successfully update position to Pharmacist
    When I click on the edit button next to my position
    And I select "Pharmacist" from the position dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed position should be "Pharmacist"
    And the changes should be saved in the database

  Scenario: Cancel position update
    When I click on the edit button next to my position
    And I select "Lab Scientist" from the position dropdown
    And I click the "Cancel" button
    Then my position should remain unchanged
    And no changes should be saved to the database

  Scenario: Position field validation for required selection
    When I click on the edit button next to my position
    And I select "" from the position dropdown
    And I click the "Save" button
    Then I should see an error message "Position is required"
    And my position should remain unchanged
    And no changes should be saved to the database

  Scenario: Position field restriction to predefined options only
    When I click on the edit button next to my position
    Then I should only see the following options in the dropdown:
      | Medical Officer            |
      | Clerk                      |
      | Record Management Officer  |
      | Lab Scientist              |
      | Pharmacist                 |