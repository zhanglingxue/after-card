'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  var arr = [];
  if(number % interval === 0) {
    for(;number >=0;) {
      result.push(parseFloat((number).toFixed(1)));
      if(number === 0) {
        continue;
      }
      number -= interval;
    }
  }else {
    result.push(parseFloat((number).toFixed(1)));
    for(;number > 0;) {
      result.push(parseFloat((number - interval).toFixed(1)));
      if(number < 0) {
        continue;
      }
      number -= interval;
    }
  }
  return result;
}

module.exports = spilt_to_zero;
