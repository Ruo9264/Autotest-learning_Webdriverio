const NewarticlePage = require("../pageobjects/new_article_page") ;
describe('write new articles',()=>{
    it('write a new article',async()=>{
        await NewarticlePage.open();
        let title="Test case & Agile";
        let description="Test case, Agile";
        let content="As we all known, documents is not that necessary in Agile."
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.writetags('Test case');
        await NewarticlePage.writetags('Agile');
        await NewarticlePage.publisharticle();
        await browser.pause(5000);
    })
})