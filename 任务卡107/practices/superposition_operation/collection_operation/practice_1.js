'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var res = [];
  var sum = 0;
  for(var i = 0;i < collection.length;i ++) {
    res.push((collection[i] * 3) +2);
  }
  for(var j = 0;j < res.length;j ++) {
    sum += res[j];
  }
  return sum;
}

module.exports = hybrid_operation;

