let stu = [
        ['zlx','201','han','1','110','120','100','120'],
        ['www','202','han','1','108','125','99','120'],
        ['maa','203','hui','1','110','129','102','110'],
        ['nic','204','han','1','119','119','110','113']
        ];
function sortNumber(a,b)
{
    return a - b;
}

function Main() {
    　　console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    let scanf = require('scanf');
    let str = scanf("%d");
    if(str === 1) {
        addStu();
    } else if(str === 2) {
        Print();
    }else {
        return;
    }
}

function addStu() {
    let arr = [],
        process = [];
    let i,j;
    console.log('请输入学生信息（格式：姓名, 学号, 民族, 班级, 数学: 成绩, 语文: 成绩, 英语: 成绩, 编程: 成绩），按回车提交:');
    let scanf = require('scanf');
    let input = scanf('%s');
    arr = input.split(',');
    while (arr.length !== 8) {
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
        input = scanf('%s');
        arr = input.split(',');
    }
    for(i = 0;i < arr.length;i ++) {
        if(i < 4) {
            process.push(arr[i]);
        }else {
            process.push(arr[i].split(':')[1]);
        }
    }
    stu.push(process);
    console.log(stu);
    console.log('学生' + arr[0] + '的成绩被添加');
    Main();
}

function Print() {
    let i, j, m, n;
    let allAver,
        allSum = 0;
    console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    let scanf = require('scanf');
    let input = scanf('%s');
    let stuId = input.split(',');
    // 判断输入是否为数字
    for (i in stuId) {
        // 跳转语句
        mainloop: while(isNaN(stuId[i])) {
            console.log('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            input = scanf('%s');
            stuId = input.split(',');
            continue mainloop;
        }
    }
    let expectText = '成绩单\n'+ '姓名|数学|语文|英语|编程|平均分|总分\n'+'=====================================\n';
    for(i in stuId) {
        let sum = 0,
        aver = 0;
        for(j in stu) {
            if(stuId[i] === stu[j][1]) {
                expectText += stu[j][0];
                for(m=4;m <= 7;m ++){
                    sum += parseInt(stu[j][m]);
                    expectText += '|'+stu[j][m];
                }
                aver = sum /4;
                expectText += '|'+aver+'|'+sum+'\n';
            }
        }
    }
    let main = [];
    for(n in stu) {
        let sums = 0;
        for(m=4;m <= 7;m ++) {
            sums += parseInt(stu[n][m]);
        }
        main.push(sums);
    }
    main.sort(sortNumber);
    let mainnum;
    if(main.length % 2 === 0) {
        i = main.length / 2;
        mainnum = (main[i-1] + main[i]) / 2;
    }else {
        mainnum = main[parseInt(main.length / 2)];
    }
    for(i in main) {
        allSum += main[i];
    }
    allAver = allSum / stu.length;
    expectText += '=====================================\n'+'全班总分平均数：'+ allAver +'\n'+'全班总分中位数：'+mainnum;
    console.log(expectText);
    Main();
}

module.exports = {Main};