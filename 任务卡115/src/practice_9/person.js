function Person(no,name,age) {
    let person = [];
    person.name = name;
    person.age = age;
    person.no = no;
    person.introduce = function () {
        return 'My name is '+ this.name+'. I am '+ this.age +' years old.';
    };
    // person.introduce();
    return person;
}

module.exports = Person;
