const Person = require('../../src/practice_8/person');

function Teacher(no,name,age,klass) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.klass = klass;
    let person = new Person(no,name,age);
    this.introduce = function () {
        if(!this.klass)
            return person.introduce()+' I am a Teacher. I teach No Class.';
        else
            return person.introduce()+' I am a Teacher. I teach Class '+this.klass.number+'.';
    };
    this.introduceWith = function (stu) {
        if(this.klass.number === stu.klass.number) {
            return 'My name is Tom. I am 21 years old. I am a Teacher. I teach '+stu.name+'.';
        }
        else
            return "My name is Tom. I am 21 years old. I am a Teacher. I don't teach "+stu.name+'.';
    };
    return this;
}

module.exports = Teacher;

