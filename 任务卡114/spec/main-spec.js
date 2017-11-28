const main = require('../main/main');


describe('main()', () => {
    var num = 9872;
    var no;
    var arr=[1,2,3,4,5,6,7,8,9,0];
    var result='';
    var len=0;
    var index=0;
    for(var i=0;i<4;i++) {
        len = arr.length;
        index = Math.floor(Math.random()*(len-1));
        //返回值：返回小于或等于x，并且与之最接近的整数
        result += arr.splice(index,1);
    }
    var newArr = [
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
        let res = main.main(result,num);
        for(var i=0;i<newArr.length;i++) {
            no = newArr[i];
            if(res === no) {
                break;
            }
            continue;
        }
        console.log(result);
        console.log(num);
        console.log(no);
        expect(res).toEqual(no);
    })
});