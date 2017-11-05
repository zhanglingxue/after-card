'use strict';

function compute_median(collection) {
  //在这里写入代码
  var arr = [];
  var index;
  var result;
  collection.sort(function(m,n) {
    return m-n;
  });
  var index, another;
  if(collection.length % 2 === 0) {
     index = collection[(collection.length / 2) -1];
     another = collection[collection.length / 2];
     result =( Number(index) + Number(another)) / 2;
  }else {
    result = collection[Number(parseInt(collection.length / 2) -1 ) + Number(collection.length % 2)];
  }
  return result;
}

module.exports = compute_median;


