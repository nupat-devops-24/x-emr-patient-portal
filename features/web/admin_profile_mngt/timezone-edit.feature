Feature: Edit Timezone
  As an EMR system user
  I want to edit my timezone
  So that my schedule and records display in my local time

  Background:
    Given I am logged in as a user with edit permissions
    And I am on the "Edit Profile" page

  Scenario: Successfully update timezone
    When I click on the edit button next to my timezone
    And I select "America/New_York (UTC-05:00)" from the timezone dropdown
    And I click the "Save" button
    Then I should see a success message "Profile updated successfully"
    And my displayed timezone should be "America/New_York (UTC-05:00)"
    And the changes should be saved in the database
    And all my scheduled appointments should be displayed in the new timezone

  Scenario: Cancel timezone update
    When I click on the edit button next to my timezone
    And I select "Europe/London (UTC+00:00)" from the timezone dropdown
    And I click the "Cancel" button
    Then my timezone should remain unchanged
    And no changes should be saved to the database

  Scenario: Timezone field validation for required selection
    When I click on the edit button next to my timezone
    And I select "" from the timezone dropdown
    And I click the "Save" button
    Then I should see an error message "Timezone is required"
    And my timezone should remain unchanged
    And no changes should be saved to the database

  Scenario: Searching for a timezone
    When I click on the edit button next to my timezone
    And I type "Tokyo" in the timezone search field
    Then I should see "Asia/Tokyo (UTC+09:00)" in the filtered results
    And I should not see "America/New_York (UTC-05:00)" in the filtered results

  Scenario: Searching for a timezone by UTC offset
    When I click on the edit button next to my timezone
    And I type "UTC+01" in the timezone search field
    Then I should see all timezones with UTC+01:00 offset in the filtered results
    And I should not see timezones with other UTC offsets in the filtered results

  Scenario: Display common timezones at the top
    When I click on the edit button next to my timezone
    Then I should see a section labeled "Common Timezones" at the top of the dropdown
    And the common timezones section should include at least:
      | America/New_York (UTC-05:00) |
      | Europe/London (UTC+00:00)    |
      | Asia/Tokyo (UTC+09:00)       |
      | Australia/Sydney (UTC+10:00) |

  Scenario: System tracks timezone change history
    When I click on the edit button next to my timezone
    And I select "Europe/Paris (UTC+01:00)" from the timezone dropdown
    And I click the "Save" button
    Then the system should log the timezone change in the audit trail
    And the log should include the previous timezone and the new timezone