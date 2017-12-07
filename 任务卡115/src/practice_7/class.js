function Class(num) {
    let klass = [];
    klass.number = num;
    klass.getDisplayName = function () {
        return 'Class '+klass.number;
    };
    return klass;
}
module.exports = Class;
