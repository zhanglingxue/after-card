// Write your cade below:

//随机生成4位不相同的数
function inTeger() {
    var arr=[0,1,2,3,4,5,6,7,8,9];
    var res=[];
    var len=0;
    var index=0;
    for(var i=0;i<4;i++) {
        len = arr.length;
        index = Math.floor(Math.random()*(len-1));
        //返回值：返回小于或等于x，并且与之最接近的整数
        res.push(arr.splice(index,1)[0]);
        //res += arr.splice(index,1);
    }
    return res;
}

//两数组数据比较
function main(num) {
    var ans = inTeger();
    var nu = num;
    var i , j ;
    var count = 0,
        sum = 0;
    for(i=0;i < ans.length;i++) {
        for(j=0;j < nu.length;j ++) {
            if(ans[i] === nu[j]) {
                if(i === j){
                    count += 1;
                    break;
                }else{
                    sum += 1;
                }
            }
        }
    }
    var end = count +'A'+ sum +'B';
    console.log("随机数  :"+ans);
    console.log("用户输入:"+nu);
    console.log("返回值:"+end);
    return end;
}

//结果与测试事例比较
function comPare(newArr,end) {
    var no;
    for(var i=0;i<newArr.length;i++) {
        no = newArr[i];
        if(end === no) {
            break;
        }
        continue;
    }
    return no;
}

module.exports = {
    main,comPare
};