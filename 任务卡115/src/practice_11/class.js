function Class(num) {
    let klass = [];
    klass.number = num;
    klass.getDisplayName = function () {
        return 'Class '+klass.number;
    };
    klass.assignLeader = function (stu) {
        if(stu.klass.number === klass.number) {
            klass.leader = stu;
            if(klass.teacher) {
                console.log("I am " + klass.teacher.name + ". I know " + stu.name + " become Leader of Class " + klass.number + ".");
            }
        } else {
            console.log("It is not one of us.");
        }
    };
    klass.appendMember = function (stu) {
        if(stu.klass.number) {
            stu.klass = klass;
            if(klass.teacher) {
                if(klass.teacher.isTeaching(stu)) {
                    console.log("I am "+ klass.teacher.name+". I know "+ stu.name +" has joined Class "+ stu.klass.number +".")
                }
            }
            return stu;
        } else {
             console.log("It is not one of us.");
        }
    };
    klass.registerJoinListener = function (teacher) {
        klass.teacher = teacher;
    };

    klass.registerAssignLeaderListener = function (teacher) {
        klass.teacher = teacher;
    };
    return klass;
}
module.exports = Class;


