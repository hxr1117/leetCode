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
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    res = []
    help(root, res)
    return res
};

const help = function(t, res) {
    if(t !== null) {
        help(t.left, res)
        res.push(t.val)
        help(t.right, res)
    }
}
// @lc code=end

