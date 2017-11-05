'use strict';
var is_exist_element = function(collection,element) {
  var arr = [];
  for (var i = 0; i < collection.length;) {
    arr.push(collection[i]);
    i += 2;
  }
  var res = false;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === element) {
      res = true;
      continue;
    }
  }
  return res;
};
module.exports = is_exist_element;
