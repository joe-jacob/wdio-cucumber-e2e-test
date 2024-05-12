Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo
        Given Google page is opened
        When Search with <search>
        Then Click on the first result
        Then URL should be validated <URL>

        Examples:
            | Test ID    | search | URL                   |
            | Demo_TC001 | WDIO   | https://webdriver.io/ |