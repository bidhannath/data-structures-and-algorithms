/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let res = [];
  let dfs = (curr) => {
    if (curr > n) {
      return;
    }
    res.push(curr);
    for (let j = 0; j <= 9; j++) {
      dfs((curr * 10) + j)
    }
  }
  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }
  return res;
};