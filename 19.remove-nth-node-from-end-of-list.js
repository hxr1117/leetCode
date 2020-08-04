/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let node = head;
    while(node) {
        length++;
        node = node.next;
    }
    let pre = head;
    node = head;
    if(length === n) {
        return head.next;
    }
    while(length !== n) {
        pre = node;
        node = node.next;
        length--;
    }
    pre.next = node.next;
    return head;
};
// @lc code=end

