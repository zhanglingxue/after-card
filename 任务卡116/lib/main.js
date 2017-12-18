function Main() {
     console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

     let scanf=require('scanf');
     let str=scanf("%d");
     if(str === 1) {
         console.log('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交:');
         let input = scanf('%s');
         console.log(input);
     }

}





module.exports = {Main};