Feature: Edit Profile Picture
  As a patient
  I want to edit my profile picture
  So that I can personalize my account and be easily recognized by the medical staff

  Background:
    Given I am logged in as a user with edit permissions
    And I am on the "Edit Profile" page

  # Basic Upload Functionality
  Scenario: Successfully upload a new profile picture
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "valid_image.jpg" from my computer
    And I click the "Save" button
    Then I should see a success message "Profile picture updated successfully"
    And my profile should display the new image
    And the changes should be saved in the database

  Scenario: Cancel profile picture update
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "valid_image.jpg" from my computer
    And I click the "Cancel" button
    Then my profile picture should remain unchanged
    And no changes should be saved to the database

  # Image Validation
  Scenario: Attempt to upload an invalid file type
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select a non-image file "document.pdf" from my computer
    Then I should see an error message "Only image files (JPG, PNG, GIF) are allowed"
    And my profile picture should remain unchanged
    And no changes should be saved to the database

  Scenario: Attempt to upload an oversized image
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "oversized_image.jpg" of 5MB from my computer
    Then I should see an error message "Image size must be less than 5MB"
    And my profile picture should remain unchanged
    And no changes should be saved to the database

  Scenario: Attempt to upload an image with insufficient dimensions
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "tiny_image.jpg" with dimensions 50x50 pixels from my computer
    Then I should see an error message "Image dimensions must be at least 200x200 pixels"
    And my profile picture should remain unchanged
    And no changes should be saved to the database

  # Default Image and Removal
  Scenario: Remove current profile picture and use default avatar
    When I click on the edit button next to my profile picture
    And I click on "Remove picture"
    And I confirm the removal
    Then I should see a success message "Profile picture removed"
    And my profile should display the default avatar
    And the changes should be saved in the database

  # Security and Privacy
  Scenario: Image metadata is stripped before saving
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "geotagged_image.jpg" with GPS metadata from my computer
    And I click the "Save" button
    Then I should see a success message "Profile picture updated successfully"
    And the saved image should have all EXIF metadata removed
    And the GPS location data should not be stored in the system

  Scenario: Profile picture is displayed in different sizes across the application
    When I have successfully updated my profile picture
    Then my profile picture should be visible as a large image on my profile page
    And my profile picture should be visible as a medium image in the staff directory
    And my profile picture should be visible as a small thumbnail in chat conversations
    And my profile picture should be visible as a tiny icon in the navigation bar

  # --- Non-priority ---
  # Image Cropping
  Scenario: Crop uploaded image before saving
    When I click on the edit button next to my profile picture
    And I click on "Upload new image"
    And I select an image file "valid_image.jpg" from my computer
    Then I should see an image editor with cropping functionality
    When I adjust the cropping area to select a portion of the image
    And I click the "Apply" button
    And I click the "Save" button
    Then I should see a success message "Profile picture updated successfully"
    And my profile should display the cropped image
    And the changes should be saved in the database