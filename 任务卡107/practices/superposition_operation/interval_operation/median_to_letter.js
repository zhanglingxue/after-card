'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  var arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var arr = [];
  var index;
  var result;
  var index, another;
  if(collection.length % 2 === 0) {
     index = collection[(collection.length / 2) -1];
     another = collection[collection.length / 2];
     result = parseInt(( Number(index) + Number(another)) / 2);
  }else {
    result = collection[Number(parseInt(collection.length / 2) -1 ) + Number(collection.length % 2)];
  }
  var result1 = [];
    if(result <= 26) {
      result1.push(arr1[result-1]);
    }else if(parseInt(result / 26) >= 1 && result % 26 !==0) {
      result1.push(arr1[parseInt(result / 26) - 1] + arr1[(result % 26)]);
    }
  return result1[0];
}

module.exports = median_to_letter;
