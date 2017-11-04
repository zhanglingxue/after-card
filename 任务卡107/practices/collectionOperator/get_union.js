'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
    var result = collection_a.concat( collection_b );
    for(var i = 0; i < result.length;i++){
        for(var j = i+1;j < result.length;j++) {
            if(result[i] === result[j])
                result.splice(j, 1);
        }
    }
    return result;
}
module.exports = get_union;

