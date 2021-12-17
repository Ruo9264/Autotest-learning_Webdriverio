module.exports = class Page {
    async open() {
        await browser.url("https://angular.realworld.io/");
    }
}
