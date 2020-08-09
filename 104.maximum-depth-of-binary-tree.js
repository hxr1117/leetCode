/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const depth = function (t) {
  if (t === null) return 0;
  return 1 + Math.max(depth(t.left), depth(t.right));
};
var maxDepth = function (root) {
    if(root === null) return 0
    return depth(root)
};
// @lc code=end
