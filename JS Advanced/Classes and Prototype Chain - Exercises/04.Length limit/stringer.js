class Stringer {
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength - length;
    }

    toString(){
        let result = '';

        if(this.innerLength === 0){
            result = '...';
        } else if (this.innerString.length > this.innerLength){
            result = this.innerString.substr(0, this.innerString.length - this.innerLength) + '...';
        } else {
            result = this.innerString;
        }

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
