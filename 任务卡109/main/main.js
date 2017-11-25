const datbase = require("./datbase");

module.exports = function main(){
    var inputs = arguments[0];   //参数(arguments)对象包含了所有传给函数的参数,并且像数列一样排着序.
    var arr = [];
    var i,j;
    var info = {};
    //统计inputs商品信息
    for(i = 0;i < inputs.length;){
        if(inputs[i].indexOf("-") > 0){
            info["barcode"] = inputs[i].split("-")[0];
            info["num"] = inputs[i].split("-")[1];
            arr.push(info);
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
    console.log(arr);
    //获得全部商品和优惠商品信息
    var newArr = [],
        freeArr = [];
    var items = datbase.loadAllItems(),
        pros = datbase.loadPromotions();

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

    //打印清单（显示优惠后的价格）
    var expectText = '***<没钱赚商店>购物清单***\n',
        sum = 0,
        freeSum = 0;
    for(i = 0; i < newArr.length; i ++){
        expectText += "名称：" + newArr[i].name + "，数量：" + newArr[i].num + newArr[i].unit +
            "，单价：" + newArr[i].price.toFixed(2) + "(元)，小计：" +
            newArr[i].moneys.toFixed(2) + "(元)\n";
        //parseFloat()解析一个字符串并返回一个浮点数
        sum += parseFloat(newArr[i].moneys);
    }
    expectText += '----------------------\n' +
                  '挥泪赠送商品：\n';
    for(i = 0; i < freeArr.length; i ++){
        expectText += "名称：" + freeArr[i].name + "，数量：" + freeArr[i].num + freeArr[i].unit + "\n";
        freeSum += parseFloat(freeArr[i].price);
    }
    expectText += '----------------------\n' +
                  '总计：' + sum.toFixed(2) + '(元)\n' +
                  '节省：' + freeSum.toFixed(2) + '(元)\n' +
                  '**********************';

    console.log(expectText);
};