'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result = [];
  var sum = 0;
  for(var i = 0;i < collection.length;i ++) {
    sum += Number(collection[i]);
  }
  return sum;
}

module.exports = calculate_elements_sum;

