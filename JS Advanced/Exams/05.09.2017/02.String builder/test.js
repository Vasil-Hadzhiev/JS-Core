const StringBuilder = require('./string-builder');
const expect = require('chai').expect;

describe('StringBuilder unit tests', function () {
    let strBuilder;
    beforeEach(function () {
        strBuilder = new StringBuilder();
    });

    describe('check if functions exist', function () {
        it('strArray is not defined', function () {
            expect(strBuilder._stringArray !== undefined).to.be.equal(true);
        });

        it('append func exists', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });

        it('prepend func exists', function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });

        it('insertAt func exists', function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });

        it('remove func exists', function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });

        it('toString func exists', function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    it('appends correctly', function () {
        strBuilder.append('wut');
        strBuilder.append(' face');
        expect(strBuilder.toString()).to.be.equal('wut face');
    });

    it('prepends correctly', function () {
        strBuilder.prepend(' face');
        strBuilder.prepend('wut');
        expect(strBuilder.toString()).to.be.equal('wut face');
    });

    it('insertsAt correctly', function () {
        strBuilder.append('Hello friend');
        strBuilder.insertAt('dear ', 6);
        expect(strBuilder.toString()).to.be.equal('Hello dear friend');
    });

    it('removes correctly', function () {
        strBuilder.append('Hello friend');
        strBuilder.insertAt('dear ', 6);
        strBuilder.remove(6, 5);
        expect(strBuilder.toString()).to.be.equal('Hello friend');
    });

    it('throws error', function () {
        expect(() => strBuilder.append(23)).to.throw();
    });

    it('return new str', function () {
        strBuilder = new StringBuilder('new str');
        expect(strBuilder.toString()).to.be.equal('new str');
    });
});