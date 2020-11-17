/* Sliding Window

write a function which accepts an array of integers
and a number. The function should calculate the max
sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
*/

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  const length = arr.length
  if (num > length) return null;
  // calculate max sum of first n elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // set tempSum to the val of maxSum
  tempSum = maxSum;
  // loops remainder of array
  for (let i = num; i < length; i++) {
    // sliding window algorithm
    tempSum = tempSum - arr[i - num] + arr[i];
    // 3 - 1 + 5 = 7
    // 7 - 2 + 2 = 7
    // 7 - 5 + 8 = 10
    // 10 - 2 + 1 = 9
    // 9 - 8 + 5 = 6
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
