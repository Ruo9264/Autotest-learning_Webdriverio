class SignInPage {
  get inputEmail() {
    return $('[placeholder="Email"]');
  }

  get inputPassword() {
    return $('[type="password"]');
  }

  get btnSubmit() {
    return $("<button>");
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}
module.exports = new SignInPage();
