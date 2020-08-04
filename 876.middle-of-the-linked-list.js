/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
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
var middleNode = function(head) {
    let A = [head];
    while(A[A.length-1].next !== null) {
        A.push(A[A.length-1].next);
        // head = head.next;
    }
    return A[Math.trunc(A.length/2)];
};
// @lc code=end

