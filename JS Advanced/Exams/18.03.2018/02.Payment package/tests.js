const PaymentPackage = require('./solution');
const expect = require('chai').expect;

describe("unit tests", function() {
    it('constructor ', function () {
        expect(PaymentPackage.prototype.hasOwnProperty('constructor')).to.be.true;
    });

    it("name prop", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.true;
    });

    it("value prop", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.true;
    });

    it("vat prop", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.true;
    });

    it("active prop", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.true;
    });

    it("toString prop", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.true;
    });

    it('throw error', function () {
        let payment;
        expect(() => payment = new PaymentPackage('')).to.throw(Error);
    });

    it('throw error', function () {
        let payment;
        expect(() => payment = new PaymentPackage(23)).to.throw(Error);
    });

    it('throw error', function () {
        let payment;
        expect(() => payment = new PaymentPackage('HR')).to.throw(Error);
    });

    it('throw error', function () {
        let payment;
        expect(() => payment = new PaymentPackage('HR', -23)).to.throw(Error);
    });

    it('get name', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(payment.name).to.be.equal('Package');
    });

    it('set name', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.name = 'New package';
        expect(payment.name).to.be.equal('New package');
    });

    it('set name error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.name = '').to.throw(Error);
    });

    it('set name error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.name = 23).to.throw(Error);
    });

    it('set name error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.name = {}).to.throw(Error);
    });

    it('set name error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.name = [1,2,3]).to.throw(Error);
    });

    it('get value', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(payment.value).to.be.equal(1000);
    });

    it('set value', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.value = 2000;
        expect(payment.value).to.be.equal(2000);
    });

    it('set value', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.value = 0;
        expect(payment.value).to.be.equal(0);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.value = -23).to.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.value = '').to.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.value = {}).to.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.value = [1,2,3]).to.throw(Error);
    });

    it('get active', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(payment.active).to.be.true;
    });

    it('set active', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.active = false;
        expect(payment.active).to.be.false;
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.active = null ).to.be.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.active = {} ).to.be.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.active = '' ).to.be.throw(Error);
    });

    it('set error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.active = 23 ).to.be.throw(Error);
    });

    it('get VAT', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(payment.VAT).to.be.equal(20);
    });

    it('set VAT', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.VAT = 50;
        expect(payment.VAT).to.be.equal(50);
    });

    it('set VAT', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.VAT = 0;
        expect(payment.VAT).to.be.equal(0);
    });

    it('set VAT error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.VAT = null).to.throw(Error);
    });

    it('set VAT error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.VAT = -1).to.throw(Error);
    });

    it('set VAT error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.VAT = '').to.throw(Error);
    });

    it('set VAT error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.VAT = {}).to.throw(Error);
    });

    it('set VAT error', function () {
        let payment = new PaymentPackage('Package', 1000);
        expect(() => payment.VAT = [1,2,3]).to.throw(Error);
    });

    it('toString tests', function () {
        let payment = new PaymentPackage('Package', 1000);
        const output = [
            `Package: ${payment.name}` + (payment.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${payment.value}`,
            `- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`
        ];
        let result = output.join('\n');
        expect(payment.toString()).to.be.equal(result);
    });

    it('toString tests', function () {
        let payment = new PaymentPackage('Package', 1000);
        payment.active = false;
        const output = [
            `Package: ${payment.name}` + (payment.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${payment.value}`,
            `- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`
        ];
        let result = output.join('\n');
        expect(payment.toString()).to.be.equal(result);
    })
});