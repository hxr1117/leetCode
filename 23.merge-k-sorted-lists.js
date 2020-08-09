/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let arr = []
    for (let i of lists) {
        head = i
        while (head) {
            arr.push([head.val, head])
            head = head.next
        }
    }
    console.log(arr.sort((a, b) => a[0] - b[0]));
    head = new ListNode(0)
    pre = head
    while(arr.length > 0) {
        [val, node] = arr.shift()
        pre.next = new ListNode(val)
        pre = pre.next
    }
    return head.next
};
// @lc code=end

