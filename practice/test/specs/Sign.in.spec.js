const SigninPage = require("../page object/Sign.in.page") ;

describe("Sign in the account", () => {
  it("should deny access with wrong info", async () => {
    await SigninPage.open();
    await SigninPage.signin("roy@9264.com", "Roy926478");
//报错找不到
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
