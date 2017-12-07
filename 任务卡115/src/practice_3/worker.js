const Person = require('../../src/practice_3/person');

function Worker(name,age) {
    Person.apply(this, arguments);
    this.name = name;
    this.age = age;
    this.introduce = function () {
        return 'I am a Worker. I have a job.';
    };
    return this;
}

module.exports = Worker;
