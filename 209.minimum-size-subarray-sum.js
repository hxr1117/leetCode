/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let ans = Infinity
    let left = 0
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= s) {
            ans = Math.min(ans, i - left + 1)
            sum -= nums[left++]
        }
    }
    return ans !== Infinity ? ans : 0
};
// @lc code=end

