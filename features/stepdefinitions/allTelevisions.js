const allTelevisions = require('../pages/allTelevisions_page.js');

var expect = require('chai').expect
const { Then, Given, When } = require('cucumber');


Then('I navigate to page {string}', function (url) {
    allTelevisions.open(url);
});

When ('I filtered {string} as a brand',function(brand){
    allTelevisions.clickMoreFilters();
    allTelevisions.chooseBrands(brand);
});

Then ('I should see url contains {string}',function(brand){
    allTelevisions.assertURL(brand);
});

Then ('I should see television reviews for Samsung {string}',function(reviewResults){
    allTelevisions.assertBrandName(reviewResults);
});

