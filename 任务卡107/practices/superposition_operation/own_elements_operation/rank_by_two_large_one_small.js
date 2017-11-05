'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var res = [];
  var temp;
  for(var i = 0;i < collection.length;i ++) {
    for(var j = 0;j < collection.length - i;j ++) {
      if(collection[j] > collection[j + 1]) {
        temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }
  for(var i = 0;i < collection.length;) {
    var temp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
    i += 3;
    if(collection.length - i < 3) {
      break;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
