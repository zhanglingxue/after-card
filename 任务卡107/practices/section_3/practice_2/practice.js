function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var value = "value";
  for(var i = 0;i < collection_a.length;i ++)
  {
      if(collection_a[i]['count'] >= 3 )
      {
          for(var j = 0;j < object_b[value].length;j++)
          {
              if(object_b[value][j] == collection_a[i]['key'])
              {
                      collection_a[i]['count'] -= parseInt(collection_a[i]['count']/3);
              }
          }
      }
  }
  return collection_a;
}

module.exports = create_updated_collection;
