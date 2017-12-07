const Person = require('../../src/practice_5/person');

function Worker(name,age) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    let person = new Person(name,age);
    this.introduce = function () {
        return person.introduce()+' I am a Teacher. I have a job.';
    };
    return this;
}

module.exports = Worker;
