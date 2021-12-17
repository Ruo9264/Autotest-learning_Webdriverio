describe("conduit script", () => {
  it("open target page", async () => {
    await browser.url("https://angular.realworld.io/");
  });
  it("sign up an account", async () => {
    await browser.$("=Sign up").click();
    await browser.$('[placeholder="Username"]').setValue("roy5");
    await browser.$('[placeholder="Email"]').setValue("roy5@9264.com");
    await browser.$('[type="password"]').setValue("Roy59264786");
    await browser.$("<button>").click();
    await browser.waitUntil(
      async () => (await browser.$("=roy5").getText()) === "roy5",
      {
        timeout: 3000,
        timeoutMsg: "wait the page load extremely",
      }
    );
  });
});
