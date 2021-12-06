const SigninPage = require("../page object/Sign.in.page") ;

describe("Sign in the account", () => {
 /* it("should deny access with wrong info", async () => {
    await SigninPage.open();
    await SigninPage.signin("roy1@9264.com", "Roy1926478");
//报错找不到
    await expect(SigninPage).toHaveText("=email or password is invalid");
  });
*/
  it("should allow access with correct info", async () => {
    await SigninPage.open();
    await SigninPage.signin("roy1@9264.com", "Roy19264786");

    await browser.waitUntil(
      async () => (await browser.$("=roy1").getText()) === "roy1",
      {
        timeout: 3000,
        timeoutMsg: "wait the page load extremely and successfully sign in",
      }
    );

  });
});
