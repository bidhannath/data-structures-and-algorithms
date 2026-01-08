/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      const subProblem = i - coin;
      if (subProblem >= 0) {
        memo[i] = Math.min(memo[i], memo[subProblem] + 1);
      }
    }
  }
  return memo[amount] !== (amount + 1) ? memo[amount] : -1;
};