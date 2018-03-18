const MakeList = require('./list-add-left-right-clear');
const expect = require('chai').expect;

describe("Test makeList", () => {
    let list;
    beforeEach(() => {
        list = makeList();
    });

    describe("addLeft tests", () => {
        it("adding one item should work properly", () => {
            list.addLeft(1);
            expect(list.toString()).to.equal('1');
        });

        it("adding multiple items of different type should work properly", () => {
            list.addLeft(1);
            list.addLeft('2');
            list.addLeft({obj:'objectDude'});
            list.addLeft(['Array', 2, 3]);
            list.addLeft(1.61);
            expect(list.toString()).to.equal('1.61, Array,2,3, [object Object], 2, 1');
        });

        it("mixing usage with addRight should work properly", () => {
            list.addLeft(1);
            list.addRight('2');
            list.addLeft({obj:'objectDude'});
            list.addRight(['Array', 2, 3]);
            list.addLeft(1.61);
            list.addRight(88);
            expect(list.toString()).to.equal('1.61, [object Object], 1, 2, Array,2,3, 88');
        });
    });

    describe("addRight tests", () => {
        it("adding one item should work properly", () => {
            list.addRight(1);
            expect(list.toString()).to.equal('1');
        });

        it("adding multiple items of different type should work properly", () => {
            list.addRight(1);
            list.addRight('2');
            list.addRight({obj:'objectDude'});
            list.addRight(['Array', 2, 3]);
            list.addRight(1.61);
            expect(list.toString()).to.equal('1, 2, [object Object], Array,2,3, 1.61');
        });

        it("mixing usage with addLeft should work properly", () => {
            list.addRight(1);
            list.addLeft('2');
            list.addRight({obj:'objectDude'});
            list.addLeft(['Array', 2, 3]);
            list.addRight(1.61);
            list.addLeft(88);
            expect(list.toString()).to.equal('88, Array,2,3, 2, 1, [object Object], 1.61');
        });
    });

    describe("clear tests", () => {
        it("should remove all elements from the list with one item", () => {
            list.addRight(1);
            list.clear();
            expect(list.toString()).to.equal('');
        });

        it("should remove all elements from the list with multiple items", () => {
            list.addLeft(1);
            list.addLeft({left:'right?'});
            list.addRight('adding Right right?');
            list.addLeft('again?');
            list.clear();
            expect(list.toString()).to.equal('');
        });
    });

    describe("toString tests", () => {
        it("should return a string", () => {
            expect(typeof list.toString()).to.equal('string');
        });

        it("should return an empty string when the list is empty", () => {
            expect(list.toString()).to.equal('');
        });

        it("should return the string representations of the list items, separated by ', '", () => {
            list.addLeft(1);
            list.addLeft({left:'right?'});
            list.addRight('adding Right right?');
            list.addLeft('again?');
            expect(list.toString()).to.equal('again?, [object Object], 1, adding Right right?');
        });
    });
});