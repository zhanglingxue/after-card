'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var value = "value";
  for(var i = 0;i < collectionA.length;i ++)
  {
      if(collectionA[i]['count'] >= 3 )
      {
          for(var j = 0;j < objectB[value].length;j++)
          {
              if(objectB[value][j] == collectionA[i]['key'])
              {
                      collectionA[i]['count'] -= parseInt(collectionA[i]['count']/3);
              }
          }
      }
  }
  return collectionA;
};
