'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = [];
  var i;
  if(number_a < number_b) {
    for(i = number_a;i <= number_b;i ++) {
      if(i % 2 == 0) {
        arr.push(i);
      }
    }
  }else if(number_a > number_b) {
    for(i = number_a;i >= number_b;i --) {
      if(i % 2 == 0) {
        arr.push(i);
      }
    }
  }else if(number_a == number_b) {
    i = number_a;
    if(i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = get_integer_interval_2;
