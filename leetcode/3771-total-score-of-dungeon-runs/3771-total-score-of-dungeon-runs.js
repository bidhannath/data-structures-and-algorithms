/**
 * @param {number} hp
 * @param {number[]} damage
 * @param {number[]} requirement
 * @return {number}
 */
var totalScore = function (hp, damage, requirement) {
  let prefixSum = [0];
  let res = 0;
  let len = damage.length;
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + damage[i];
  }
  for (let j = 0; j < len; j++) {
    let threshold = requirement[j] + prefixSum[j + 1] - hp;
    let l = 0, r = len + 1;
    while (l < r) {
      const mid = (l+r) >> 1; // Equivalent to Math.floor((l + r) / 2)
      if (prefixSum[mid] < threshold) l = mid + 1;
      else r = mid;
    }
    if (l <= j) res += j - l + 1;
  }
  return res;
}; 