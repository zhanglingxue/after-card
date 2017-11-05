'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var res = [];
  var sum = 0;
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] % 2 !== 0) {
       res.push((collection[i] * 3) +2);
    }
  }
  return res;
}

module.exports = hybrid_operation_to_uneven;

