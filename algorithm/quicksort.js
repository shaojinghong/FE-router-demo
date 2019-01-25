function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var flagIndex = Math.floor(arr.length / 2);
  // 从原数组中取出标志元素，并从原数组删除该值
  var flag = arr.splice(flagIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else { 
      right.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return left.concat(flag, right);
}

var arr = [10, 7, 98, 3, 30, 20 ,5, 9, 8, 20];
console.log(quickSort(arr));

