const Person = require('../../src/practice_3/person');

function Student(name,age,klass) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.klass = klass;
    this.introduce = function () {
        return 'I am a Student. I am at Class '+ this.klass +'.';
    };
    return this;
}

module.exports = Student;
