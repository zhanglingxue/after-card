const datbase = require("./datbase");

module.exports = function main(inputs){
    var inputs = inputs;
    var arr = [];
    var i,j;
    for(i = 0;i < inputs.length;){
        if(inputs[i].indexOf("-") > 0){
            arr.push({
                barcode:inputs[i].split("-")[0],
                num:parseInt(inputs[i].split("-")[1])  //解析字符串
            });
            i ++;
        }else{
            var count = 0;
            for(j = i;j < inputs.length;j ++){
                if(inputs[i] === inputs[j]){
                    count ++;
                }
            }
            arr.push({
                barcode:inputs[i],
                num:count
            });
            i += count;
        }
    }
    return arr;
};

module.exports = function free() {

};

// module.exports = {main, free};

