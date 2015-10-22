'use strict';

function arraySum(arr) {
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      total += arr[i];
    }else {
      total += arraySum(arr[i]);
    }
  }

  return total;
}

module.exports = arraySum;
