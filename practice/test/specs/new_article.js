const NewarticlePage = require("../pageobjects/new_article_page") ;
describe('write new articles',()=>{
    it('failed because blank title',async()=>{
        await NewarticlePage.open();
        await NewarticlePage.publisharticle();
        await expect($(".error-messages")).toHaveText("title can't be blank");
        await browser.pause(1000);
        })
    it('failed because blank description',async()=>{
        let title="Test case & Agile";
        let description="";
        let content="";
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.publisharticle();
        await expect($(".error-messages")).toHaveText("description can't be blank");
        await browser.pause(1000);
    })
    it('failed because blank content',async()=>{
        let title="Test case & Agile";
        let description="Test case, Agile";
        let content="";
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.publisharticle();
        await expect($(".error-messages")).toHaveText("body can't be blank");
        await browser.pause(1000);
    })
    it('successfully write a new article',async()=>{
        let title="Test case & Agile";
        let description="Test case, Agile";
        let content="As we all known, documents is not that necessary in Agile.";
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.writetags('Test case');
        await NewarticlePage.writetags('Agile');
        await NewarticlePage.publisharticle();
        await browser.pause(3000);
    })
 /*   it('failed beacuse title not unique',async()=>{
        //       await NewarticlePage.open();
        let title="Test case & Agile";
        let description="Test case, Agile";
        let content="As we all known, documents is not that necessary in Agile.";
        await NewarticlePage.writearticle(title,description,content);
        await NewarticlePage.writetags('Test case');
        await NewarticlePage.writetags('Agile');
        await NewarticlePage.publisharticle();
        await expect($(".error-messages")).toHaveText("title must be unique");
    })*/

})