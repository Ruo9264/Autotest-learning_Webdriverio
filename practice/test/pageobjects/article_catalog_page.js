const Page = require("./page");
const SigninPage = require("./sign_in_page") ;

class Article_catalog_page extends Page {
    constructor() {
        super();
        this.btnCatalog = ()=> browser.$("=Global Feed");
        this.btnHeart = (i)=> $("app-article-preview:nth-child(" + i + ")").$("<button>");
        this.btnArticledetail = (i)=> $("app-article-preview:nth-child(" + i + ")").$("span=Read more...");
    }

    async open(){
        await SigninPage.open();
        await SigninPage.signin("roy@9264.com", "Roy9264786");
        await browser.waitUntil(
            async () => (await browser.$("=Roy").getText()) === "Roy",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely and successfully sign in",
            }
        )
        await this.btnCatalog().click();
    }
    async like(i){
        await this.btnHeart(i).click();
    }
    async openarticle(i){
        await this.btnArticledetail(i).click();
    }
}
module.exports = new Article_catalog_page();
