'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var value = 'value';
    var collectionC = [];
    for(var i = 0;i < collectionA.length;i++)
    {
        for(var j = 0;j < 4;j++)
        {
            if(collectionA[i] == objectB[value][j])
            {
                collectionC.push(collectionA[i]);
            }
        }
    }
    return collectionC;
};
