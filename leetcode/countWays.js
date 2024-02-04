function countWays(n) {
  console.log('in count function');
  const ways = new Array(n+1).fill(0);
  ways[0] = 1;
  const moves = [3, 5, 10];
  for (let i = 0; i < moves.length; i++) {
    for (let j = moves[i]; j <= n; j++) {
      ways[j] += ways[j - moves[i]];
    }
    console.log('for ', i, ': ' ,ways);
  }
  console.log(ways[n]);
}

countWays(13);