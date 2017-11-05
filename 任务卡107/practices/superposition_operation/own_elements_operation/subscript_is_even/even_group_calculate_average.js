'use strict';
var even_group_calculate_average = function(collection){
  var result = [];
  var arr = [];
  var newarr = [];
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for(var i = 1;i < collection.length;){
    result.push(collection[i]);
    i += 2;
  }
  var sum = 0,aver;
  for(var j = 0;j < result.length;j ++) {
    if(result[j] % 2 === 0) {
      arr.push(result[j]);
    }
  }
  if(arr.length > 0) {
    if(arr[0].toString().length === 3) {
      for(var i = 0;i < arr.length;i ++) {
        sum +=arr[i];
      }
      aver = sum / arr.length;
      newarr.push(aver);
      return newarr;
    }else {
      for(var i = 0;i < arr.length;i ++) {
        if(arr[i].toString().length === 1) {
          arr1.push(arr[i]);
        }else if(arr[i].toString().length === 2) {
          arr2.push(arr[i]);
        }else {
          arr3.push(arr[i]);
        }
      }
      var sum1 = 0,aver1;
      var sum2 = 0,aver2;
      var sum3 = 0,aver3;
      for(var i = 0;i < arr1.length;i ++) {
        sum1 += arr1[i];
      }
      aver1 = sum1 / arr1.length;
      newarr.push(aver1);
      for(var i = 0;i < arr2.length;i ++) {
        sum2 += arr2[i];
      }
      aver2 = sum2 / arr2.length;
      newarr.push(aver2);
      for(var i = 0;i < arr3.length;i ++) {
        sum3 += arr3[i];
      }
      aver3 = sum3 / arr3.length;
      newarr.push(aver3);
      return newarr;
    }
  }else {
    return [0];
  }
};
module.exports = even_group_calculate_average;
