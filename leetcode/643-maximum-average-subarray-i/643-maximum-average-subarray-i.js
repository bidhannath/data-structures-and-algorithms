/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0,k).reduce((acc, curr) => acc+curr, 0);
    let maxSum = sum;
    let i=0, j=k;
    while(j<nums.length) {
        sum = sum - nums[i] + nums[j];
        maxSum = Math.max(sum, maxSum)
        i++;
        j++;
    }
    return maxSum/k;
};