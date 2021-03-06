// const Class = require('../../src/practice_7/class');
const Person = require('../../src/practice_7/person');

function Student(name,age,klass) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.klass = klass;
    let person = new Person(name,age);
    this.introduce = function () {
        return person.introduce()+' I am a Student. I am at Class '+ this.klass.number +'.';
    };
    return this;
}

module.exports = Student;

