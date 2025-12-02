"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        //TODO Implement this method
    }

    get total() {
        //TODO Implement this method
    }
    //endregion public methods

    //region private methods
    set articleId(value) {
        this.#validateArticleId(value);
        this.#articleId = value;
    }

    set name(value) {
        //TODO Implement this method
    }

    #validateArticleId(articleId) {
        if (Number.isInteger(articleId) && articleId > 0) {
            return articleId;
        }
        throw new InvalidArticleIdException();
    }

    #validateQuantity(quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new InvalidQuantityException("Quantity must be a positive integer.");
        }
    }

    #validatePrice(price) {
        //TODO Implement this method
    }
    //endregion private methods
}



