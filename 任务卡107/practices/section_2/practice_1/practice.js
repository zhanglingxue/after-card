function count_same_elements(collection) {
  //在这里写入代码
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
}

module.exports = count_same_elements;
