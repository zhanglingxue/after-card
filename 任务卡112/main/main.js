const datbase = require("./datbase");

exports.summary =function summary(inputs){
    var inputs = inputs;
    let arr = [];
    let i,j;
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

exports.free = function free(arr) {
    var i,j;

     //获得全部商品和优惠商品信息
    var newArr = [], freeArr = [];
    var items = datbase.loadAllItems(),
        pros = datbase.loadPromotions();
    // var arr1 = arr;
    //购买商品的全部信息（优惠前的价格）
    var money = 0;
    for(i = 0;i < arr.length;i ++){
        for(j = 0;j < items.length;j ++){
            if(arr[i].barcode === items[j].barcode){
                money = arr[i].num * items[j].price;
                newArr.push({
                    barcode:items[j].barcode,
                    name:items[j].name,
                    num:arr[i].num,
                    unit:items[j].unit,
                    price:items[j].price,
                    moneys:money,
                })
            }
        }
    }

    //赠送商品的信息
    for(i = 0;i < newArr.length;i ++){
        for(j = 0;j < pros[0].barcodes.length;j ++){
            if(newArr[i].barcode === pros[0].barcodes[j] && newArr[i].num >= 2) {
                newArr[i].moneys -= newArr[i].price;
                freeArr.push({
                    name: newArr[i].name,
                    num: 1,
                    price:newArr[i].price,
                    unit:newArr[i].unit
                })
            }
        }
    }
    return newArr;
};


