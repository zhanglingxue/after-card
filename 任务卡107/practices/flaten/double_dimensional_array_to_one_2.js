'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  var arr = [];
  for(var i = 0;i < collection.length;i ++) {
    for(var j = 0;j < collection[i].length;j ++) {
      result.push(collection[i][j]);
    }
  }
  var index;
  for(var i = 0;i < result.length;i ++) {
    index = false;
    for(var j = 0;j < arr.length;j ++) {
      if(result[i] === arr[j]) {
        index = true;
        break;
      }
    }
    if(!index) {
      arr.push(result[i]);
    }
  }
  return arr;
}

module.exports = double_to_one;
