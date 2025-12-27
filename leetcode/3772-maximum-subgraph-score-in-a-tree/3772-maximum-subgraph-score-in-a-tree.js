/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} good
 * @return {number[]}
 */
var maxSubgraphScore = function (n, edges, good) {
  let downScore = new Array(n).fill(0);
  let upScore = new Array(n).fill(0);
  let tree = {};
  for (let i = 0; i < n; i++) {
    tree[i] = [];
  }
  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }
  const dfsForDownScore = (node, parent) => {
    downScore[node] = good[node] === 1 ? 1 : -1;
    for (const child of tree[node]) {
      if (child === parent) continue;
      dfsForDownScore(child, node);
      downScore[node] += Math.max(0, downScore[child]);
    }
  }
  const dfsForUpScore = (node, parent) => {
    if (parent === -1) {
      upScore[node] = 0;
    } else {
      upScore[node] += Math.max(0, upScore[parent] + (downScore[parent] - Math.max(0, downScore[node])));
    }
    for (const child of tree[node]) {
      if (child === parent) continue;
      dfsForUpScore(child, node);
    }
  }
  dfsForDownScore(0, -1);
  dfsForUpScore(0, -1);
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = downScore[i] + upScore[i];
  }
  return res;
};