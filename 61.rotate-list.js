/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || !head.next) return head
    dummy = head;
    depth = 0;
    while(dummy){
        depth += 1
        dummy = dummy.next
    }
    k = k%depth
    while(k > 0){
        node = head;
        while(node.next.next !== null){
            node = node.next
        }
        temp = node.next;
        node.next = null;
        temp.next = head;
        head = temp;
        k -= 1
    }
    return head
};
// @lc code=end

