'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
    var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result = [];
    var i;
    var arr1;
    if(number_a < number_b) {
        for(i = number_a-1;i < number_b;i ++) {
            result.push(arr[i]);
        }
    }else if(number_a > number_b) {
        for(i = number_a-1;i >= number_b-1;i --) {
            result.push(arr[i]);
        }
    }else if(number_a == number_b) {
        result.push(arr[number_a-1]);
    }
    return result;
}

module.exports = get_letter_interval;
