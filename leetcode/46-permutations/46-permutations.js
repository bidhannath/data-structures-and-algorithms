/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let n = nums.length;
  let solution = [];
  let visited = new Array(n).fill(false);
  let permutations = [];
  let backtrack = () => {
    if (nums.length === solution.length) {
      permutations.push([...solution]);
      return;
    }
    for (let i=0; i<n; i++) {
      if (!visited[i]) {
        solution.push(nums[i]);
        visited[i] = true;
        backtrack();
        solution.pop();
        visited[i] = false;
      }
    }
  }
  backtrack();
  return permutations;
};