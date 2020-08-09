/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let arr = []
    let max = nums[0];
    arr.push(max)
    for (let i = 1; i < nums.length; i++) {
        arr.push(nums[i] + (arr[arr.length - 1] > 0 ? arr[arr.length - 1] : 0))
        max = Math.max(max, arr[arr.length - 1])
    }
    return max
};
// @lc code=end

