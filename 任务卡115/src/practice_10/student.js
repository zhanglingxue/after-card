const Person = require('../../src/practice_10/person');

function Student(no,name,age,klass) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.no = no;
    this.klass = klass;
    let person = new Person(no,name,age);
    this.introduce = function () {
        if(this.klass.leader === this)
            return person.introduce()+' I am a Student. I am Leader of Class '+ this.klass.number +'.';
        else
            return person.introduce()+' I am a Student. I am at Class '+ this.klass.number +'.';
    };
    return this;
}

module.exports = Student;

