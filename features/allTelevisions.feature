Feature: Feature name

  Background:
    Given I navigate to page "https://www.which.co.uk/reviews/televisions"

  @tv
  Scenario Outline: All Televisions
    When I filtered "<brand>" as a brand
    Then I should see url contains "<brand>"
    And I should see television reviews for Samsung "<review>"

    Examples:
      | brand   | review                     |
      | Samsung | Samsung television reviews |
      | LG      | LG television reviews      |

  @tv1
  Scenario: All Televisions
    Given I click on search icon
    And I enter "Samsung" text
    When I click on submit button
    Then I should see results text contains "samsung"

  @tv2
  Scenario Outline: Best Buy
    When I filtered "<brand>" as a brand
    Given I click "<menu>" menu option
    Then I should see text "<headerText>"
    And I should see sign up now button
    And I should see login link


    Examples:
      | brand   | review                     | menu          | headerText                |
      | Samsung | Samsung television reviews | Best Buys     | Best Buy televisions      |
      | Samsung | Samsung television reviews | Don't Buys    | Don’t Buy televisions    |
      | Samsung | Samsung television reviews | Advice Guides | Televisions advice guides |