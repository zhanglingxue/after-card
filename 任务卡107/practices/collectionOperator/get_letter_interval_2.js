'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
    var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var i , j , res;
    var newarr = [];
    var result = [];
    if(number_a < number_b) {
        for(i = number_a;i <= number_b;i ++) {
            newarr.push(i);
        }
        for(j = 0;j < newarr.length;j ++) {
            if(parseInt(newarr[j] / 26) == 0) {
                result.push(arr[newarr[j]-1]);
            }else if(newarr[j] == 26) {
              result.push(arr[newarr[j] - 1]);
            }else if(parseInt(newarr[j] / 26) > 0) {
                if(newarr[j] % 26 != 0) {
                    res = arr[(parseInt(newarr[j] / 26))-1] + arr[(newarr[j] % 26) - 1];
                    result.push(res);
                }else {
                    res = arr[(parseInt(newarr[j] / 26))-2] + arr[(newarr[j] / 2)-1];
                    result.push(res);
                }
            }
        }
    }else if(number_a > number_b) {
        for(i = number_a;i >= number_b;i --) {
            newarr.push(i);
        }
        for(j = 0;j < newarr.length;j ++) {
            if(parseInt(newarr[j] / 26) == 0) {
                result.push(arr[newarr[j]-1]);
            }else if(newarr[j] == 26) {
              result.push(arr[newarr[j] - 1]);
            }else if(parseInt(newarr[j] / 26) > 0) {
                if(newarr[j] % 26 != 0) {
                    res = arr[(parseInt(newarr[j] / 26))-1] + arr[(newarr[j] % 26) - 1];
                    result.push(res);
                }else {
                    res = arr[(parseInt(newarr[j] / 26))-2] + arr[(newarr[j] / 2)-1];
                    result.push(res);
                }
            }
        }
    }else if(number_a == number_b) {
            newarr.push(number_a);
        for(j = 0;j < newarr.length;j ++) {
            if(parseInt(newarr[j] / 26) == 0) {
                result.push(arr[newarr[j]-1]);
            }else if(newarr[j] == 26) {
              result.push(arr[newarr[j] - 1]);
            }else if(parseInt(newarr[j] / 26) > 0) {
                if(newarr[j] % 26 != 0) {
                    res = arr[(parseInt(newarr[j] / 26))-1] + arr[(newarr[j] % 26) - 1];
                    result.push(res);
                }else {
                    res = arr[(parseInt(newarr[j] / 26))-2] + arr[(newarr[j] / 2)-1];
                    result.push(res);
                }
            }
        }
    }
    return  result;
}
module.exports = get_letter_interval_2;

