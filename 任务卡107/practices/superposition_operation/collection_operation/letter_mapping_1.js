'use strict';

function even_to_letter(collection) {

  //在这里写入代码
   var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var result = [];
   for(var i = 0;i < collection.length;i ++) {
     if(collection[i] % 2 === 0) {
       result.push(arr[i]);
     }
   }
   return result;
}

module.exports = even_to_letter;
