const Page = require('./page');

class Sign_in_page extends Page {
    constructor() {
        super();
        this.inputEmail = () => $('[placeholder="Email"]');
        this.inputPassword = () => $('[type="password"]');
        this.btnSubmit = () => $("<button>");
        this.btnSignin = () => browser.$('=Sign in');

    }

    async open() {
        await super.open();
        await browser.pause(3000);
        await this.btnSignin().click();
    }

    async signin(email, password) {
        await this.inputEmail().setValue(email);
        await this.inputPassword().setValue(password);
        await this.btnSubmit().click();
    }

}

module.exports = new Sign_in_page();
