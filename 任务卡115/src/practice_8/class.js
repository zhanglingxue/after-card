function Class(num) {
    let klass = [];
    klass.number = num;
    klass.getDisplayName = function () {
        return 'Class '+klass.number;
    };
    klass.assignLeader = function (stu) {
        if(stu.no === 1) {
            klass.leader = stu.name;
        }
    };
    return klass;
}
module.exports = Class;
