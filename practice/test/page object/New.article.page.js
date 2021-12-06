const Page = require('./page');

class NewArticlePage extends Page {
    get btnNewArticle() {
        return browser.$('=New Article')
    };
    get inputTitle() {
        return $("[placeholder = 'Article Title']")
    };
    get inputDescription() {
        return $("[formcontrolname = 'description']")
    };
    get inputContent() {
        return $("[placeholder = 'Write your article (in markdown)']")
    };
    get inputTags() {
        return $("[placeholder = 'Enter tags']")
    };
    get btnPublish(){return $("<button>")};
//open 只能直接打开网页，还需要登录blabla，那page object的意义在哪里
    async open() {
        await super.open();
        await browser.pause(3000);
        await this.btnNewArticle.click();
    }

    async writetags(tags) {
        await this.inputTags.setValue(tags);
        await browser.keys("\uE007");
        await browser.pause(500);
    }

    async writearticle(title,description,content){
        await this.inputTitle.setValue(title);
        await this.inputDescription.setValue(description);
        await this.inputContent.setValue(content);
    }

    async publisharticle(){await this.btnPublish.click()}
}
module.exports = new NewArticlePage();