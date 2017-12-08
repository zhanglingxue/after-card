function Class(num) {
    let klass = [];
    klass.number = num;
    klass.getDisplayName = function () {
        return 'Class '+klass.number;
    };
    klass.assignLeader = function (stu) {
        if(stu.klass.number === klass.number) {
            klass.leader = stu;
        }
        else
            console.log("It is not one of us.");
    };
    klass.appendMember = function (stu) {
        if(stu.klass.number) {
            stu.klass = klass;
            return stu;
        } else {
             console.log("It is not one of us.");
        }
    };
    return klass;
}
module.exports = Class;
