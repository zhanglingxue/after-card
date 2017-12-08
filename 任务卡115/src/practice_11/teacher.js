const Person = require('../../src/practice_11/person');
const Class = require('../../src/practice_11/class');


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
            return "My name is "+this.name+". I am "+this.age+" years old. I am a Teacher. I teach "+stu.name+".";
        }
        else
            return "My name is "+this.name+". I am "+this.age+" years old. I am a Teacher. I don't teach "+stu.name+".";
    };
    this.isTeaching = function (stu){
        for (let i in this.klasses) {
            if(this.klasses[i] === stu.klass){
                return true;
            }
        }
    };
    return this;
}

module.exports = Teacher;




