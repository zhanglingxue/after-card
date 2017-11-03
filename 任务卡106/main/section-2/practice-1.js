'use strict';

module.exports = function countSameElements(collection) {
    var newArr = [];
    for(var i = 0; i < collection.length;)
    {
         var count = 0;
         var res = {};
         for(var j = i; j < collection.length; j++)
         {
              if (collection[i] == collection[j]) {
                   count++;
              }
         }
         res["key"] = collection [i];
         res["count"] = count;
         newArr.push(res);
         i += count;
    }
    return newArr;
};
