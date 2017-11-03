'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var newArr = [];
    for(var i = 0; i < collectionA.length;)
    {
         var count = 0;
         var res = {};
         for(var j = i; j < collectionA.length; j++)
         {
              if (collectionA[i] == collectionA[j]) {
                   count++;
              }
         }
         res["key"] = collectionA[i];
         res["count"] = count;
         newArr.push(res);
         i += count;
    }
    var value = "value";
    for(var i = 0;i < newArr.length;i ++)
    {
        if(newArr[i]['count'] >= 3 )
        {
            for(var j = 0;j < objectB[value].length;j++)
            {
                if(objectB[value][j] == newArr[i]['key'])
                {
                    newArr[i]['count'] -= parseInt(newArr[i]['count']/3);
                }
            }
        }
    }
    return newArr;
};
