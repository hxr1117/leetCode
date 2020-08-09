/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = []
    pre = nums[0]
    let max = 0
    res.push(1)
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > pre) {
            res.push(res[res.length - 1] + 1)
            max = Math.max(res[res.length - 1], max)
        } else {
            res.push(1)
        }
        pre = nums[i]
    }
    console.log(res)
    return max
};
// @lc code=end

