/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in 
the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)
*/
///////////////MY SOLUTION (works)///////////////////////
//1.Set left to index 0, right to index length-1
//  If left = right => there only 1 unique value
// function countUniqueValues(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let count = 1;
//   if (arr.length === 0) return 0;
//   else {
//     if (arr[left] === arr[right]) return 2;
//     else {
//     //2. If left != right, move right to left buy one until right == left
//       while (arr[left] !== arr[right]) {
//         right--;
//         if (arr[right] !== arr[right + 1]) {
//           count++;
//         }
//       }
//       return count;
//     }
//   }
// }

////////////REAL SOLUTION//////////
//1. Start i at index 0, j at index 1
//   If arr[i] === arr[j] -> j++
//   Else i++, arr[i] = arr[j]
//2. Loop until j = arr.length -1
//3. Return i+1 is the number of unique values
//Purpose is get an unique array from the given array
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
}
module.exports = countUniqueValues;
