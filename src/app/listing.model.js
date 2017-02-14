"use strict";
var Listing = (function () {
    function Listing(productTitle, productSubTitle, productType, productPrice, productDescription, productCondition, sku, location, image_1_path) {
        this.productTitle = productTitle;
        this.productSubTitle = productSubTitle;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productCondition = productCondition;
        this.sku = sku;
        this.location = location;
        this.image1Path = image_1_path;
        this.sold = false;
    }
    //Getters And Setters
    Listing.prototype.getProductTitle = function () {
        return this.productTitle;
    };
    Listing.prototype.setProductTitle = function (value) {
        this.productTitle = value;
    };
    Listing.prototype.getProductSubTitle = function () {
        return this.productSubTitle;
    };
    Listing.prototype.setProductSubTitle = function (value) {
        this.productSubTitle = value;
    };
    Listing.prototype.getProductType = function () {
        return this.productType;
    };
    Listing.prototype.setProductType = function (value) {
        this.productType = value;
    };
    Listing.prototype.getProductPrice = function () {
        return this.productPrice;
    };
    Listing.prototype.setProductPrice = function (value) {
        this.productPrice = value;
    };
    Listing.prototype.getSKU = function () {
        return this.sku;
    };
    Listing.prototype.setSKU = function (value) {
        this.sku = value;
    };
    Listing.prototype.getProductDescription = function () {
        return this.productDescription;
    };
    Listing.prototype.setProductDescription = function (value) {
        this.productDescription = value;
    };
    Listing.prototype.getProductCondition = function () {
        return this.productCondition;
    };
    Listing.prototype.setProductCondition = function (value) {
        this.productCondition = value;
    };
    Listing.prototype.getLocation = function () {
        return this.location;
    };
    Listing.prototype.setLocation = function (value) {
        this.location = value;
    };
    Listing.prototype.hasSold = function () {
        return this.sold;
    };
    Listing.prototype.getFormattedPrice = function () {
        var price = this.productPrice.toString();
        price = "$" + price + ".00";
        return price;
    };
    Listing.prototype.getImage1Path = function () {
        return this.image1Path;
    };
    Listing.prototype.setImage1Path = function (value) {
        this.image1Path = value;
    };
    Listing.prototype.getImage2Path = function () {
        return this.image2Path;
    };
    Listing.prototype.setImage2Path = function (value) {
        this.image2Path = value;
    };
    Listing.prototype.getImage3Path = function () {
        return this.image3Path;
    };
    Listing.prototype.setImage3Path = function (value) {
        this.image3Path = value;
    };
    Listing.prototype.getImage4Path = function () {
        return this.image4Path;
    };
    Listing.prototype.setImage4Path = function (value) {
        this.image4Path = value;
    };
    Listing.prototype.getImage5Path = function () {
        return this.image5Path;
    };
    Listing.prototype.setImage5Path = function (value) {
        this.image5Path = value;
    };
    Listing.prototype.getImage6Path = function () {
        return this.image6Path;
    };
    Listing.prototype.setImage6Path = function (value) {
        this.image6Path = value;
    };
    return Listing;
}());
exports.Listing = Listing;
