'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
    var arr = [];
    for(var i = 0;i < collection_b.length;i ++) {
        for(var j = 0;j < collection_a.length;j ++) {
            if(collection_b[i] == collection_a[j]) {
                arr.push(collection_b[i]);
            }
        }
    }
    return arr;
}

module.exports = get_intersection;
