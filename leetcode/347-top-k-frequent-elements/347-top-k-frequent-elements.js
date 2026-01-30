/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }
  const heap = [];
  const push = (value) => {
    heap.push(value);
    let i = heap.length - 1;
    let p;
    while (i > 0) {
      p = Math.floor((i - 1) / 2);
      if (freqMap.get(heap[p]) <= freqMap.get(heap[i])) break;
      [heap[i], heap[p]] = [heap[p], heap[i]];
      i = p;
    }
  }
  const pop = () => {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    const min = heap[0];
    heap[0] = heap[heap.length - 1]
    heap.pop();
    let i = 0;
    while ((2 * i) + 1 < heap.length) {
      let c = (2 * i) + 1;
      if (c + 1 < heap.length && freqMap.get(heap[c + 1]) < freqMap.get(heap[c])) c++;
      if (freqMap.get(heap[i]) <= freqMap.get(heap[c])) break;
      [heap[i], heap[c]] = [heap[c], heap[i]];
      i = c;
    }
    return min;
  }
  for (const [num] of freqMap) {
    push(num);
    if (heap.length > k) {
      pop();
    }
  }
  return heap;
};