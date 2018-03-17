const Sumator = require('./sumator');
const expect = require('chai').expect;

describe('Sumator unit test', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    describe('check if functions exist', function () {
        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.equal(true);
        });

        it('add func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        it('sumNums func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it('removeByFilter func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it('toString func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    it('test if array is empty', function () {
        expect(sumator.data.length).to.be.equal(0);
    });

    describe('add func tests', function () {
        it('add only numbers', function () {
            sumator.add(5);
            sumator.add(5);
            sumator.add(5);
            expect(sumator.toString()).to.be.equal('5, 5, 5');
        });

        it('add only strings', function () {
            sumator.add('Vaso');
            sumator.add('Pesho');
            sumator.add('Gosho');
            expect(sumator.data.join(', ')).to.be.equal('Vaso, Pesho, Gosho');
        });

        it('add only objects', function () {
            sumator.add({name: 'Vasil'});
            sumator.add({});
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]');
        });

        it('add mixed types', function () {
            sumator.add('Vaso');
            sumator.add(4);
            sumator.add({});
            expect(sumator.toString()).to.be.equal('Vaso, 4, [object Object]');
        });
    });

    describe('sum nums func', function () {
        it('sum only numbers', function () {
            sumator.add(5);
            sumator.add(5);
            sumator.add(5);
            expect(sumator.sumNums()).to.be.equal(15);
        });

        it('sum only string', function () {
            sumator.add('asd');
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(0);
        });

        it('sum everything', function () {
            sumator.add('asd');
            sumator.add({});
            sumator.add(4);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(7);
        });
    });

    describe('Test remove by filter', function () {
        it('removes all odd numbers', function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10');
        });

        it('removes numbers bigger than 5', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => x > 5);
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5');
        });

        it('throws exception', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i);
            }

             expect(() => sumator.removeByFilter(undefined)).to.throw();
        });
    })

    describe('test toString func', function () {
        it('with items in array', function () {
            sumator.add(4);
            sumator.add('gosho');
            expect(sumator.toString()).to.be.equal('4, gosho');
        });

        it('without items in array', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        });
    })
});