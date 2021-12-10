const Page = require("./page");

class Article_detail_page extends Page {
    constructor() {
        super();
        this.btnDelete = () => browser.$("button=Delete Article");
        this.btnEdit = () => browser.$("a=Edit Article");
        this.inputComment = () => $("[placeholder='Write a comment...']");
        this.btnPost = () => browser.$("button=Post Comment");
    }

    async edit_article() {
        await this.btnEdit().click()
    }

    async delete_article(){
        await this.btnDelete().click();
    }

    async comment(comment){
        await this.inputComment().setValue(comment);
        await this.btnPost().click();
    }
}

module.exports = new Article_detail_page();