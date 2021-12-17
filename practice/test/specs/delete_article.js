const ArticlecatalogPage = require("../pageobjects/article_catalog_page");
const ArticledetailPage = require("../pageobjects/article_detail_page");

describe('delete article', () => {
    it('delete first article', async () => {
        await ArticlecatalogPage.open();
        await ArticlecatalogPage.openarticle(1);
        await browser.waitUntil(
            async () => (await $(".btn-outline-danger").getText()) === "Delete Article",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely",
            });
        await ArticledetailPage.delete_article();
        await browser.pause(1000);
    })
})