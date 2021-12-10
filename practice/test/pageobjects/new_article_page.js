const Page = require('./page');
const SigninPage = require("./sign_in_page");

class New_article_page extends Page {
    constructor() {
        super();
        this.btnNewArticle = () => browser.$('=New Article');
        this.inputTitle = () => browser.$("[placeholder = 'Article Title']");
        this.inputDescription = () => browser.$("[formcontrolname = 'description']");
        this.inputContent = () => browser.$("[placeholder = 'Write your article (in markdown)']");
        this.inputTags = () => browser.$("[placeholder = 'Enter tags']");
        this.btnPublish = () => browser.$("<button>");
        this.delTags = (j) => browser.$(".tag-default:nth-child(" + j + ")").$("<i>");
    }

    async open() {
        await SigninPage.open();
        await SigninPage.signin("roy@9264.com", "Roy9264786");
        await browser.waitUntil(
            async () => (await browser.$("=Roy").getText()) === "Roy",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely and successfully sign in",
            }
        )
        await this.btnNewArticle().click();
    }

    async writetags(tags) {
        await this.inputTags().setValue(tags);
        await browser.keys("\uE007");
        await browser.pause(500);
    }

    async deletetags(j) {
        await this.delTags(j).click();
    }

    async writearticle(title, description, content) {
        await this.inputTitle().setValue(title);
        await this.inputDescription().setValue(description);
        await this.inputContent().setValue(content);
    }

    async publisharticle() {
        await this.btnPublish().click()
    }
}

module.exports = new New_article_page();