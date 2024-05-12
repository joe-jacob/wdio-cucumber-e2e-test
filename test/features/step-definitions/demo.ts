import { Given, Then, When } from "@wdio/cucumber-framework";
import * as chai from "chai"


Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(5000)
})

When(/^Search with (.*)$/, async function(search) {
    let ele = await $(`[id = APjFqb]`);
    await ele.setValue(search);
    await browser.keys("Enter")
})

Then(/^Click on the first result$/, async function(){
    let ele = await $(`<h3>`)
    await ele.click();
})

Then(/^URL should be validated (.*)$/, async function(URL){
    console.log(`expectedURL: ${URL}`);
    let ele = await browser.getUrl();
    chai.expect(ele).to.equal(URL)
})