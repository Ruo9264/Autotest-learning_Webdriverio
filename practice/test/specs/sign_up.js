const SignupPage = require("../pageobjects/sign_up_page") ;

describe("Sign up the account", () => {
    it("failed sign up with repeated username and email", async () => {
        await SignupPage.open();
        await SignupPage.signup("Roy","roy@9264.com", "Roy926478");
        await expect($(".error-messages").$("li:nth-child(1)")).toHaveText("email has already been taken");
        await expect($(".error-messages").$("li:nth-child(2)")).toHaveText("username has already been taken");

    });

    it("failed sign up with repeated username", async () => {
        await SignupPage.open();
        await SignupPage.signup("Roy","royy@9264.com", "Roy926478");
        await expect($(".error-messages")).toHaveText("username has already been taken");
    });

    it("failed sign up with repeated email", async () => {
        await SignupPage.open();
        await SignupPage.signup("Royy","roy@9264.com", "Roy926478");
        await expect($(".error-messages")).toHaveText("email has already been taken");
    });

    it("successfully sign up the account", async () => {
        await SignupPage.open();
        //await SignupPage.signup("Royy","royy@9264.com","Royy9264786")
        await SignupPage.signup("xiaoyuan","binggan.com", "xiaoyuanbinggan");

        await browser.waitUntil(
            async () => (await browser.$("=xiaoyuan").getText()) === "xiaoyuan",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely and successfully sign in",
            }
        );
    });
});
