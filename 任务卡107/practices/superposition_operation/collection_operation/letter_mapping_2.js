'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = 0,aver;
  var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for(var i = 0;i < collection.length;i ++) {
    sum += collection[i];
  }
  aver = parseInt(sum / collection.length);
  return arr[aver];
}

module.exports = average_to_letter;

