let chai = require('chai').expect;
let isSymmetric = require('./isSymmetric').isSymmetric;
let mocha = require('mocha');

describe("Test array", function () {
    it("Should return false for non array element", function () {
        expect(isSymmetric(1,2,3)).to.be.false;
    });

    it("Should return true if array", function () {
        expect(isSymmetric([1,2,3,4])).to.be.true;
    });

    it("Should return true for empty array", function () {
        expect(isSymmetric([])).to.be.true;
    });

    it("Should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.true;
    });

    it("Should return false for [1,2]", function () {
        expect(isSymmetric([1,2,])).to.be.false;
    });

    it("should return true for [1,2,3,2,1]", function () {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;
    });

    it("should return false for [1,2,3,4,2,1]", function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
    });

    it("should return true for [1,2,3,3,2,1]", function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
    });

    it("Should return true for [1.50, 2, 1.50]", function () {
        expect(isSymmetric([1.50, 2, 1.50])).to.be.true;
    });

    it("should return true for [1,'hello',{a:2},new Map(),{a:2},'hello',1]", function () {
        expect(isSymmetric([1,'hello',{a:2},new Map(),{a:2},'hello',1])).to.be.true;
    });

    it("should return false for [1,'hello',{a:3},new Date(),{a:2},'hello',1]", function () {
        expect(isSymmetric([1,'hello',{a:3},new Date(),{a:2},'hello',1])).to.be.false;
    });
});