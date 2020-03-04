var expect = require('chai').expect

const allTelevisions = {

    open: function (url) {
        browser.url(url);
        browser.maximizeWindow()
    },

    get contactLink() {
        return $("//span[contains(.,'More filters')]");
    },
    get choosebrand_Samsung_chkbox() {
        return $('//div/div/div[3]/section/ul/li/div/label/div');
    },

    get choosebrand_LG_chkbox() {
        return $('//div/div/div[3]/section/ul/li[2]/div/label/div');
    },

    get clickDoneButton() {
        return $("(//button[@type='button'])[13]");
    },

    get getHeaderText() {
        return $("//h1");
    },

    
   
     

    clickMoreFilters() {
        this.contactLink.click();
    },

    chooseBrands(brand) {
        this.choosebrand_Samsung_chkbox.waitForDisplayed(3000);

        switch (brand.toLowerCase()) {
            case "samsung":
                this.choosebrand_Samsung_chkbox.click();
                break;
            case "lg":
                this.choosebrand_LG_chkbox.click();
                break;
        }
        this.clickDoneButton.waitForDisplayed();
        this.clickDoneButton.waitForDisplayed(3000);
        this.clickDoneButton.click();
    },

    assertURL(brand) {
        browser.pause(5000)
        expect(browser.getUrl()).contains(brand.toLowerCase());
    },

    assertBrandName(brand) {
        var actualHeader = this.getHeaderText.getText();
        expect(actualHeader).contains(brand);
    },

    





}




module.exports = allTelevisions;
