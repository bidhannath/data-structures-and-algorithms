var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  console.log(flowerbed.length);
  for(let i=0; i<flowerbed.length; i++) {
      console.log('iteration: ', i);
      console.log(flowerbed[i], flowerbed[i-1]);
      if(flowerbed[i] === 0 && flowerbed[i-1] === 0) {
          count++;
          flowerbed[i] = 1;
      }
  }
  console.log('count: ', count);
  return n <= count;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));