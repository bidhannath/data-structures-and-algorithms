/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let solution = [], subsets = [], n = nums.length;
  let visited = new Array(nums.length).fill(false);
  let backtrack = (startIndex) => {
    if (startIndex > n) return;
    if (solution.length <= n) {
      subsets.push([...solution]);
    }
    for (let i = startIndex; i < n; i++) {
      if (!visited[i]) {
        solution.push(nums[i]);
        visited[i] = true;
        backtrack(i + 1);
        solution.pop();
        visited[i] = false;
      }
    }
  }
  backtrack(0);
  return subsets;
};