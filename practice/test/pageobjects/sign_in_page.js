const Page = require('./page');

class Sign_in_page extends Page {
  get btnSignin() {
    return browser.$("=Sign in");
  }
  get inputEmail() {
    return $('[placeholder="Email"]');
  }
  get inputPassword() {
    return $('[type="password"]');
  }
  get btnSubmit() {
    return $("<button>");
  }

  async open() {
    await super.open();
    await browser.pause(3000);
    await this.btnSignin.click();
  }
  async signin(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

module.exports = new Sign_in_page();
