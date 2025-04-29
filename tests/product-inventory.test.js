const calculateDiscount = require("../product-inventory.js");

describe("product-inventory", function() {
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