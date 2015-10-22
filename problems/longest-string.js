'use strict';

function longestString(arr) {
  var longest;

for (var i = 0; i< arr.length; i++) {
var isString = typeof arr[i] === 'string';
var isLonger = !longest || arr[i].length > longest.length;
  if (isString && isLonger){
    longest = arr[i];
  }
}

return longest;
}
module.exports = longestString;
