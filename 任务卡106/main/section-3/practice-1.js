'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var value = "value";
  for(var i = 0;i < collectionA.length;i ++)
  {
      for(var j = 0;j < objectB[value].length;j++)
      {
          if(objectB[value][j] == collectionA[i]['key'])
          {
              collectionA[i]['count'] -= 1;
          }
      }
  }
  return collectionA;
};
