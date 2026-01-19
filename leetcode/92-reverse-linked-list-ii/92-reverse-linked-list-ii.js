/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if(!head.next || left === right) return head;
  let dummyNode = new ListNode(0, head);
  let temp;
  let prev = dummyNode;
  for(let i=0; i < left -1; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  for(let i=left; i< right; i++) {
    temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  return dummyNode.next;
};