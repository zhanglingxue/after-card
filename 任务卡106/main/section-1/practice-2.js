'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  for(var i = 0;i < collectionA.length;i++)
  {
      for(var j = 0;j < collectionB.length;j++)
      {
          for(var k = 0;k < collectionB[j].length;k++)
          {
              if(collectionA[i] == collectionB[j][k])
              {
                  collectionC.push(collectionA[i]);
              }
          }
      }
  }
  return collectionC;
};
