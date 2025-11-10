"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //TODO Missing private attributs
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        //TODO Implement this method
    }

    get articleId() {
        //TODO Implement this method
    }

    get name() {
        //TODO Implement this method
    }

    get quantity() {
        //TODO Implement this method
    }

    set quantity(value) {
        //TODO Implement this method
    }

    get price() {
        //TODO Implement this method
    }

    set price(value) {
        //TODO Implement this method
    }

    get total() {
        //TODO Implement this method
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
    }

    set #name(value) {
        //TODO Implement this method
    }

    #validateArticleId(articleId) {
        //TODO Implement this method
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
    }

    #validatePrice(price) {
        //TODO Implement this method
    }
    //endregion private methods
}



