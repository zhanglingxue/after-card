'use strict';
var number_map_to_word_over_26 = function(collection){
  var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = [];
  for(var i = 0;i < collection.length;i ++) {
    if(collection[i] <= 26) {
      result.push(arr[collection[i]-1]);
    }else if(parseInt(collection[i] / 26) >= 1 && collection[i] % 26 !==0) {
      result.push(arr[parseInt(collection[i] / 26) - 1] + arr[(collection[i] % 26) - 1]);
    }
  }
  console.log(result);
  return result;
};

module.exports = number_map_to_word_over_26;
