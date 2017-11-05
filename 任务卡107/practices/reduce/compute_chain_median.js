'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = [];
  var index;
  var result;
  if(collection.indexOf('->') > 0) {
    for(var i = 0;i < collection.split('->').length;i ++) {
      arr.push(collection.split('->')[i]);
    }
  }
  arr.sort(function(m,n) {
    return m-n;
  });
  var index, another;
  if(arr.length % 2 === 0) {
     index = arr[(arr.length / 2) -1];
     another = arr[arr.length / 2];
     result =( Number(index) + Number(another)) / 2;
  }else {
    result = arr[Number(parseInt(arr.length / 2)) + Number(arr.length % 2)];
  }
  return result;
}
module.exports = compute_chain_median;
