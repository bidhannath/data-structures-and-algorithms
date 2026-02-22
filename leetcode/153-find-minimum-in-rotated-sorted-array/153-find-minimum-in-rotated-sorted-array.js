/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0, right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = (left + right) >> 1;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};