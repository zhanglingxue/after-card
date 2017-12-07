const Person = require('../../src/practice_6/person');

function Teacher(name,age,klass) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.klass = klass;
    let person = new Person(name,age);
    this.introduce = function () {
        if(!this.klass)
            return person.introduce()+' I am a Teacher. I teach No Class.';
        else
            return person.introduce()+' I am a Teacher. I teach Class '+this.klass+'.';
    };
    return this;
}

module.exports = Teacher;
