'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  var res = [];
  result = collections.map(function(item){
     return  item * 3;
  });
  return result;
};

module.exports = map_to_three_multiples;
