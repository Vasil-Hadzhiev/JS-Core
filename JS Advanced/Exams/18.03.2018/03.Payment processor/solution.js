class PaymentProcessor {
    constructor(options){
        this.payments = new Map();
        this.defaultOptions = Object.values(options);
        this.precision = 2;
        this.balance = 0;
    }

    registerPayment(id, name, type, value){
        if(this.defaultOptions === undefined){
            this.defaultOptions = ['service', 'product', 'other'];
        }
        if(this.defaultOptions.includes(type)){
            if(typeof id === 'number' && typeof name === 'string' && typeof type === 'string' && typeof value === 'number'){
                let currentIdCheck = this.payments.get(id);
                if(currentIdCheck === undefined){
                    this.payments.set(id, [name, type, value]);
                }
                this.balance += value;
            } else {
                throw new Error();
            }
        }
    }

    deletePayment(id){
        if(typeof id === 'number'){
            let currentIdCheck = this.payments.get(id);
            if(currentIdCheck !== undefined){
                this.payments.delete(id);
            } else {
                throw new Error();
            }
        } else {
            throw new Error();
        }
    }

    get(id){
        let result = '';
        if(typeof id === 'number'){
            let currentIdCheck = this.payments.get(id);
            if(currentIdCheck !== undefined){
                result += `Details about payment ID: ${id}\n`;
                result += `- Name: ${this.payments.get(id)[0]}\n`;
                result += `- Type: ${this.payments.get(id)[1]}\n`;
                let value = Math.round((this.payments.get(id)[2] * 100) / 100).toFixed(this.precision);
                result += `- Value: ${value}`;
            } else {
                throw new Error();
            }
        } else {
            throw new Error();
        }
    }

    setOptions(options){
        let newOptions = options['types'];
        if(newOptions !== undefined){
            this.defaultOptions = newOptions;
        }

        let newPrecision = options['precision'];
        if(newPrecision !== undefined){
            this.precision = newPrecision;
        }
    }

    toString(){
        let result = 'Summary:\n';
        result += '- Payments: ' + this.payments.size + '\n';
        result += '- Balance:' + Math.round((this.balance * 100) / 100).toFixed(this.precision);
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
