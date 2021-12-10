const SigninPage = require("../pageobjects/sign_in_page") ;

describe("Sign in the account", () => {
  it("should deny access with wrong info", async () => {
    await SigninPage.open();
    await SigninPage.signin("roy@9264.com", "Roy926478");
    await expect($(".error-messages")).toHaveText("email or password is invalid");
  });
  it("should allow access with correct info", async () => {
    await SigninPage.open();
    await SigninPage.signin("roy@9264.com", "Roy9264786");

    await browser.waitUntil(
      async () => (await browser.$("=Roy").getText()) === "Roy",
      {
        timeout: 3000,
        timeoutMsg: "wait the page load extremely and successfully sign in",
      }
    );
  });
});
