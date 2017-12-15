let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {
    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main.Con();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
    it('chance 1',() =>{
        main.Main(1);
        console.log('学生'+'的成绩被添加');
    });
    it('chance 1',() =>{
        main.Main(2);
        expect().toEqual();
    });
    it('chance 1',() =>{
        main.Main(3);
        // expect().toEqual();
    })
});
