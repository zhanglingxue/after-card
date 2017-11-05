'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var index;
  var arr = [];
  if(collection_a.length === collection_b.length) {
    for (var i=0;i < collection_a.length;i++){
      for(var j = 0;j < collection_b.length;j ++) {
        if (collection_a[i] === collection_b[j]) {
          index = true;
          arr.push(index);
          continue;
        }
      }
    }
  }
  if(arr.length === collection_a.length) {
    return true;
  }
}

module.exports = compare_collections;


