function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var arr = object_b.value;
  for(var i = 0;i < collection_a.length;i ++) {
    for(var j = 0;j < arr.length;j ++) {
      if(collection_a[i] === arr[j]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
