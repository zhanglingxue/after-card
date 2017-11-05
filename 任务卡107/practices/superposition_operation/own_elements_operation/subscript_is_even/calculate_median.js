'use strict';
var calculate_median = function(collection){
  var result = [];
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
  }
  var res;
  var index, another;
  if(result.length % 2 === 0) {
     index = result[(result.length / 2) -1];
     another = result[result.length / 2];
     res = parseInt(( Number(index) + Number(another)) / 2);
  }else {
    res = result[Number(parseInt(result.length / 2) -1 ) + Number(result.length % 2)];
  }
  return res;
};
module.exports = calculate_median;
