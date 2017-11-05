'use strict';
var even_asc_odd_desc = function(collection){
  var res = [];
  var arr = [];
  var temp;
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] % 2 === 0) {
      res.push(collection[i]);
    }else {
      arr.push(collection[i]);
    }
  }
  //小到大
  for(var i = 0;i < res.length;i ++) {
    for(var j = 0;j < res.length - i;j ++) {
      if(res[j] > res[j + 1]) {
        temp = res[j];
        res[j]=res[j+1];
        res[j+1]=temp;
      }
    }
  }
  //大到小
  for(var i = 0;i < arr.length;i ++) {
    for(var j = 0;j < arr.length - i;j ++) {
      if(arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  for(var i = 0;i < arr.length;i ++) {
    res.push(arr[i]);
  }
  return res;
};
module.exports = even_asc_odd_desc;
