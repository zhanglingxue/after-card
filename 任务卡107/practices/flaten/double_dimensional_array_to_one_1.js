'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] === 1) {
      result.push(collection[i]);
    }
    for(var j = 0;j < collection[i].length;j ++) {
      result.push(collection[i][j]);
    }
  }
  console.log(result);
  return result;
}

module.exports = double_to_one;
