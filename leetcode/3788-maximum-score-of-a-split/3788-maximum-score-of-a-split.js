/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumScore = function(nums) {
    let n = nums.length;
    let prefixSum = new Array(n);
    let suffixMin = new Array(n);
    let score = [];
    let min = nums[n-1];
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0, j=n-1; i<n, j>-1; i++, j--) {
        prefixSum[i] = nums[i] + (prefixSum[i-1] || 0);
        min = Math.min(min, nums[j]);
        suffixMin[j] = min;
    };
    for(let k=0; k<n-1; k++) {
        score[k] = prefixSum[k] - (suffixMin[k+1] || 0);
        max = Math.max(max, score[k]);
    }
    return max;
};