const Page = require('./page');

class Sign_up_page extends Page {
    constructor() {
        super();
        this.inputUsername = () => $('[placeholder="Username"]');
        this.inputEmail = () => $('[placeholder="Email"]');
        this.inputPassword = () => $('[type="password"]');
        this.btnSubmit = () => $("<button>");
        this.btnSignup = () => browser.$('=Sign up');
    }

    async open() {
        await super.open();
        await browser.pause(3000);
        await this.btnSignup().click();
    }

    async signup(username,email, password) {
        await this.inputUsername().setValue(username);
        await this.inputEmail().setValue(email);
        await this.inputPassword().setValue(password);
        await this.btnSubmit().click();
    }
}

module.exports = new Sign_up_page();
