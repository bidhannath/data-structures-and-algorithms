/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let temp = new ListNode(0, head);
  let prev = temp;
  let curr = head;
  while(curr && curr.next) {
    let nextPointer = curr.next?.next;
    let swappingNode = curr.next;
    curr.next = nextPointer;
    swappingNode.next = curr;
    prev.next = swappingNode;
    prev = curr;
    curr = curr.next;
  }
  return temp.next;
};