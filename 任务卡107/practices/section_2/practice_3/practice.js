function count_same_elements(collection) {
  //在这里写入代码
 var newArr = [];
   for(var i = 0; i < collection.length;) {
     var count = 0;
     var res = {};
     for(var j = i; j < collection.length; j++) {
       if (collection[i] == collection[j]) {
         count++;
       }
     }
     if(collection[i].indexOf('-') > 0) {
       res['key'] = collection[i].split("-")[0];
       res['count'] = parseInt(collection[i].split("-")[1]);
       newArr.push(res);
       i ++;
       continue;
     }else if(collection[i].indexOf('[') > 0) {
       res['key'] = collection[i].split("[")[0];
       res['count'] = parseInt(collection[i].split("[")[1]);
       newArr.push(res);
       i ++;
       continue;
     } else if(collection[i].indexOf(':') > 0) {
       res['key'] = collection[i].split(":")[0];
       res['count'] = parseInt(collection[i].split(":")[1]);
       newArr.push(res);
       i ++;
       continue;
     }
     res["key"] = collection [i];
     res["count"] = count;
     newArr.push(res);
     i += count;
   }
   var another = [];
   for(var i = 0;i < newArr.length; ){
     var count = 0;
     var count1=0;
     var arr = {};
     for(var j = i; j < newArr.length; j++) {
       if (newArr[i]['key'] == newArr[j]['key']) {
         count++;
         count1 += newArr[j]['count'];
       }
     }
     arr["name"] = newArr[i]['key'];
     arr["summary"] = count1;
     another.push(arr);
     i += count;
   }
 return another;
}

module.exports = count_same_elements;
