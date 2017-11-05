'use strict';
function map_to_even(collection){
  var result = [];
  var res = [];
  result = collection.map(function(item){
     return  item * 2;
  });
  return result;
}
module.exports = map_to_even;
