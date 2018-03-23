let Person=require('./person');

class Student extends Person{
    constructor (name,phrase,dog,id) {
        super(name,phrase,dog);
        this.id=id;
    }

    saySomething(){
        let baseStr=super.saySomething();
        return `Id: ${this.id} `+ baseStr;
    }
}
module.exports = Student;