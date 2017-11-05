'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var count = 0;
  var aver;
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] % 2 !==0) {
      count ++;
      sum += collection[i];
    }
  }
  aver = sum / count;
  return aver;
}

module.exports = average_uneven;
