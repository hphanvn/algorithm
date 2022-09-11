/*Write a function called binarySearch which accepts a sorted array and a value and returns the index 
at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - 
you can read how to implement it here - 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;

  if (value < arr[left] || value > arr[right]) return -1;
  else {
    if (value === arr[left]) return left;

    if (value === arr[right]) return right;
  }

  while (left < right - 1) {
    if (arr[middle] === value) {
      return middle;
    } else {
      if (value > arr[middle]) {
        left = middle;
      } else {
        right = middle;
      }
      middle = Math.round((left + right) / 2);
    }
    //console.log(left + " " + middle + " " + right);
  }

  return -1;
}

module.exports = binarySearch;

///SOLUTION (RECURSION) but this just check if arr contain x
// let recursiveFunction = function (arr, x, start, end) {

//     // Base Condition
//     if (start > end) return false;

//     // Find the middle index
//     let mid=Math.floor((start + end)/2);

//     // Compare mid with given key x
//     if (arr[mid]===x) return true;

//     // If element at mid is greater than x,
//     // search in the left half of mid
//     if(arr[mid] > x)
//         return recursiveFunction(arr, x, start, mid-1);
//     else

//         // If element at mid is smaller than x,
//         // search in the right half of mid
//         return recursiveFunction(arr, x, mid+1, end);
// }

//====> For array of N element, worst case take log2(N) steps to find a given value. E.g, N= 16 -> need  4 steps
