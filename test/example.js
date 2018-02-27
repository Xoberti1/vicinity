//use npm test to run this 
var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("ultimateqa", function () {
    // The default tests in mocha is 2 seconds.
    // Extending it to 30 seconds to have time to load the pages

    this.timeout(15000);
    it("should send user to the automation page", function (done) {
        // ID for the login button.
        Nightmare({ show: true })
            .goto("https://ultimateqa.com")      // replace these links with my links for our website
            // Click the forms link
            .click("a[href='https://www.ultimateqa.com/automation/']")
            // Evaluate the title
            .evaluate(function () {
                return document.title;
            })
            // Asset the title is as expected
            .then(function (title) {
                expect(title).to.equal("Automation Practice - Ultimate QA");
                done();
            });
    });

    // it("should present a link to course search after login", function(done) {
    //   new Nightmare({ show: true })
    //     .goto("https://www.ebay.com/login")
    //     // Enter username.
    //     .type("#user_login", "ResilD")
    //     // Enter password.
    //     .type("#login__user_password", "dummy*password")
    //     // Click the login button
    //     .click("#user_submit")
    //     // Evaluate the following selector
    //     .evaluate(function() {
    //       // Assert the "learn" link can be found
    //       return document.querySelector("a[href='/search']");
    //     })
    //     .then(function(link) {
    //       expect(link).to.not.equal(undefined);
    //       done();
    //     });
    // });
    //            // third test
    // it("should throw an error for fun", function() {
    //   throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
    // });
});
