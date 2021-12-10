const ArticlecatalogPage = require("../pageobjects/article_catalog_page");
const ArticledetailPage = require("../pageobjects/article_detail_page");
const NewarticlePage = require("../pageobjects/new_article_page");

describe('edit article', () => {
    it('edit article', async () => {
        await ArticlecatalogPage.open();
        await ArticlecatalogPage.openarticle(1);
        await browser.waitUntil(
            async () => (await $(".btn-outline-danger").getText()) === "Delete Article",
            {
                timeout: 3000,
                timeoutMsg: "wait the page load extremely",
            });
        await ArticledetailPage.edit_article();
        let title="Test cases & Agile";
        let description = "There are something about Test cases and Agile";
        let content="As we all known, documents is not that necessarily in Agile. So, is that means test cases are no need to manage or write?";
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.deletetags(2);
        await NewarticlePage.writetags("Test tests");
        await NewarticlePage.publisharticle();
        await browser.pause(3000);
    })
})