









// function unique(arr) {
//   var targetArrKeys = {}
//   var targetArr = [];
//   for (var i = 0; i < arr.length; i ++) {
//     if (targetArrKeys[arr[i]]) {
//       continue;
//     } else {
//       targetArrKeys[arr[i]] = true;
//     }
//   }
//   for (var key in targetArrKeys) {
//     targetArr.push(key);
//   }
//   return targetArr;
// }

// function unique(arr) {
//   var hasPushed = {};
//   for (var i = 0; i < arr.length; i ++) {
//     if (hasPushed[arr[i]]) {
//       continue;
//     } else {
//       hasPushed[arr[i]] = true;
//       arr.push(arr[i]);
//     }
//     arr.shift();
//   }
//   return arr;
// }

// function unique(arr, iteratee) {
//   var sortArr = arr.concat().sort();
//   var targetArr = [];
//   for (var i = 0; i < sortArr.length; i++) {
//     var cur = typeof iteratee === 'function' ? iteratee(sortArr[i]) : sortArr[i];
//     var pre = typeof iteratee === 'function' ? iteratee(sortArr[i - 1]) : sortArr[i - 1];
//     if (cur !== pre) {
//       targetArr.push(cur);
//     }
//   }
//   return targetArr;
// }

// var arr = [1, 1, 'a', 'A', 2, 2];
// console.log(unique(arr, function(item) {
//   item = typeof item === 'string' ? item.toLowerCase() : item;
//   return item;
// }));


// function isPalindrome(arr){
//   arr = arr.replace(/[^0-9a-zA-Z]/g, '');
//   var k = arr.length - 1;
//   for (var i = 0; i < arr.length; i++, k --) {
//     if (i >= k) break;
//     var ahead = typeof arr[i] === 'string'? arr[i].toLowerCase(): arr[i];
//     var behind = typeof arr[k] === 'string'? arr[k].toLowerCase(): arr[k];
//     if (ahead !== behind) {
//       return false
//     };
//   }

//   return true;
// }

// var arr = 'A man, a plan, a canal: Panama';
// console.log(isPalindrome(arr));

// 穷举法
// function pickItemsOfSum(arr, sum){
  
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum && i !== j) {
//         arr = [arr[i], arr[j]];
//         return arr;
//       };
//     }
//   }
  
//   return arr;
// };

// function pickItemsOfSum(arr, sum){
//   arr = arr.sort(sortNumber);
//   for(var i = 0, j = arr.length -1; i < j;) {
//     var curSum = arr[i] + arr[j];
//     if ( curSum < sum) {
//       i ++;
//     } else if (curSum > sum) {
//       j --;
//     } else {
//       return [arr[i], arr[j]]
//     }
//   }

//   return arr;
// };

// function sortNumber(a, b) {
//   return a - b;
// }
// var arr = [10, 7, 98, 3, 5, 9, 8, 20];
// var result = pickItemsOfSum(arr, 106);
// console.log(result);



// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var flagIndex = Math.floor(arr.length / 2);
//   // 从原数组中取出标志元素，并从原数组删除该值
//   var flag = arr.splice(flagIndex, 1)[0];
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i ++) {
//     if (arr[i] < flag) {
//       left.push(arr[i]);
//     } else { 
//       right.push(arr[i]);
//     }
//   }
//   left = quickSort(left);
//   right = quickSort(right);
//   return left.concat(flag, right);
// }

// var arr = [10, 7, 98, 3, 30, 20 ,5, 9, 8, 20];
// console.log(quickSort(arr));




