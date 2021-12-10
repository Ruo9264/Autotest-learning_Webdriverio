const ArticlecatalogPage = require('../pageobjects/article_catalog_page')

describe('like article', () => {
    it('like article', async () => {
        await ArticlecatalogPage.open();
        await ArticlecatalogPage.like(1);
        await browser.pause(3000);
    })
})