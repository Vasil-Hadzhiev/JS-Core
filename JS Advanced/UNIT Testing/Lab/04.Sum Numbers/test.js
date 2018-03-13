let sum = require('./sumNumbers').sum;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test sum", () => {
    it("Should return 1 for [1]", () => {
        expect(sum([1])).to.equal(1);
    });

    it("Should return 3 for [1, 2]", () => {
        expect(sum([1, 2])).to.equal(3);
    });

    it("Should return 0 for []", () => {
        expect(sum([])).to.equal(0);
    });

    it("Should work with negative numbers", () => {
        expect(sum([-1, -2, 5])).to.equal(2);
    });

    it("Should return NaN", () => {
        expect(sum(['NaN', 2, 3])).to.be.NaN;
    });
});