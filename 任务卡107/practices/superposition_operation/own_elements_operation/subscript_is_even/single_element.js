'use strict';
var single_element = function(collection){
  var arr = [];
  var res = [];
  for (var i = 1; i < collection.length;) {
    arr.push(collection[i]);
    i += 2;
  }
  for(var i = 1; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      res.push(arr[i]);
    }
  }
  return res;
};
module.exports = single_element;
