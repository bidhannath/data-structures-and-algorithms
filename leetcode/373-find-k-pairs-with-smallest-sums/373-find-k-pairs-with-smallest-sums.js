class CustomMinHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  size() {
    return this.heap.length;
  }
  heapifyUp() {
    let i = this.size() - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  heapifyDown() {
    let i = 0;
    while ((i * 2) + 1 < this.size()) {
      let c = (i * 2) + 1;
      if (c + 1 < this.size() && this.heap[c + 1][0] < this.heap[c][0]) c++;
      if (this.heap[c][0] >= this.heap[i][0]) break;
      [this.heap[c], this.heap[i]] = [this.heap[i], this.heap[c]];
      i = c;
    }
  }
}



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  let res = [];
  const heap = new CustomMinHeap();
  let visited = new Set();
  heap.push([nums1[0] + nums2[0], 0, 0]);
  visited.add('0,0');
  while (res.length < k && heap.size() > 0) {
    const [sum, i, j] = heap.pop();
    res.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length && !visited.has(`${i},${j + 1}`)) {
      heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      visited.add(`${i},${j + 1}`);
    }
    if (i + 1 < nums1.length && !visited.has(`${i + 1},${j}`)) {
      heap.push([nums1[i + 1] + nums2[j], i + 1, j]);
      visited.add(`${i + 1},${j}`);
    }
  }
  return res;
};