const calculateDiscount = require("../product-inventory.js");
const filterProducts = require("../product-inventory.js");
const sortInventory = require("../product-inventory.js");

const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false },
];

describe("calculateDiscount", function() {
    test("should return true for correct discounted price", function() {
        expect(calculateDiscount(25, 10)).toBe(22.5);
    });

    test("should return true for correct discounted price", function() {
        expect(calculateDiscount(50, 25)).toBe(37.50);
    });

    test("should return null for price being a string", function() {
        expect(calculateDiscount("fifty", 0.25)).toBe(null);
    });

    test("should return null for discount being a negative", function() {
        expect(calculateDiscount(200, -0.25)).toBe(null);
    });
});

describe("filterProducts", function () {
    test("should return all items that are in stock", function () {
        expect(filterProducts(products, product => product.inStock)).toEqual(products.filter(product => product.inStock));
    });

    test("should return an empty array if not given an array as first argument", function () {
        expect(filterProducts(1, product => product.inStock)).toEqual([]);
    });

    test("should return an empty array if not handed a function as second argument", function () {
        expect(filterProducts(products, 1)).toEqual([]);
    });
});

