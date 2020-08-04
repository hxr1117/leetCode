/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = function(arr, p, q) {
    for(;p < q;p++, q--) {
        [arr[q], arr[p]] = [arr[p], arr[q]];
    }
}
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
};
// @lc code=end

