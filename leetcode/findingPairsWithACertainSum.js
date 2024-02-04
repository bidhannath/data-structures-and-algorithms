/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
FindSumPairs.prototype.add = function(index, val) {
  this.nums2[index] += val;
};

/** 
* @param {number} tot
* @return {number}
*/
FindSumPairs.prototype.count = function(tot) { 
  let comObj = {};
  let count = 0;
  for(let i = 0; i<this.nums1.length; i++) {
      if(comObj.hasOwnProperty(tot - this.nums1[i])) {
          comObj[(tot - this.nums1[i])]?.push(i);
      } else {
          comObj[tot - this.nums1[i]] = [i];
      }
  }
  for(let i = 0; i<this.nums2.length; i++) {
      if(comObj.hasOwnProperty(this.nums2[i])) {
          count += comObj[this.nums2[i]].length;
      }
  }
  return count;
};

/** 
* Your FindSumPairs object will be instantiated and called as such:
* var obj = new FindSumPairs(nums1, nums2)
* obj.add(index,val)
* var param_2 = obj.count(tot)
*/