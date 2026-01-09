/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let l = 0, r = 0, jump = 0, farthest;
  while (r < nums.length - 1) {
    farthest = 0;
    for (let i = l; i <= r; i++) {
      farthest = Math.max(i + nums[i], farthest);
    }
    l = r + 1;
    r = farthest;
    jump++;
  }
  return jump;
};