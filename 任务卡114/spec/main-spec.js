const main = require('../main/main');


describe('main()', () => {
    var num = [9,8,7,2]; //用户输入
    var newArr = [    // 14种可能的结果
        4+'A'+0+'B',
        3+'A'+0+'B',
        2+'A'+2+'B',
        2+'A'+1+'B',
        2+'A'+0+'B',
        1+'A'+3+'B',
        1+'A'+2+'B',
        1+'A'+1+'B',
        1+'A'+0+'B',
        0+'A'+4+'B',
        0+'A'+3+'B',
        0+'A'+2+'B',
        0+'A'+1+'B',
        0+'A'+0+'B',
    ];

    it('Guess Number',function () {
        // let math = main.inTeger();
        let res = main.main(num);
        let no = main.comPare(newArr,res);

        expect(res).toEqual(no);
    })
});