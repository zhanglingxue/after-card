const Person = require('../../src/practice_10/person');

function Teacher(no,name,age,klasses) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.klasses = klasses;
    let person = new Person(no,name,age);
    this.introduce = function () {
        if(!this.klasses)
            return person.introduce()+' I am a Teacher. I teach No Class.';
        else
            return person.introduce()+' I am a Teacher. I teach Class '+this.klasses[0].number+', '+this.klasses[1].number+'.';
    };
    this.introduceWith = function (stu) {
        if(this.klasses.number === stu.klasses.number) {
            return 'My name is Tom. I am 21 years old. I am a Teacher. I teach '+stu.name+'.';
        }
        else
            return "My name is Tom. I am 21 years old. I am a Teacher. I don't teach "+stu.name+'.';
    };
    return this;
}

module.exports = Teacher;



