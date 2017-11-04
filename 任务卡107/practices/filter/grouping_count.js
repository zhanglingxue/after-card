'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var res;
  collection.sort(function (m, n) {
    if (m < n)
      return -1;
    else if (m > n)
      return 1;
    else
      return 0;
  }); //排序
  for(var i = 0;i < collection.length;) {
    var count = 0;
    for(var j = i;j < collection.length;j ++) {
      if(collection[i] === collection[j]) {
        count ++;
      }
    }
    result[collection[i]] = count;
    i += count;
  }
  return result;
}

module.exports = grouping_count;
