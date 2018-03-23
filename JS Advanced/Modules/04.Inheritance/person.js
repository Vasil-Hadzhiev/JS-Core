let Entity = require('./entity');
let Dog = require('./dog');

class Person extends Entity{
    constructor (name,phrase,dog) {
        super(name);
        this.phrase=phrase;
        if(!(dog instanceof Dog)){
            throw new TypeError('Not valid type of dog');
        }
        this.dog=dog;
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Person;