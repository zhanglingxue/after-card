'use strict';

module.exports = function countSameElements(collection) {
    var newArr = [];
    for(var i = 0; i < collection.length;)
    {
        var count = 0;
        var res = {};
        for(var j = i; j < collection.length; j++)
        {
            if (collection[i] == collection[j])
            {
                count++;
            }
        }
        if(collection[i].indexOf('-') > 0)
        {
            res['key'] = collection[i].split("-")[0];
            res['count'] = parseInt(collection[i].split("-")[1]);
            newArr.push(res);
            i ++;
            continue;
        }
        res["key"] = collection [i];
        res["count"] = count;
        newArr.push(res);
        i += count;
    }
    return newArr;
};
