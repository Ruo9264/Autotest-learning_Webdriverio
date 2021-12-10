const ArticlecatalogPage = require("../pageobjects/article_catalog_page");
const ArticledetailPage = require("../pageobjects/article_detail_page");

describe('post comment',()=>{
    it('post a blank comment',async () =>{
        await ArticlecatalogPage.open();
        await ArticlecatalogPage.openarticle(1);
        await browser.waitUntil(
            async () => (await $(".btn-outline-danger").getText()) === "Delete Article",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely",
            });
        await ArticledetailPage.comment();
        await expect($(".error-messages")).toHaveText("body can't be blank");
        await browser.pause(1500);
    })
    it('post a thank comment',async ()=>{
        let content = "Thanks! The article helped a lot!";
        await ArticledetailPage.comment(content);
        await browser.pause(3000);
    })
})