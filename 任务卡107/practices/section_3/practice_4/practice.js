function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newArr = [];
    for(var i = 0; i < collection_a.length;)
    {
        var count = 0;
        var res = {};
        for(var j = i; j < collection_a.length; j++)
        {
            if (collection_a[i] === collection_a[j])
            {
                count++;
            }
        }
        if(collection_a[i].indexOf('-') > 0)
        {
            res['key'] = collection_a[i].split("-")[0];
            res['count'] = parseInt(collection_a[i].split("-")[1]);
            newArr.push(res);
            i ++;
            continue;
        }
        res["key"] = collection_a[i];
        res["count"] = count;
        newArr.push(res);
        i += count;
    }
    var value = "value";
    for(var i = 0;i < newArr.length;i ++)
    {
        if(newArr[i]['count'] >= 3 )
        {
            for(var j = 0;j < object_b[value].length;j++)
            {
                if(object_b[value][j] == newArr[i]['key'])
                {
                    newArr[i]['count'] -= parseInt(newArr[i]['count']/3);
                }
            }
        }
    }
    return newArr;
}

module.exports = create_updated_collection;
