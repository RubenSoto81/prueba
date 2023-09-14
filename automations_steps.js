import { Given, When, Then } from "@wdio/cucumber-framework";
import Automations from "../pageobject/automation";
import { browser } from "protractor";
import { when } from "jquery";

Given("I am Google page", async() => {
    await Automations.open();
    await browser.maximizeWindow();
});

when("I should see first automation process in Wikipedia", async() => {
    await Automations.searchGoogle();
    await Automations.selectWiki();
});

Then("I should do a screenshoot", async() => {
    await Automations.screen();
});